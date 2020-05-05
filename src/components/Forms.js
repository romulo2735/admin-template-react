import React from "react";
import {
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "reactstrap";
import {useForm} from "react-hook-form";

export default function Forms() {
  const {handleSubmit, watch, errors, register} = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
      <div>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Card>
              <CardHeader>Forms</CardHeader>
              <CardBody>
                <form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Insert your name"
                        innerRef={register({required: true})}
                    />
                    {errors && <span className="text-danger">field is required</span>}
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit">Send</Button>
                  </FormGroup>
                </form>
              </CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
  );
}
