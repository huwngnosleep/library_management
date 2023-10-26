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
const CreateAc = () => {
  const [form] = Form.useForm();
  async function CreateAc(data) {
    const res = await axios.post('http://localhost:5000/acs/add', {
        admin: data.admin,
        password: data.password,
    })
    console.log('create')
    if (res.status === 200) {
      alert("Success")
      form.resetFields();
    }
  }
  const onFinish = (values) => {
    CreateAc(values)
  };
  return (
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 300 }}
      >
        <h3>Create your Account</h3>
        <Form.Item name="admin" label="Admin" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          Or <a href="/login">log in</a>
        </Form.Item>

      </Form>
  )
}
export default CreateAc;    


