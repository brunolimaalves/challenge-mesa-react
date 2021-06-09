import React from 'react'
import { Layout, Form, Input, Button, Row, Col, message } from 'antd'
import './style.css'
import { useAuthDataContext } from "../helpers/AuthProvider";
import Register from './register'
import axios from 'axios'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const Login = props => {

    const { onLogin }  = useAuthDataContext();
    
    const sigIn = (user) => axios.post('https://reqres.in/api/login/', 
        user, 
        { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
    ).then( response => {
        onLogin(true)
        props.history.push('/home')
    }).catch( error => {
        message.error('User or password is incorrect');
    })

    const onFinish = (values) =>  sigIn(values)
    
    const [ form ] = Form.useForm()

    return (
        <>
            <Layout>
                <Layout.Header className="title__page">Challenge MESA</Layout.Header>
                    <Layout.Content style={{height: "100vh"}}>
                        <Row className="box__login">
                            <Col>
                                <Form
                                    {...layout}
                                    form={form}
                                    name="basic"
                                    initialValues={{
                                        email: 'eve.holt@reqres.in',
                                        password: 'cityslicka'
                                    }}
                                    onFinish={onFinish}
                                    >
                                    <Form.Item
                                        label="Login"
                                        name="email"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your login!',
                                        },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Login
                                        </Button>
                                        <Register />
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Layout.Content>
                <Layout.Footer>A</Layout.Footer>
            </Layout>
        </>
    )
}

export default Login; 