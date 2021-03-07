import React, {useState} from 'react';
import {Userscontainer} from './style';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {GlobalStyle} from '../Todos/style';
import {Edit} from '@styled-icons/boxicons-regular/Edit';
import {DeleteForever} from '@styled-icons/material/DeleteForever';
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline';
import {Tasks} from '@styled-icons/fa-solid/Tasks';
import {Logout} from '@styled-icons/material-outlined/Logout';

const edit = <Edit />;
const trash = <DeleteForever />;
const close = <CloseOutline />;
const todosIcon = <Tasks />;
const logout = <Logout />;

export default function Users(){
    let history = useHistory();
    const userLogged = localStorage.getItem('user');
    if(userLogged!=='admin'){
        history.push('/todos');
    }
    const [users, setUsers] = useState([]);
    const [userEditing, setUserEditing] = useState(null);
    
    const handleSubmit = (event)=>{
        event.preventDefault();

        const form = document.forms.createUsers;

        const user = form.user.value;
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;

        if(user === ''){
            alert('O usuário deve ser preenchido.');
            return;
        }

        if(password === ''){
            alert('A senha deve ser preenchida');
            return
        }

        if(password !== passwordConfirm){
            alert('As senhas devem ser iguais');
            return
        }

        const newUser = {user: user, password: password}

        const oldUsers = [...users];

        oldUsers.push(newUser);

        setUsers(oldUsers);
    }

    const handleDelete = (index)=>{
        let usersObj = [...users];
        usersObj.splice(index, 1);

        setUsers(usersObj);
    }

    function handleSubmitEdit(event){
        event.preventDefault();

        const form = document.forms.editUser;

        const user = form.user.value;
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;

        if(user === ''){
            alert('O usuário deve ser preenchido.');
            return;
        }

        if(password === ''){
            alert('A senha deve ser preenchida');
            return
        }

        if(password !== passwordConfirm){
            alert('As senhas devem ser iguais');
            return
        }

        let oldUsers = [...users];
        
        oldUsers[userEditing].user = user;
        oldUsers[userEditing].password = password;

        setUsers(oldUsers);

        let modalClose = document.getElementsByClassName('closeModal')[0];
        
        modalClose.click();
    }

    return( <Userscontainer>
                <GlobalStyle />
                <div class='title'>
                    <h1>Usuários</h1>
                </div>

                <ul className='list'>
                    {
                        users.map((user, index)=>{
                            return(
                                <li key={index}>
                                    <div>
                                        <a>{user.user}</a> 
                                    </div>
                                    <div>
                                        <a>{user.password}</a> 
                                    </div>

                                    <div>
                                        <button onClick={()=>setUserEditing(index)}>{edit}</button>
                                        <button onClick={()=>handleDelete(index)}>{trash}</button>
                                    </div>
                                </li>    
                            );
                        })
                    }
                </ul>

                <form name='createUsers' className='createUsers' onSubmit={handleSubmit}>
                    <div>
                        <label>Usuário</label>
                        <input type='text' name='user' />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type='password' name='password' />
                    </div>
                    <div>
                        <label>Confirme sua senha</label>
                        <input type='password' name='passwordConfirm' />
                    </div>

                    <nav className='navButtons formButton'>
                        <ul>
                            <button type='submit'>Adicionar
                                <span></span><span></span><span></span><span></span>
                            </button>
                        </ul>
                    </nav>

                    <Link className='anotherPageLink' to="/todos">{todosIcon} Tarefas</Link>
                    <Link className='anotherPageLink' to="/">{logout} Log out</Link>
                </form>

                {userEditing!=null&&
                    <div name='editUserModal' className='editUserModal'>
                        <div name='editUsersDiv' className='editUsersDiv'>
                            <button className='closeModal' onClick={()=>setUserEditing(null)}>{close}</button>

                            <div className='modalForm'>
                                <h2>
                                    {users[userEditing].user}
                                </h2>

                                <form name='editUser' class='editUser' onSubmit={handleSubmitEdit}>
                                    <div className='divFormEditUser'>
                                        <div>
                                            <label>Usuário</label>
                                            <input type='text' name='user' defaultValue={users[userEditing].user} />
                                        </div>
                                        <div>
                                            <label>Senha</label>
                                            <input type='password' name='password' defaultValue={users[userEditing].password} />
                                        </div>
                                        <div>
                                            <input type='password' name='passwordConfirm' defaultValue={users[userEditing].password} />
                                        </div>
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
            </Userscontainer> );
}