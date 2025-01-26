import React from "react";
import { Form, InputNumber, Select, Collapse, Row, Col } from "antd";
import FinanceDetails from "./FinanceDetails.jsx";

const { Panel } = Collapse;
const { Option } = Select;

const JobDetails = () => {
    return (
        <>


                    <Form
                        layout="vertical"
                        initialValues={{
                            systemSize: 14.72,
                            moduleName: "REC Solar - REC460W AA Pure-RX",
                            moduleQuantity: 13,
                            battery: "SolarEdge Energy Bank - BAT-10K1",
                            batteryQuantity: 13,
                            inverter: "SolarEdge-SE10000H-US",
                            racking: "K2-CROSSRAIL 48-X",
                        }}
                    >
                        {/* System Size */}
                        <Row gutter={[12, 12]}>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="System Size (Max 30)"
                                    name="systemSize"
                                    rules={[{ required: true, message: "Please enter system size" }]}
                                >
                                    <InputNumber
                                        min={0}
                                        max={30}
                                        step={0.01}
                                        style={{ width: "100%" }}
                                        addonAfter="KW"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Module Name and Module Quantity */}
                        <Row gutter={[12, 12]}>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Module Name"
                                    name="moduleName"
                                    rules={[{ required: true, message: "Please select a module name" }]}
                                >
                                    <Select placeholder="Select Module Name">
                                        <Option value="REC Solar - REC460W AA Pure-RX">
                                            REC Solar - REC460W AA Pure-RX
                                        </Option>
                                        <Option value="Another Module">Another Module</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Module Quantity"
                                    name="moduleQuantity"
                                    rules={[{ required: true, message: "Please enter module quantity" }]}
                                >
                                    <InputNumber min={1} style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Battery and Battery Quantity */}
                        <Row gutter={[12, 12]}>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Battery"
                                    name="battery"
                                    rules={[{ required: true, message: "Please select a battery" }]}
                                >
                                    <Select placeholder="Select Battery">
                                        <Option value="SolarEdge Energy Bank - BAT-10K1">
                                            SolarEdge Energy Bank - BAT-10K1
                                        </Option>
                                        <Option value="Another Battery">Another Battery</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Battery Quantity"
                                    name="batteryQuantity"
                                    rules={[{ required: true, message: "Please enter battery quantity" }]}
                                >
                                    <InputNumber min={1} style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Inverter */}
                        <Row gutter={[12, 12]}>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Inverter(s)"
                                    name="inverter"
                                    rules={[{ required: true, message: "Please select an inverter" }]}
                                >
                                    <Select placeholder="Select Inverter">
                                        <Option value="SolarEdge-SE10000H-US">SolarEdge-SE10000H-US</Option>
                                        <Option value="Another Inverter">Another Inverter</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        {/* Racking */}
                        <Row gutter={[12, 12]}>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Racking"
                                    name="racking"
                                    rules={[{ required: true, message: "Please select racking" }]}
                                >
                                    <Select placeholder="Select Racking">
                                        <Option value="K2-CROSSRAIL 48-X">K2-CROSSRAIL 48-X</Option>
                                        <Option value="Another Racking">Another Racking</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>


        </>
    );
};

export default JobDetails;
