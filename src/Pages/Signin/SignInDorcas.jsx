import { useEffect, useState } from "react";
import SailLogo from "../../assets/SailInnovationLogo.png";
import { Button, Col, Form, Input, Row } from "antd";
import useGatherInputFields from "../../hooks/useGatheInputFields";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard/details", {
        replace: true,
      });
    }
  }, [navigate]);

  const loginHandler = async () => {
    setLoading(true);
    try {
      const logIn = await fetch(`${BASE_URL}signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const response = await logIn.json();
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      console.log(response);
      if (response?.responseCode === "00") {
        navigate("/dashboard/details", {
          replace: true,
          state: response?.data,
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const { setEventInputs } = useGatherInputFields(setLoginData);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-6 w-[15rem]">
        <img src={SailLogo} alt="SailLogo"  />
      </div>

      <div className="bg-white rounded-lg p-6 w-full sm:w-[25rem]">
        <div className="text-center text-2xl font-bold mb-6">
          <h1>Sign In</h1>
        </div>
        <div className="h-80 mt-4 flex flex-col justify-between">
          <div >
            <Form
              layout="vertical"
              onFinish={loginHandler}
              fields={[
                {
                  name: "email",
                  value: loginData?.email,
                },
                {
                  name: "password",
                  value: loginData?.password,
                },
              ]}
            >
              <Row>
                <Col span={24}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your EmailAddress!",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "email");
                      }}
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={(e) => {
                        setEventInputs(e.target.value, "password");
                      }}
                      name="password"
                      placeholder="Password"
                      type="text"
                      id="password"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>
                <div className="text-sm font-normal mb-2 text-[#75C2F6]">
                  <h6>Forgot password?</h6>
                </div>

                <Button
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  className="bg-[#134c98] "
                  block
                >
                  Sign In
                </Button>

              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
