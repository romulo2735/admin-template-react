import React from 'react';
import {Container, Col, Row, Form, Card, CardBody, Input, InputGroup, Button} from 'reactstrap';
import useClass from "../hooks/add-class";
import {Link} from "react-router-dom";

const Registrar = (props) => {
  useClass('bg-blue')
  return (
      <div className={'mt-5 flex-row align-items-center'}>
        <Container>
          <Row className={'justify-content-center'}>
            <Col className={'col-6'}>
              <Card>
                <CardBody>
                  <Form>
                    <h1>Novo Usuário</h1>
                    <p>Digite os dados socilitados <Link to={'/login'}>Login</Link></p>

                    <InputGroup className={'mb-3'}>
                      <Input type="text" placeholder="Nome"/>
                    </InputGroup>

                    <InputGroup className={'mb-3'}>
                      <Input type="email" placeholder="E-mail"/>
                    </InputGroup>

                    <InputGroup className={'mb-3'}>
                      <Input type="password" placeholder="Senha"/>
                    </InputGroup>

                    <InputGroup className={'mb-3'}>
                      <Button outline color={'primary'}>Cadastrar</Button>
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

export default Registrar;