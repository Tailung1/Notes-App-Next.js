"use client";
import { Button, Form, Input } from "antd";

export default function Notes() {
  const [form] = Form.useForm();
  const handleSubmit = async (values: {
    Title: string;
    Text: string;
  }) => {
    console.log(values);
    const sendData = await fetch("http://localhost:3000/api/notes", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    if (!sendData.ok) {
      console.log("Failed to post note");
      return;
    }
    console.log("New note added successfully");
  };

  return (
    <Form
      className='flex flex-col gap-5'
      layout='vertical'
      form={form}
      onFinish={handleSubmit}
    >
      <Form.Item name='Title' label='Enter title'>
        <Input placeholder='Enter title' />
      </Form.Item>

      <Form.Item name='Text' label='Enter text'>
        <Input placeholder='Enter text' />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
