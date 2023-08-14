import React from "react";
import SailLogo from "../../assets/SailInnovationLogo.png";
import { Button, Col, Form, Input, Row } from "antd";

const Signin = () => {
  const onFinish = () => {
    console.log("Signin Successful");
  };
  return (
    <div className=" grid-cols-2  h-[100svh]">
      <div className="w-[10rem] mx-[2rem]">
        <img src={SailLogo} alt="SailLogo" />
      </div>

      <div className="  justify-center m-auto my-[4rem] items-center bg-white w-[25rem]">
        <div className="text-center  text-2xl font-bold">
          <h1>Sign In</h1>
        </div>
        <div className="block justify-center items-center flex-col  h-80 mt-10 ">
          <div className="ml-[1.4rem]">
            <Form layout="vertical" onFinish={onFinish}>
              <Row>
                <Col span={24}>
                  <Form.Item name="email"
                  rules={[{ required: true, message: 'Please input your EmailAddress!' }]}>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                  >
                    <Input.Password 
                    placeholder="Password"
                    type="text"
                    id="password"
                     className="py-3" />
                  </Form.Item>
                </Col>
                <div className="text-sm font-normal mb-2 pl-[1rem] text-[#75C2F6]">
                  <h6>Forgot password?</h6>
                </div>
                <Col span={24}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="bg-[#134c98] flex items-center justify-center py-5"
                    block
                  >
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Signin;
