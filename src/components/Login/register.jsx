import React , { useState }from 'react'
import { Modal, Button, Form , Input, message} from 'antd'
import axios from 'axios'

const Register = (  ) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    
    const handleCancel = () => setIsModalVisible(false);

    const [form] = Form.useForm();

    const handleOk = () =>  {
        const user = form.getFieldsValue();
        register(user)
        setIsModalVisible(false);
    }
    
    const register = user => axios.post('https://reqres.in/api/register/', 
        user, 
        { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
    ).then( response => {
        message.success('Registration Successful!');
    }).catch( error => {
        message.error(error.response.data.error);
    })
    
    return (

        <>
            <Button type="link" onClick={showModal}>
                Register
            </Button>
            <Modal title="Register a new User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    name="basic"
                    initialValues={{
                        email: 'bruno.lima@gmail.in',
                        password: 'cityslicka'
                    }}
                >
                    <Form.Item
                        label="Username"
                        name="email"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
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
                </Form>
            </Modal>
        </>

    )
}

export default Register;