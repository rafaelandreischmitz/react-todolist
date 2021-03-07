import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Logincontainer} from './style';
import {GlobalStyle} from '../Todos/style';

export default function Login(){
    let history = useHistory();

    const users = [
        {
            user: 'admin', password: 'admin123'
        },
        {
            user: 'suporte', password: 'suporte123'
        }
    ]

    const handleSubmit = (event)=>{
        event.preventDefault();

        const form = document.forms.login;

        const user = form.user.value;
        const password = form.password.value;

        if(user === ''){
            alert('O usuário deve ser preenchido.');
            return;
        }

        if(password === ''){
            alert('A senha deve ser preenchida.');
            return
        }

        const userExists = users.filter(obj => {
            return obj.user === user;
        });

        if(userExists==''){
            alert('Usuário não encontrado.');
            return
        }

        if(userExists[0].password!==password){
            alert('Senha incorreta.');
            return
        }

        history.push('/todos');

    }

    return( <Logincontainer>
                <GlobalStyle />
                <div class='title'>
                    <h1>Login</h1>
                </div>
                <form name='login' className='loginForm' onSubmit={handleSubmit}>
                    <div>
                        <label>Usuário</label>
                        <input type='text' name='user' />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type='password' name='password' />
                    </div>

                    <nav className='navButtons formButton'>
                        <ul>
                            <button type='submit'>Entrar
                                <span></span><span></span><span></span><span></span>
                            </button>
                        </ul>
                    </nav>
                </form>
            </Logincontainer> );
}