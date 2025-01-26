import React from "react";
import { Form, Select, Row, Col, Collapse } from "antd";
import ChatStatus from "./ChatStatus.jsx";

const { Option } = Select;

const JobReview = () => {


    return (
        <>


                <Form
                    layout="vertical"
                    initialValues={{
                        installmentAgreement: "",
                        financeDocs: "",
                        proposal: "",
                        utilityBill: "",
                    }}
                >
                    {/* Installment Agreement, Finance Docs, Proposal, Utility Bill */}
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Installment Agreement"
                                name="installmentAgreement"
                                rules={[{ required: true, message: "Please select an installment agreement" }]}>
                                <Select style={{ width: "100%" }} placeholder="Select Installment Agreement">
                                    <Option value="pending_verificaion">Pending Verification</Option>
                                    <Option value="verified">Verified</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Finance Docs"
                                name="financeDocs"
                                rules={[{ required: true, message: "Please select finance docs" }]}>
                                <Select style={{ width: "100%" }} placeholder="Select Finance Docs">
                                    <Option value="pending_verificaion">Pending Verification</Option>
                                    <Option value="verified">Verified</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Proposal"
                                name="proposal"
                                rules={[{ required: true, message: "Please select a proposal" }]}>
                                <Select style={{ width: "100%" }} placeholder="Select Proposal">
                                    <Option value="pending_verificaion">Pending Verification</Option>
                                    <Option value="verified">Verified</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Utility Bill"
                                name="utilityBill"
                                rules={[{ required: true, message: "Please select a utility bill" }]}>
                                <Select style={{ width: "100%" }} placeholder="Select Utility Bill">
                                    <Option value="pending_verificaion">Pending Verification</Option>
                                    <Option value="verified">Verified</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>





        </>
    );
};

export default JobReview;
