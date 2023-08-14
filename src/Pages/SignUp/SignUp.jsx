import {useState} from "react";
import SailLogo from "../../assets/SailInnovationLogo.png";
import { Link } from 'react-router-dom'; 
import { Form, Row, Col, Button, Input } from "antd";


const SignUp = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  
  const handleSignUp = async() =>{
    setLoading(true);
    console.log("Form Submitted Successfully");
    setLoading(false);
  };

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
          <div className="ml-[1.4rem]" >
            <Form layout="vertical" form={form} onFinish={handleSignUp}>
              <Row>
                <Col span={24}>
                  <Form.Item name="firstName">
                    <Input 
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    rules={[{required: true, message: 'please enter your First Name'}]}
                    className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                <Form.Item name="lastName">
                  <Input type="text"
                  id="lastName"
                  // placeholder="Last Name"
                  rules={[{required: true, message: 'please enter your Last Name'}]}
                  className="py-3"/>
                </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item name="email">
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      rules={[{required: true, message: 'please enter your email'},
                    {type: 'email', message:'Please enter a valid email'},]}
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item name="password">
                    <Input.Password 
                    type="password"
                    placeholder="Password" 
                    rules={[{required: true, message: 'please enter a password'}]}
                    id="password"
                    className="py-3" 
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item name="confirmPassword">
                    <Input.Password 
                    // placeholder="Confirm Password" 
                    type="confirmPassword"
                    rules={[{required: true, message: 'please enter your password'},
                    {type: 'email', message:'Please enter a valid password'},]}
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
                  <span>Already have an account? <Link to="/signin">Sign In</Link></span>
                  </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp;