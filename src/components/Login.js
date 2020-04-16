import React, {Component} from 'react';
import {Container, Col, Row, Form, Card, CardBody, Input, InputGroup, Button} from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
        <div className={'mt-5 flex-row align-items-center'}>
          <Container>
            <Row className={'justify-content-center'}>
              <Col className={'col-6'}>
                <Card>
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p>Entre com o email e a senha para acessar!</p>

                      <InputGroup className={'mb-3'}>
                        <Input type="email" placeholder="E-mail"/>
                      </InputGroup>

                      <InputGroup className={'mb-3'}>
                        <Input type="password" placeholder="Senha"/>
                      </InputGroup>

                      <InputGroup className={'mb-3'}>
                        <Button color={'primary'}>Acessar</Button>
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
}
