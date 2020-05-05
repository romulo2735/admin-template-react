import React from 'react';
import './styles/app.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import AppLayout from "./containers/AppLayout";
import Login from "./pages/Login";
import NotFound from "./components/Errors/NotFound";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Registrar from "./pages/Registrar";
import Cards from './components/Cards';
import Forms from './components/Forms';
import {ToastProvider} from 'react-toast-notifications';

export default function App() {
  return (
      <Router>
        <Switch>
          <ToastProvider>
            <Route exact path="/login" name="Login" render={props => <Login {...props} />}/>
            <Route exact path="/esqueceu-a-senha" name="Redefinir Senha" render={props => <EsqueceuSenha {...props} />}/>
            <Route exact path="/novo-cadastro" name="Novo Cadastro" render={props => <Registrar {...props} />}/>
            <Route exact path="/cards" name="Cards" render={props => <Cards {...props} />} />
            <Route exact path="/forms" name="Forms" render={props => <Forms {...props} />} />
            <Route exact path="/" name="Home" render={props => <AppLayout {...props} />} />
            <Route exact path="*" component={NotFound}/>
          </ToastProvider>
        </Switch>
      </Router>
  );
}
