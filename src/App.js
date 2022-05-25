import { Button, Col, Divider, Form, Input, InputNumber, Row } from "antd";
import axios from "axios";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

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

  async function getData() {
    try {
      const response = await axios.get("http://127.0.0.1:5000/read");
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Row gutter={10}>
      <Col md={12}>
        <Form
          onFinish={onFinish}
          labelCol={{
            span: 0,
          }}
          wrapperCol={{
            span: 5,
          }}
        >
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
            <InputNumber min={1} max={99} defaultValue={0} />
          </Form.Item>
          <Row gutter={10}>
            <Col>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Col>
            <Col>
              <Button type="dashed" onClick={getData}>
                Read Data
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Col>
        {userData.map((val) => {
          return (
            <>
              <Col key={val.name}>
                <Row>Name: {val.name}</Row>
                <Row>Age: {val.age}</Row>
              </Col>
              <Divider />
            </>
          );
        })}
      </Col>
    </Row>
  );
}

export default App;
