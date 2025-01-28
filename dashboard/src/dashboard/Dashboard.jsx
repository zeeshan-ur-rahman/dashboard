import React, { useState } from "react";
import { Steps, Card, Space, Typography, Button, Grid } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { IoCopyOutline, IoCreateOutline, IoCheckmarkSharp } from "react-icons/io5";
import SiteSurvey from "./SiteSurvey.jsx";
import Index from "./Index.jsx";
import { IoCheckmarkCircleSharp } from "react-icons/io5";



const { Step } = Steps;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const Dashboard = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const screens = useBreakpoint();

    const steps = [
        { title: "Job Review", content: <Index /> },
        { title: "Site Survey", content: <SiteSurvey /> },
        { title: "Design", content: <div>Design Content</div> },
        { title: "Permit", content: <div>Permit Content</div> },
        { title: "Utility & HOA", content: <div>Utility & HOA Content</div> },
        { title: "Installation & Inspection", content: <div>Installation & Inspection Content</div> },
        { title: "PTO &  Commissioning", content: <div>PTO & Commissioning Content</div> },
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
                                <IoCreateOutline style={{ fontSize: 18, cursor: "pointer" }} />
                                <IoCopyOutline style={{ fontSize: 18, cursor: "pointer" }} />
                            </Space>
                        </div>

                        {/* Short Text Section */}
                        <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                            <Text style={{ margin: 0 }}>13 Wadleigh Point Road, Kingston, NH 03848</Text>
                            <Space style={{ marginLeft: 10 }}>
                                <IoCreateOutline style={{ fontSize: 18, cursor: "pointer" }} />
                                <IoCopyOutline style={{ fontSize: 18, cursor: "pointer" }} />
                            </Space>
                        </div>
                    </div>

                    {/* Buttons */}
                    <Space>
                        <Button size="large" icon={<IoCheckmarkSharp />} type="primary">Save</Button>
                        <Button size="large" type="default" icon={<CloseOutlined />} />
                    </Space>
                </div>

                {/*  Steps */}
                <Steps
                    size="small"
                    type="navigation"
                    current={currentStep}
                    onChange={onStepChange}
                    direction={screens.md ? "horizontal" : "vertical"}
                    labelPlacement={screens.md ? "horizontal" : "vertical"}
                    style={{ marginTop: 20,  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", border: '1px solid #d9d9d9',
                    }}
                >
                    {steps.map((item, index) => (
                        <Step
                            icon={<IoCheckmarkCircleSharp style={{fontSize:25}} />}
                            key={index}
                            title={
                                <span>
                                    {item.title}
                                </span>
                            }
                        />
                    ))}
                </Steps>

                <div style={{ marginTop: 20 }}>
                    {steps[currentStep].content}
                </div>
            </Card>
        </>
    );
};

export default Dashboard;
