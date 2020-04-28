import React from 'react';
import {FormGroup, Label, Input, Row, Col, Card, CardHeader, CardBody, CardFooter, Button} from 'reactstrap';

export default function Forms() {

  return (
      <div>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Card>
              <CardHeader>
                Forms
              </CardHeader>
              <CardBody>
                <form onSubmit>
                  <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input type="text" placeholder="Insert your name"/>
                  </FormGroup>
                  <FormGroup>
                    <Button>Send</Button>
                  </FormGroup>
                </form>
              </CardBody>
              <CardFooter>
                Footer
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
  );
}

