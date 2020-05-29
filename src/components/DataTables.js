import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from "reactstrap";

import DefaultDatatables from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "id",
    text: "Id",
  },
  {
    dataField: "name",
    text: "Name",
  },
  {
    dataField: "price",
    text: "Price",
  },
];

export default function DataTables() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataset = [
      { id: 1, name: "PS5", price: 3000 },
      { id: 2, name: "Xbox 720", price: 3000 },
      { id: 3, name: "Ryzen 7400x", price: 3000 },
    ];
    setData(dataset);
  }, []);

  return (
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Card>
          <CardHeader>Datatables</CardHeader>
          <CardBody>
            <DefaultDatatables keyField="id" data={data} columns={columns} />
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
    </Row>
  );
}
