import React, { useState } from "react";
import { Card, Input, Form, Row, Col, Select, Button, Space, Divider, Collapse } from "antd";

import { IoCloseSharp  ,} from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";



const { Option } = Select;
const { Panel } = Collapse;

const CustomerDetails = () => {
    const [coCustomers, setCoCustomers] = useState([{ id: Date.now() }]);

    const handleAddCoCustomer = () => {
        setCoCustomers([...coCustomers, { id: Date.now() }]); // Add new co-customer field
    };

    const handleRemoveCoCustomer = (id) => {
        setCoCustomers(coCustomers.filter((customer) => customer.id !== id));
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24}>

                            <Form layout="vertical">
                                <Row gutter={[16, 16]}>
                                    {/* First Name Input */}
                                    <Col xs={24} sm={12} md={8}>
                                        <Form.Item
                                            label="First Name"
                                            name="firstName"
                                            rules={[{ required: true, message: "Please enter your first name!" }]}
                                        >
                                            <Input type="text" placeholder="Enter your first name" />
                                        </Form.Item>
                                    </Col>

                                    {/* Last Name Input */}
                                    <Col xs={24} sm={12} md={8}>
                                        <Form.Item
                                            label="Last Name"
                                            name="lastName"
                                            rules={[{ required: true, message: "Please enter your last name!" }]}
                                        >
                                            <Input type="text" placeholder="Enter your last name" />
                                        </Form.Item>
                                    </Col>

                                    {/* Email Input */}
                                    <Col xs={24} sm={12} md={8}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                { required: true, message: "Please enter your email!" },
                                                { type: "email", message: "Please enter a valid email!" },
                                            ]}
                                        >
                                            <Input type="email" placeholder="Enter your email" />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row gutter={[16, 16]}>
                                    {/* Phone Number Input */}
                                    <Col xs={24} sm={12} md={8}>
                                        <Form.Item
                                            label="Phone Number"
                                            name="phoneNumber"
                                            rules={[{ required: true, message: "Please enter your phone number!" }]}
                                        >
                                            <Input.Group compact>
                                                {/* Phone Type Select */}
                                                <Form.Item
                                                    name="phoneType"
                                                    noStyle
                                                    rules={[{ required: true, message: "Please select phone type!" }]}
                                                >
                                                    <Select style={{ width: "30%" }} placeholder="Select Type">
                                                        <Option value="mobile">Mobile</Option>
                                                        <Option value="landline">Landline</Option>
                                                        <Option value="other">Other</Option>
                                                    </Select>
                                                </Form.Item>

                                                {/* Phone Number Input */}
                                                <Form.Item
                                                    name="phoneNumberInput"
                                                    noStyle
                                                    rules={[{ required: true, message: "Please enter your phone number!" }]}
                                                >
                                                    <Input
                                                        style={{ width: "70%" }}
                                                        type="tel"
                                                        placeholder="Enter phone number"
                                                    />
                                                </Form.Item>
                                            </Input.Group>
                                        </Form.Item>
                                    </Col>

                                    {/* Preferred Communication Method */}
                                    <Col xs={24} sm={12} md={8}>
                                        <Form.Item
                                            label="Preferred Communication Method"
                                            name="communicationMethod"
                                            rules={[{ required: true, message: "Please select your preferred communication method!" }]}
                                        >
                                            <Select mode="multiple" placeholder="Select communication methods" allowClear>
                                                <Option value="text">Text</Option>
                                                <Option value="phone">Phone</Option>
                                                <Option value="email">Email</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>

                                    {/* Language Select */}
                                    <Col xs={24} sm={12} md={8}>
                                        <Form.Item
                                            label="Language"
                                            name="language"
                                            rules={[{ required: true, message: "Please select your language!" }]}
                                        >
                                            <Select placeholder="Select Language">
                                                <Option value="english">English</Option>
                                                <Option value="urdu">Urdu</Option>
                                                <Option value="french">French</Option>
                                                <Option value="spanish">Spanish</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                {/* Co Customer Section */}
                                <Row gutter={[16, 16]}>
                                    <Col span={24}>
                                        <Divider orientationMargin={10} orientation="left">
                                            Co Customer
                                        </Divider>
                                        {coCustomers.map((coCustomer) => (
                                            <Row gutter={[16, 16]} key={coCustomer.id}>
                                                {/* Co Customer First Name */}
                                                <Col xs={24} sm={12} md={8}>
                                                    <Form.Item
                                                        label="First Name"
                                                        name={`coFirstName-${coCustomer.id}`}
                                                        rules={[{ required: true, message: "Please enter your first name!" }]}
                                                    >
                                                        <Input type="text" placeholder="Enter first name" />
                                                    </Form.Item>
                                                </Col>

                                                {/* Co Customer Last Name */}
                                                <Col xs={24} sm={12} md={8}>
                                                    <Form.Item
                                                        label="Last Name"
                                                        name={`coLastName-${coCustomer.id}`}
                                                        rules={[{ required: true, message: "Please enter your last name!" }]}
                                                    >
                                                        <Input type="text" placeholder="Enter last name" />
                                                    </Form.Item>
                                                </Col>

                                                <Col xs={24} sm={24} md={8} style={{ display: "flex", alignItems: "center" }}>
                                                    {coCustomers.length > 1 && (
                                                        <Button
                                                            type="text"
                                                            icon={<IoCloseSharp  style={{fontSize:"20px"}} />
                                                            }
                                                            onClick={() => handleRemoveCoCustomer(coCustomer.id)}
                                                        />
                                                    )}

                                                    <Button
                                                        type="text"
                                                        icon={<FiPlusCircle style={{fontSize:"20px"}} />}
                                                        onClick={handleAddCoCustomer}
                                                    />
                                                </Col>
                                            </Row>
                                        ))}
                                    </Col>
                                </Row>
                            </Form>

                </Col>


            </Row>


        </>
    );
};

export default CustomerDetails;
