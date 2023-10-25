import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, Select } from 'antd';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const CreateUser = () => {
  const [form] = Form.useForm();
  async function createUser(data) {
    const res = await axios.post('http://localhost:5000/users/add', {
      username: data.username,
      email: data.email,
    })
    if (res.status === 200) {
      alert("Success")
      form.resetFields();
    }
  }
  const onFinish = (values) => {
    createUser(values)
  };
  return (
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" type="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
  )
}
export default CreateUser;    