import { Button, Col, Input, Row } from "antd";

function handleSubmit() {
  console.log("handle submit");
}

function App() {
  return (
    <Col>
      <Row>
        <Col md={6}>Name : </Col>
        <Col md={6}>
          <Input placeholder="Please enter name" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>Age : </Col>
        <Col md={6}>
          <Input placeholder="Please enter age" />
        </Col>
      </Row>
      <Row gutter={10}>
        <Col>
          <Button onClick={handleSubmit} type="primary">
            Submit
          </Button>
        </Col>
        <Col>
          <Button type="dashed">Read Data</Button>
        </Col>
      </Row>
    </Col>
  );
}

export default App;
