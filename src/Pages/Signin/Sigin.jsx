import { useEffect, useState } from "react";
import SailLogo from "../../assets/SailInnovationLogo.png";
import { Button, Col, Form, Input, Row } from "antd";
import useGatherInputFields from "../../hooks/useGatheInputFields";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";
import toast from "react-hot-toast";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin =
      localStorage.getItem("token") &&
      localStorage.getItem("userRole") === "ADMIN";
    const isUser =
      localStorage.getItem("token") &&
      localStorage.getItem("userRole") === "USER";
    if (isAdmin) {
      navigate("/dashboard/details", {
        replace: true,
      });
    }
    if (isUser) {
      navigate("/user/dashboard/", {
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
      // console.log(response);
      if (logIn.ok) {
        toast.success(response.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
      }
      if (response?.data?.role === "ADMIN") {
        navigate("/dashboard/details", {
          replace: true,
        });
      }
      if (response?.data?.role === "USER") {
        navigate("/user/dashboard/", {
          replace: true,
        });
      }
      if (!logIn.ok) {
        toast.error(response.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
      }
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userRole", response.data.role);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const { setEventInputs } = useGatherInputFields(setLoginData);

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
                <Col span={24}>
                  <Button
                    loading={loading}
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
