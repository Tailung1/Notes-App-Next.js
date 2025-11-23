"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

const NoteForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const handleSubmit = async (values: {
    Title: string;
    Text: string;
    Date: string;
  }) => {
    const sendData = await fetch("http://localhost:3000/api/notes", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

    if (!sendData.ok) {
      console.log("Failed to post note");
      return;
    }
    router.refresh();
    form.resetFields();

    console.log("New note added successfully");
  };

  return (
    <Form form={form} layout='vertical' onFinish={handleSubmit}>
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
};

export default NoteForm;
