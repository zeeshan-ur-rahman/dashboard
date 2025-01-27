import CustomerDetails from "./CustomerDetails.jsx";
import JobsDetails from "./JobsDetails.jsx";
import FinanceDetails from "./FinanceDetails.jsx";
import SalesRep from "./SalesRep.jsx";
import JobReview from "./JobReview.jsx";
import React from "react";
import { Col, Collapse, Row } from "antd";
import ChatStatus from "./ChatStatus.jsx";
import Note from "./Note.jsx";

const Index = () => {
    const { Panel } = Collapse;

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={16}>
                    <Collapse
                        defaultActiveKey={["customer_details", "job_details"]}
                        style={{
                            marginTop: "20px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                        expandIconPosition="end"
                    >
                        <Panel header="Customer Details"  key="customer_details">
                            <CustomerDetails />
                        </Panel>

                    </Collapse>


                        <Collapse
                            defaultActiveKey={["customer_details", "job_details"]}
                            style={{
                                marginTop: "20px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                            expandIconPosition="end"
                        >
                        <Panel header="Job Details" key="job_details">
                            <JobsDetails />
                        </Panel>

                        </Collapse>

                    <Collapse
                        defaultActiveKey={["customer_details", "job_details"]}
                        style={{
                            marginTop: "20px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                        expandIconPosition="end"
                    >
                        <Panel header="Finance Details" key="finance_details">
                            <FinanceDetails />
                        </Panel>

                    </Collapse>


                    <Collapse
                        defaultActiveKey={["customer_details", "job_details"]}
                        style={{
                            marginTop: "20px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                        expandIconPosition="end"
                    >
                        <Panel header="Sales Rep Details" key="sales-rep">
                            <SalesRep />
                        </Panel>

                    </Collapse>


                    <Collapse
                        defaultActiveKey={["customer_details", "job_details"]}
                        style={{
                            marginTop: "20px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                        expandIconPosition="end"
                    >
                        <Panel header="Job Review Task" key="job_review">
                            <JobReview />
                        </Panel>
                    </Collapse>
                </Col>

                <Col xs={24} sm={24} md={8}>
                    <ChatStatus />
                    <Note />
                </Col>
            </Row>
        </>
    );
};

export default Index;
