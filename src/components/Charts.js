import React from "react";

import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

// importa do componente de grafico, Bar = Barra, Pie = Pizza
import { Bar, Pie } from "react-chartjs-2";

// configuraçao do grafico formato BAR
const dataBar = {
  labels: ["item 1", "item 2", "item 3", "item 4", "item 5"],
  datasets: [
    {
      label: "Chart Bar",
      backgroundColor: "#fff",
      borderColor: "#ccc",
      borderWidth: 1,
      data: [10, 20, 30, 78, 345],
      backgroundColor: [
        '#4040b2',
        '#f05928',
        '#eb3f67',
        '#19b77d',
        '#b7e03c'
    ]
    },
  ],
};

// configuraçao do grafico formato PIE
const dataPie = {
  labels: ["item 1", "item 2", "item 3"],
  datasets: [
    {
      label: "Chart Pie",
      backgroundColor: "#fff",
      borderColor: "#ccc",
      borderWidth: 1,
      data: [100, 78, 85],
      backgroundColor: [
          '#4040b2',
          '#f05928',
          '#eb3f67'
      ]
    },
  ],
};

export default function Charts() {
  return (
    <div>
      <Row>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <CardHeader>Chart Bar</CardHeader>
            <CardBody>
              <Bar data={dataBar} width={100} height={80} />
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>
            <CardHeader>Chart Pie</CardHeader>
            <CardBody>
              <Pie data={dataPie} width={100} height={80} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
