import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Todos from './pages/Todos';
export default function Routes(){
    return( <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Todos} />
                </Switch>
            </BrowserRouter>
            );
}