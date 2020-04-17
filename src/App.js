import React from 'react';
import './styles/app.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AppLayout from "./containers/AppLayout";
import Login from "./components/Login";
import NotFound from "./components/Errors/NotFound";
import EsqueceuSenha from "./components/EsqueceuSenha";
import Registrar from "./components/Registrar";

export default function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" name={'Home'} render={props => <AppLayout {...props} />} />
          <Route exact path="/login" name={'Login'} render={props => <Login {...props} />}/>
          <Route exact path="/esqueceu-a-senha" name={'Redefinir Senha'} render={props => <EsqueceuSenha {...props} />}/>
          <Route exact path="/novo-cadastro" name={'Novo Cadastro'} render={props => <Registrar {...props} />}/>

          <Route exact path="*" component={NotFound}/>
        </Switch>
      </Router>
  );
}
