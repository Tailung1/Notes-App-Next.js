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
    id: string;
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

interface noteTypes {
  Title: string;
  Text: string;
  Date: string;
  id: string;
}
const Note = ({ note }: { note: noteTypes }) => {
  const router = useRouter();
  const handleDelete = async (id: string) => {
   const deleteNote= await fetch(`http://localhost:3000/api/notes/${id}`, {
      method: "DELETE",
    });
    const response=await deleteNote.json()
    console.log(response.message)
    router.refresh()
  };
  return (
    <div>
      <h1>{note.Title}</h1>
      <h2 className='italic'>{note.Text}</h2>
      <h3 className='italic'>{note.Date}</h3>
      <Button
        onClick={() => handleDelete(note.id)}
        htmlType='submit'
        className='mt-2'
        danger
      >
        Delete
      </Button>
    </div>
  );
};

export { NoteForm, Note };
