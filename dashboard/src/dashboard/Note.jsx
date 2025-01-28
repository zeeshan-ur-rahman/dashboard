import {Input, Button, Form, Divider, Tag, Select, Card} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { IoAdd } from "react-icons/io5";

const { Option } = Select;

const Note = () => {
    const [notes, setNotes] = useState([]);

    const addNewNote = (values) => {
        const newNote = {
            text: values.note,
            date: new Date().toLocaleString(),
        };
        setNotes([...notes, newNote]);
    };

    return (
        <Card
            style={{
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
                marginTop: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h4>Notes</h4>
                <FilterOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
            </div>

            <Form
                layout="vertical"
                onFinish={(values) => {
                    addNewNote(values);
                }}
            >


                {/* Note Text Area */}
                <Form.Item
                    name="note"
                    rules={[{ required: true, message: 'Please enter your note!' }]}
                >
                    <Input.TextArea placeholder="Enter your note here" rows={3} />
                </Form.Item>



                {/* Add Note Button */}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        icon={<IoAdd style={{ fontSize: "20px" }} />}
                    >
                        Add Note
                    </Button>
                </Form.Item>
            </Form>

            {/* Display Notes */}
            <div style={{ marginTop: '20px' }}>
                <h4>Added Notes:</h4>
                <div>
                    {notes.map((note, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '10px',
                                border: '1px solid #d9d9d9',
                                borderRadius: '8px',
                                marginBottom: '10px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <span style={{ fontWeight: 'bold' }}>
                                    {note.name} - {note.date}
                                </span>

                            </div>
                            <Divider />
                            <p>{note.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default Note;
