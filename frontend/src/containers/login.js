import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Table, Button, Checkbox, Form, Input } from 'antd';
const columns = [
  {
    title: 'Book name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre',
  }
];
const bookData = [{
  "name": "abc",
  "password": "cc",      
}]

const Login = () => {
    const [data, setData] = useState([])
    async function fetchData() {
        const data = await (await axios.get('http://localhost:5000/books/')).data
        console.log({ data })
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return(
    <Form name="normal_login" className="login-form"
      initialValues={{
        remember: true,
      }}
      style={{ maxWidth: 300 }}

    //   onFinish={onFinish}
    >
        <h3>Login</h3>
      <Form.Item name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Admin" />
      </Form.Item>
      <Form.Item name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined className="site-form-item-icon" />}
          type="password" placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
  )
}
export default Login;