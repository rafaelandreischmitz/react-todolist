import React, {useState} from 'react';
import {Userscontainer} from './style';
import {GlobalStyle} from '../Todos/style';
import {Edit} from '@styled-icons/boxicons-regular/Edit';
import {DeleteForever} from '@styled-icons/material/DeleteForever';
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline';

const edit = <Edit />;
const trash = <DeleteForever />;
const close = <CloseOutline />

export default function Users(){
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