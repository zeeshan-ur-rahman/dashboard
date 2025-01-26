import {Input, Button, Form, Divider} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Note = () => {
    const [notes, setNotes] = useState([]);

    const addNewNote = (values) => {
        setNotes([...notes, values.note]);
    };

    return (
        <div
            style={{
                padding: '20px',
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
                maxWidth: '500px',
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
                <h4>Note</h4>
                <FilterOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
            </div>

            <Form
                layout="vertical"
                onFinish={(values) => {
                    addNewNote(values);
                }}
            >
                {/* Text Area */}
                <Form.Item
                    label="Note"
                    name="note"
                    rules={[{ required: true, message: 'Please enter your note!' }]}
                >
                    <Input.TextArea placeholder="Enter your note here" rows={4} />
                </Form.Item>

                {/* Add Note Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Add Note
                    </Button>
                </Form.Item>
            </Form>

            {/* Display Notes */}
            <div style={{ marginTop: '20px' }}>
                <h4>Added Notes:</h4>
                <div>
                    {notes.map((note, index) => (
                        <div  key={index} style={{ marginBottom: '8px',  }}>
                            {note}
                            <Divider/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Note;
