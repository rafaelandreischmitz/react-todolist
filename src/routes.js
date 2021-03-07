import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Todos from './pages/Todos';
import Login from './pages/Login';
import Users from './pages/Users';
export default function Routes(){
    return( <BrowserRouter>
                <Switch>
                    <Route path="/todos" exact component={Todos} />
                    <Route path="/" exact component={Login} />
                    <Route path="/users" exact component={Users} />
                </Switch>
            </BrowserRouter>
            );
}