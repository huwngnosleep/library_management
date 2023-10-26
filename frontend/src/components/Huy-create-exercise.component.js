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
const CreateBook = () => {
  const [form] = Form.useForm();
  async function CreateBook(data) {
    const res = await axios.post('http://localhost:5000/books/add', {
      name: data.name,
      genre: data.genre,
      author: data.author,
      description: data.description,
    })
    console.log('create')
    if (res.status === 200) {
      alert("Success")
      form.resetFields();
    }
  }
  const onFinish = (values) => {
    CreateBook(values)
  };
  return (
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="name" label="Book name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="genre" label="Genre" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="author" label="Author" rules={[{ required: true }]}>
          <Input />
        </Form.Item>  
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
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
export default CreateBook;    


