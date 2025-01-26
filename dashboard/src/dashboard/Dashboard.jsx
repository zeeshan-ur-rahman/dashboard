import React, { useState } from "react";
import { Steps, Card, Space, Typography, Button, Grid } from "antd";
import { EditOutlined, CopyOutlined, CloseOutlined } from "@ant-design/icons";
import CustomerDetails from "./CustomerDetails.jsx";
import SiteSurvey from "./SiteSurvey.jsx";

const { Step } = Steps;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Dashboard = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const screens = useBreakpoint();

    const steps = [
        { title: "Job Review", content: <CustomerDetails /> },
        { title: "Site Survey", content: <SiteSurvey/> },
        { title: "Design", content: <div>Design Content</div> },
        { title: "Permit", content: <div>Permit Content</div> },
        { title: "Utility & HOA", content: <div>Utility & HOA Content</div> },
        { title: "Installation & Inspection", content: <div>Installation & Inspection Content</div> },
        { title: "PTO & Commissioning", content: <div>PTO & Commissioning Content</div> },
        { title: "Accounting & Funding", content: <div>Accounting & Funding Content</div> },
    ];

    // Handle step change when clicked
    const onStepChange = (current) => {
        setCurrentStep(current);
    };

    return (
        <>
            <Card>
                {/* Main Title and Icons */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* Title Section */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Title level={4} style={{ margin: 0 }}>Hanley, Brad - 2237</Title>
                            <Space style={{ marginLeft: 10 }}>
                                <CopyOutlined style={{ fontSize: 18, cursor: "pointer" }} />
                                <EditOutlined style={{ fontSize: 18, cursor: "pointer" }} />
                            </Space>
                        </div>

                        {/* Short Text Section */}
                        <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                            <Text style={{ margin: 0 }}>13 Wadleigh Point Road, Kingston, NH 03848</Text>
                            <Space style={{ marginLeft: 10 }}>
                                <CopyOutlined style={{ fontSize: 16, cursor: "pointer" }} />
                                <EditOutlined style={{ fontSize: 16, cursor: "pointer" }} />
                            </Space>
                        </div>
                    </div>

                    {/* Buttons */}
                    <Space>
                        <Button type="default" icon={<CloseOutlined />} />
                        <Button type="primary">Save</Button>
                    </Space>
                </div>

                {/* Responsive Steps */}
                <Steps
                    current={currentStep}
                    onChange={onStepChange}
                    direction={screens.md ? "horizontal" : "vertical"}
                    labelPlacement={screens.md ? "horizontal" : "vertical"}
                    style={{ marginTop: 20 }}
                >
                    {steps.map((item, index) => (
                        <Step key={index} title={item.title} />
                    ))}
                </Steps>

                {/* Displaying content based on current step */}
                <div style={{ marginTop: 20 }}>
                    {steps[currentStep].content}
                </div>
            </Card>
        </>
    );
};

export default Dashboard;
