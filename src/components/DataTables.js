import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from "reactstrap";

import DefaultDatatables from "react-bootstrap-table-next";
import paginatorFactory from 'react-bootstrap-table2-paginator';

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
      { id: 4, name: "Ryzen 7400x", price: 3000 },
      { id: 5, name: "Ryzen 7400x", price: 3000 },
      { id: 6, name: "Ryzen 7400x", price: 3000 },
      { id: 7, name: "Ryzen 7400x", price: 3000 },
      { id: 8, name: "Ryzen 7400x", price: 3000 },
      { id: 9, name: "Ryzen 7400x", price: 3000 },
      { id: 10, name: "Ryzen 7400x", price: 3000 },
      { id: 11, name: "Ryzen 7400x", price: 3000 },
      { id: 12, name: "Ryzen 7400x", price: 3000 },
      { id: 13, name: "Ryzen 7400x", price: 3000 },
      { id: 14, name: "Ryzen 7400x", price: 3000 },
      { id: 15, name: "Ryzen 7400x", price: 3000 },
      { id: 16, name: "Ryzen 7400x", price: 3000 },
      { id: 17, name: "Ryzen 7400x", price: 3000 },
    ];
    setData(dataset);
  }, []);

  return (
    <Row>
      <Col xs={12} sm={6} md={4}>
        <Card>
          <CardHeader>Datatables</CardHeader>
          <CardBody>
            <DefaultDatatables
              keyField="id"
              data={data}
              columns={columns}
              hover
              condesed
              // bordered={false}
              pagination={paginatorFactory()}
            />
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Col>
    </Row>
  );
}
