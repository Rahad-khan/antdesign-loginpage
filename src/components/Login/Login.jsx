import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react';
import login from '../../assets/image/login.jpg';
import { toast } from 'react-toastify';

const Login = () => {
    const [form] = Form.useForm();
    console.log(form);
    const onFinish = (values) => {
        const data = {
            email: values.username,
            password: values.password,
        }
        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.warning(data.error)
                } else if (data.token === "QpwL5tke4Pnpja7X4") {
                    toast.success("Login Successfully");
                    form.resetFields();
                }
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row align='middle'>
            <Col span={24} md={{ span: 10, offset: 2 }} align='middle'>
                <Row>
                    <Col span={24} >
                        <h1 style={{ textAlign: 'center', margin: '0px' }}>Welcome Back</h1>
                        <p >Sub-title goes here</p>
                    </Col>
                </Row>
                <Form
                    style={{ padding: '0 10px' }}
                    size='large'
                    wrapperCol={{
                        span: 22
                    }}
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item

                        name="password"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>
                            Log in
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Row>
                            <Col span={8}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Col>
                            <Col span={6} offset={10}>
                                <a className="login-form-forgot" href="!#">
                                    Forgot password
                                </a>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={0} md={12}><img style={{ width: '100%' }} src={login} alt="" /></Col>
        </Row>
    );
};

export default Login;