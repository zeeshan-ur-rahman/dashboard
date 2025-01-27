import React from 'react';
import {Card, Row, Col, Typography, Collapse} from 'antd';
import CustomerDetails from "./CustomerDetails.jsx";
import Index from "./Index.jsx";

const { Text } = Typography;
const { Panel } = Collapse;

const SiteSurvey = () => {
    const defaultValues = {
        customerName: "John Doe",
        phoneNumber: "123-456-7890",
        systemSize: "5 kW",
        moduleName: "SolarMax",
        battery: "12 kWh",
        inverter: "Sungrow SG5K",
        financer: "XYZ Bank",
        ranking: "Top Rated",
        netPPW: "$0.08"
    };

    return (
        <>
        <Card >
            <Row gutter={[16, 16]}>
                <Col span={2}>
                    <Text strong>Customer Name</Text>
                    <p>{defaultValues.customerName}</p>
                </Col>
                <Col span={2}>
                    <Text strong>Phone Number</Text>
                    <p>{defaultValues.phoneNumber}</p>
                </Col>
                <Col span={2}>
                    <Text strong>System Size</Text>
                    <p>{defaultValues.systemSize}</p>
                </Col>
                <Col span={2}>
                    <Text strong>Module Name</Text>
                    <p>{defaultValues.moduleName}</p>
                </Col>
                <Col span={2}>
                    <Text strong>Battery</Text>
                    <p>{defaultValues.battery}</p>
                </Col>
                <Col span={2}>
                    <Text strong>Inverter</Text>
                    <p>{defaultValues.inverter}</p>
                </Col>
                <Col span={2}>
                    <Text strong>Financer</Text>
                    <p>{defaultValues.financer}</p>
                </Col>
                <Col span={2}>
                    <Text strong>Ranking</Text>
                    <p>{defaultValues.ranking}</p>
                </Col>
                <Col span={2}>
                    <Text strong>Net PPW</Text>
                    <p>{defaultValues.netPPW}</p>
                </Col>
            </Row>
        </Card>


                    <Index/>




        </>
    );
}

export default SiteSurvey;
