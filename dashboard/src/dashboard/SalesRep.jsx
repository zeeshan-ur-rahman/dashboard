import React from "react";
import { Form, Select, Row, Col, Collapse, Input } from "antd";
import JobReview from "./JobReview.jsx";
import ChatStatus from "./ChatStatus.jsx";

const { Option } = Select;

const SalesRep = () => {

    return (
        <>

                <Form
                    layout="vertical"
                    initialValues={{
                        organization: "",
                        team: "",
                        manager: "",
                        salesRep: "",
                        marketingRep: "",
                    }}
                >
                    {/* Organization and Team */}
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Organization"
                                name="organization"
                                rules={[{ required: true, message: "Please enter the organization" }]}>
                                <Input style={{ width: "100%" }} placeholder="Enter Organization" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Team"
                                name="team"
                                rules={[{ required: true, message: "Please enter the team" }]}>
                                <Input style={{ width: "100%" }} placeholder="Enter Team" />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Manager, Sales Rep, Marketing Rep */}
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Manager"
                                name="manager"
                                rules={[{ required: true, message: "Please enter the manager" }]}>
                                <Input style={{ width: "100%" }} placeholder="Enter Manager" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Sales Representative"
                                name="salesRep"
                                rules={[{ required: true, message: "Please select a sales representative" }]}>
                                <Select style={{ width: "100%" }} placeholder="Select Sales Rep">
                                    <Option value="rep1">Rep 1</Option>
                                    <Option value="rep2">Rep 2</Option>
                                    <Option value="rep3">Rep 3</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Marketing Rep (Setter)"
                                name="marketingRep"
                                rules={[{ required: true, message: "Please enter the marketing rep" }]}>
                                <Input style={{ width: "100%" }} placeholder="Enter Marketing Rep (Setter)" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>



        </>
    );
};

export default SalesRep;
