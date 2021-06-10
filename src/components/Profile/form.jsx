import React from 'react'
import { Form , Input, Button} from 'antd'


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

  

const onFinish = (values) =>  save(values)

  
const FormProfile = ( {profile} ) => { 

    const [form] = Form.useForm();
    
    form.setFieldsValue({
        first_name: profile.first_name,
        last_name: profile.last_name,
        email: profile.email
    });
    return ( 
        <Form
            name="basic" 
            form={form}
            {...layout} 
            onFinish={onFinish}>
            
            <Form.Item
                name="first_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your first name!',
                    },
                ]}
            >
                <Input placeholder="First Name" />
            </Form.Item>

            <Form.Item
                name="last_name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your last name!',
                    },
                ]}
            >
            <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item
            name="email"
            rules={[
            {
                required: true,
                message: 'Please input your email!',
            },
            ]}
        >
            <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
                Save
            </Button>
        </Form.Item>
    </Form>
)}

export default FormProfile;