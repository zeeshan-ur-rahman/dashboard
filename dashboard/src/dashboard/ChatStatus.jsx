import React from "react";
import { Button, Row, Col, Select, Input, Form, Card } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const ChatStatus = () => {
    return (


            <Form layout="vertical"
                  style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                marginTop: "20px",
                      padding:"10px"
            }} >
                <Row gutter={16}>
                    {/* Start Chat Button */}
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item>
                            <Button type="primary" block >
                                Start Chat
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    {/* Status Column */}
                    <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item label="Status" name="status">
                            <Select  placeholder="Select Status">
                                <Option value="active">Active</Option>
                                <Option value="onHold">On Hold</Option>
                            </Select>
                        </Form.Item>

                        {/* Text Area */}
                        <Form.Item name="reason">
                            <TextArea placeholder="Enter reason" rows={4} />
                        </Form.Item>

                        {/* Add Reason Button */}
                        <Form.Item>
                            <Button type="primary" block>
                                Add Reason
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

    );
};

export default ChatStatus;
