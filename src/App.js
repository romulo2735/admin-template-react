import React from 'react';
import './styles/app.css';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom'

import {ToastProvider} from 'react-toast-notifications';
import { ToastCustom } from './components/ToastCustom';

import AppLayout from "./containers/AppLayout";
import Login from "./pages/Login";
import NotFound from "./components/Errors/NotFound";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Registrar from "./pages/Registrar";

export default function App() {
  return (
      <Router>
        <Switch>
          <ToastProvider components={{ Toast:ToastCustom }}>
            <Route exact path="/login" name="Login" render={props => <Login {...props} />}/>
            <Route exact path="/esqueceu-a-senha" name="Redefinir Senha" render={props => <EsqueceuSenha {...props} />}/>
            <Route exact path="/novo-cadastro" name="Novo Cadastro" render={props => <Registrar {...props} />}/>
            <Route exact path="/page-not-found" name="NotFound" component={NotFound}/>
            <Route path="/" name="Home" render={props => <AppLayout {...props} />} />
          </ToastProvider>
        </Switch>
      </Router>
  );
}
