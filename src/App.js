import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";

function onFinish(val) {
  //Send input field value to server via axios
  console.log("Send post request", val);
  axios
    .post("http://127.0.0.1:5000/write", {
      name: val.name,
      age: val.age,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function handleRead() {
  //Receive file from server and read it
}

function App() {
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: "Please input your age!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row gutter={10}>
        <Col>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Col>
        <Col>
          <Button type="dashed">Read Data</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default App;
