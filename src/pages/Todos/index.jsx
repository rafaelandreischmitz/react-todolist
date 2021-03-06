import React, {useState} from 'react';
import {Todoscontainer} from './style';

export default function Todos(){
    const [todos, setTodos] = useState([]);
    const [todoEditing, setTodoEditing] = useState(null);
    
    const handleSubmit = (event)=>{
        event.preventDefault();

        const form = document.forms.createTodos;

        const name = form.name.value;
        const status = form.status.value;

        if(name === ''){
            alert('O nome da tarefa não pode ser vazio');
            return;
        }

        if(status === ''){
            alert('O status da tarefa não pode ser vazio');
            return;
        }

        const newTodo = {name: name, status: status}

        const oldTodos = [...todos];

        oldTodos.push(newTodo);

        setTodos(oldTodos);
    }

    const handleDelete = (index)=>{
        let todosObj = [...todos];
        todosObj.splice(index, 1);

        setTodos(todosObj);
    }

    function renderStatus(status){
        switch(status){
            case '0': return 'A fazer'; break;
            case '1': return 'Fazendo'; break;
            case '2': return 'Finalizada'; break;
        }
    }

    function handleSubmitStatus(event){
        event.preventDefault();

        const form = document.forms.editStatus;

        const status = form.status.value;

        let oldTodos = [...todos];
        
        oldTodos[todoEditing].status = status;

        setTodos(oldTodos);
    }

    return( <Todoscontainer>
                <ul>
                    {
                        todos.map((todo, index)=>{
                            return(
                                <li key={index}>
                                    <strong>
                                        {
                                            renderStatus(todo.status)
                                        }
                                    </strong>
                                    <a onClick={()=>setTodoEditing(index)}>{todo.name}</a> <button onClick={()=>handleDelete(index)}>X</button>
                                </li>    
                            );
                        })
                    }
                </ul>

                <form name='createTodos' onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Nome da tarefa'/>
                    <select name='status' placeholder='Status da tarefa'>
                        <option defaultValue=''>Selecione o status</option>
                        <option value='0'>A fazer</option>
                        <option value='1'>Fazendo</option>
                        <option value='2'>Finalizada</option>
                    </select>
                    <button type='submit'>ADD</button>
                </form>

                {todoEditing!=null&&
                    <div>
                        <h2>
                            Nome da tarefa: {todos[todoEditing].name}
                        </h2>

                        <label>Mudar o status</label>

                        <form name='editStatus' onSubmit={handleSubmitStatus}>
                            <select name='status' placeholder='Status da tarefa'>
                                <option selected={todos[todoEditing].status=='0'} value='0'>A fazer</option>
                                <option selected={todos[todoEditing].status=='1'} value='1'>Fazendo</option>
                                <option selected={todos[todoEditing].status=='2'} value='2'>Finalizada</option>
                            </select>
                            <button type='submit'>SALVAR</button>
                        </form>
                        <button onClick={()=>setTodoEditing(null)}>FECHAR</button>
                    </div>
                }
            </Todoscontainer> );
}