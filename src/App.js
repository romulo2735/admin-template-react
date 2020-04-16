import React from 'react';
import './styles/app.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/Errors/NotFound";
import EsqueceuSenha from "./components/EsqueceuSenha";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/esqueceu-a-senha" component={EsqueceuSenha}/>

                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
}
