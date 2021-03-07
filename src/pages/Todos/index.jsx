import React, {useState} from 'react';
import {Todoscontainer} from './style';
import { Link } from 'react-router-dom';
import {GlobalStyle} from './style';
import {ExclamationCircle} from '@styled-icons/bootstrap/ExclamationCircle';
import {Edit} from '@styled-icons/boxicons-regular/Edit';
import {DeleteForever} from '@styled-icons/material/DeleteForever';
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline';
import {User} from '@styled-icons/boxicons-regular/User';
import {Logout} from '@styled-icons/material-outlined/Logout';

const hurry = <ExclamationCircle />;
const edit = <Edit />;
const trash = <DeleteForever />;
const close = <CloseOutline />;
const userIcon = <User />;
const logout = <Logout />;

export default function Todos(){
    const [todos, setTodos] = useState([]);
    const [todoEditing, setTodoEditing] = useState(null);
    
    const handleSubmit = (event)=>{
        event.preventDefault();

        const form = document.forms.createTodos;

        const name = form.name.value;
        const status = form.status.value;

        if(name === ''){
            alert('O nome da tarefa deve ser preenchido.');
            return;
        }

        if(status === ''){
            alert('O status da tarefa deve ser selecionado');
            return
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

        let modalClose = document.getElementsByClassName('closeModal')[0];
        
        modalClose.click();
    }

    return( <Todoscontainer>
                <GlobalStyle />
                <div class='title'>
                    <h1>Tarefas</h1>
                </div>
                <ul className='list'>
                    {
                        todos.map((todo, index)=>{
                            return(
                                <li key={index}>
                                    <div>
                                        <strong value={renderStatus(todo.status)}>
                                            {
                                                renderStatus(todo.status)
                                            }
                                            
                                            {renderStatus(todo.status)=='A fazer'&&
                                                <div>{hurry}</div>
                                            }
                                        </strong>
                                    </div>

                                    <div>
                                        <a>{todo.name}</a> 
                                    </div>

                                    <div>
                                        <button onClick={()=>setTodoEditing(index)}>{edit}</button>
                                        <button onClick={()=>handleDelete(index)}>{trash}</button>
                                    </div>
                                </li>    
                            );
                        })
                    }
                </ul>

                <form name='createTodos' className='createTodos' onSubmit={handleSubmit}>
                    <div>
                        <label>Nome da tarefa</label>
                        <input type='text' name='name' />
                    </div>
                    <div>
                        <label>Status da tarefa</label>
                        <select name='status'>
                            <option defaultValue=''></option>
                            <option value='0'>A fazer</option>
                            <option value='1'>Fazendo</option>
                            <option value='2'>Finalizada</option>
                        </select>
                    </div>

                    <nav className='navButtons formButton'>
                        <ul>
                            <button type='submit'>Adicionar
                                <span></span><span></span><span></span><span></span>
                            </button>
                        </ul>
                    </nav>
                    
                    {localStorage.getItem('user')==='admin'&&
                        <Link className='anotherPageLink' to="/users">{userIcon} Usuários</Link>
                    }
                    <Link className='anotherPageLink' to="/">{logout} Log out</Link>
                </form>

                

                {todoEditing!=null&&
                    <div name='changeStatusModal' className='changeStatusModal'>
                        <div name='changeStatusDiv' className='changeStatusDiv'>
                            <button className='closeModal' onClick={()=>setTodoEditing(null)}>{close}</button>

                            <div className='modalForm'>
                                <h2>
                                    {todos[todoEditing].name}
                                </h2>

                                <form name='editStatus' onSubmit={handleSubmitStatus}>
                                    <div className='inputForm'>
                                        <label>Status</label>
                                        <select name='status'>
                                            <option selected={todos[todoEditing].status=='0'} value='0'>A fazer</option>
                                            <option selected={todos[todoEditing].status=='1'} value='1'>Fazendo</option>
                                            <option selected={todos[todoEditing].status=='2'} value='2'>Finalizada</option>
                                        </select>
                                    </div>
                                    <nav className='navButtons'>
                                        <ul>
                                            <button type='submit'>Salvar
                                                <span></span><span></span><span></span><span></span>
                                            </button>
                                        </ul>
                                    </nav>
                                </form>
                            </div>
                        </div>
                    </div>
                }
            </Todoscontainer> );
}