import React from 'react';
import {Container, Col, Row, Form, Card, CardBody, Input, InputGroup, Button} from 'reactstrap';
import useClass from "../hooks/add-class";
import {Link} from "react-router-dom";

const EsqueceuSenha = (props) => {
  useClass('bg-blue')
  return (
      <div className={'mt-5 flex-row align-items-center'}>
        <Container>
          <Row className={'justify-content-center'}>
            <Col className={'col-6'}>
              <Card>
                <CardBody>
                  <Form>
                    <h1>Esqueceu a senha!</h1>
                    <p>Digite o email para receber o link de redefinição.</p>

                    <InputGroup className={'mb-3'}>
                      <Input type="email" placeholder="E-mail"/>
                    </InputGroup>

                    <InputGroup className={'mb-3'}>
                      <Button outline color={'primary'}>Enviar</Button>
                      <Link to={'/login'}>
                        <Button color={'link'}>Login</Button>
                      </Link>
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

export default EsqueceuSenha;