import React, {Component} from 'react';
import {Container, Col, Row, Form, Card, CardBody, Input, InputGroup, Button} from 'reactstrap';
import useClass from "../hooks/add-class";
import {Link} from "react-router-dom";

const Login = () => {
  useClass('bg-blue')
  return (
      <div className={'mt-5 flex-row align-items-center'}>
        <Container>
          <Row className={'justify-content-center'}>
            <Col className={'col-6'}>
              <Card>
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <p>Digite o email e senha para acessar! Sem cadastro? <Link to={'/novo-cadastro'} >Cadastrar-se</Link></p>

                    <InputGroup className={'mb-3'}>
                      <Input type="email" placeholder="E-mail"/>
                    </InputGroup>

                    <InputGroup className={'mb-3'}>
                      <Input type="password" placeholder="Senha"/>
                    </InputGroup>

                    <InputGroup className={'mb-3'}>
                      <Button outline color={'primary'}>Acessar</Button>
                    </InputGroup>

                    <InputGroup className={'mb-3'}>
                      <Link to={'/esqueceu-a-senha'} >Esqueceu a senha?  </Link>
                    </InputGroup>

                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Login;