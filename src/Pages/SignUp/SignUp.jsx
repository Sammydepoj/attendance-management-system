import { useState } from "react";
import SailLogo from "../../assets/SailInnovationLogo.png";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button, Input } from "antd";
import useGatherInputFields from "../../hooks/useGatheInputFields";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState();
  // console.log(formData);

  const formSubmitHandler = async () => {
    setLoading(true);
    try {
      const sendData = await fetch(
        "https://ams-backend-yjri.onrender.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const response = await sendData.json();
      setLoading(false);

      console.log(response);
      alert(response?.responseMessage);
    } catch (error) {
      console.log(`There is error while trying to send ${error}`);
      setLoading(false);
    }
  };
  const { setEventInputs } = useGatherInputFields(setFormData);

  return (
    <div className="grid-cols-2  h-[100svh]">
      <div className="w-[10rem] mx-[2rem]">
        <img src={SailLogo} alt="SailLogo" />
      </div>

      <div className=" justify-center m-auto items-center bg-white w-[25rem]">
        <div className="text-center text-2xl font-bold">
          <h1>Sign Up</h1>
        </div>

        <div className="block justify-center items-center flex-col h-80 mt-10">
          <div className="ml-[1.4rem]">
            <Form
              layout="vertical"
              onFinish={formSubmitHandler}
              fields={[
                {
                  name: "email",
                  value: formData?.email,
                },
                {
                  name: "password",
                  value: formData?.password,
                },
                {
                  name: "firstName",
                  value: formData?.firstName,
                },
                {
                  name: "lastName",
                  value: formData?.lastName,
                },
                {
                  name: "programme",
                  value: formData?.programme,
                },
              ]}
            >
              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "firstName");
                      }}
                      name="firstName"
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      rules={[
                        {
                          required: true,
                          message: "please enter your First Name",
                        },
                      ]}
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item>
                    <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "lastName");
                      }}
                      name="lastName"
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      rules={[
                        {
                          required: true,
                          message: "please enter your Last Name",
                        },
                      ]}
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item>
                    <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "email");
                      }}
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      rules={[
                        { required: true, message: "please enter your email" },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                      className="py-3"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "programme");
                      }}
                      name="programme"
                      placeholder="Programme"
                      type="programme"
                      rules={[
                        {
                          required: true,
                          message: "please enter your programme",
                        },
                        {
                          type: "email",
                          message: "Please enter a valid programme",
                        },
                      ]}
                      id="pragramme"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item>
                    <Input.Password
                      onChange={(e) => {
                        setEventInputs(e.target.value, "password");
                      }}
                      name="password"
                      type="password"
                      placeholder="Password"
                      rules={[
                        { required: true, message: "please enter a password" },
                      ]}
                      id="password"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item>
                    <Input.Password
                      onChange={(e) => {
                        setEventInputs(e.target.value, "password");
                      }}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      type="confirmPassword"
                      rules={[
                        {
                          required: true,
                          message: "please enter your password",
                        },
                        {
                          type: "email",
                          message: "Please enter a valid password",
                        },
                      ]}
                      id="confirmPassword"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="bg-[#134c98] flex items-center justify-center py-5"
                    block
                  >
                    Sign Up
                  </Button>
                </Col>
                <Col span={24}>
                  <span className="text-sm font-normal md-2 pl-[1rem] ">
                    Already have an account? <Link to="/" className="text-[#75C2F6]">Sign In</Link>
                  </span>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
