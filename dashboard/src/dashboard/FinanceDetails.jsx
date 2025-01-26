import React from "react";
import { Form, Select, Row, Col, Collapse, Input, InputNumber } from "antd";
import SalesRep from "./SalesRep.jsx";

const { Option } = Select;

const FinanceDetails = () => {
    const { Panel } = Collapse;

    return (
        <>

                <Form
                    layout="vertical"
                    initialValues={{
                        finance: "Short-Term",
                        financerTerm: "1 Year",
                        contractDate: "2025-01-01",
                        createdExpiration: "2026-01-01",
                    }}
                >
                    {/* Finance */}
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Finance"
                                name="finance"
                                rules={[{ required: true, message: "Please select finance type" }]}
                            >
                                <Select style={{ width: "100%" }}>
                                    <Option value="Short-Term">Short-Term</Option>
                                    <Option value="Long-Term">Long-Term</Option>
                                    <Option value="Lease">Lease</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        {/* Financer Term */}
                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Financer Term"
                                name="financerTerm"
                                rules={[{ required: true, message: "Please select financer term" }]}
                            >
                                <Select style={{ width: "100%" }}>
                                    <Option value="1 Year">1 Year</Option>
                                    <Option value="2 Years">2 Years</Option>
                                    <Option value="3 Years">3 Years</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        {/* Contract Date */}
                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Contract Date"
                                name="contractDate"
                                rules={[{ required: true, message: "Please select contract date" }]}
                            >
                                <Select style={{ width: "100%" }}>
                                    <Option value="2025-01-01">2025-01-01</Option>
                                    <Option value="2025-02-01">2025-02-01</Option>
                                    <Option value="2025-03-01">2025-03-01</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        {/* Created Expiration */}
                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Created Expiration"
                                name="createdExpiration"
                                rules={[{ required: true, message: "Please select expiration date" }]}
                            >
                                <Select style={{ width: "100%" }}>
                                    <Option value="2026-01-01">2026-01-01</Option>
                                    <Option value="2026-02-01">2026-02-01</Option>
                                    <Option value="2026-03-01">2026-03-01</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* New Fields: Contract Price and Net PPW */}
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Contract Price"
                                name="contractPrice"
                                rules={[{ required: true, message: "Please enter contract price" }]}
                            >
                                <InputNumber
                                    min={0}
                                    style={{ width: "100%" }}
                                    addonBefore={<span>$</span>}
                                    placeholder="Enter contract price"
                                />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={6}>
                            <Form.Item
                                label="Net PPW"
                                name="netPPW"
                                rules={[{ required: true, message: "Please enter net PPW" }]}
                            >
                                <InputNumber
                                    min={0}
                                    style={{ width: "100%" }}
                                    addonBefore={<span>$</span>}
                                    placeholder="Enter net PPW"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>


        </>
   );
};

export default FinanceDetails;
