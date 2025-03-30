import { Tabs, Card, Typography, Input, Upload, Button, Form, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ManageSetting from "./ManageSetting.jsx";
import TaxonomyType from "./TaxonomyType.jsx";
import HelloSignTemplates from "./HelloSignTemplates.jsx";
import Stages from "./Stages.jsx";
import GlobalNotice from "./GlobalNotice.jsx";
import UiSettings from "./UiSettings.jsx";

const { Title } = Typography;

const AppSetting = () => {
    const onChange = (key) => {
        console.log("Selected Tab:", key);
    };

    const items = [
        { key: "App_Setting", label: "App Settings", children: <SettingsForm /> },
        { key: "Taxonomy_Types", label: "Taxonomy Types", children: <TaxonomyType/> },
        { key: "Hello_Sign_Templates", label: "Hello Sign Templates " ,children: <HelloSignTemplates/>},
        { key: "Stages", label: "Stages ",children: <Stages/> },
        { key: "Global_Notice", label: "Global Notice ",children: <GlobalNotice/> },
        { key: "UI_Settings", label: "UI Settings ",children: <UiSettings/> },
    ];

    return (
        <Row gutter={16} style={{ minHeight: "100vh", background: "#ffff", padding: "20px" }}>
            {/* Sidebar */}
            <Col style={{ width: 220, background: "#ffffff", padding: "16px", borderRadius: "8px", boxShadow: "0px 2px 8px rgba(0,0,0,0.1)" }}>
                <Title level={5} style={{ textAlign: "center" }}>Spark CRM</Title>
            </Col>

            {/* Main Content */}
            <Col flex="auto">
                <ManageSetting />
                <Card style={{ width: "100%", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", background: "#faf9f9" }}>
                    <Tabs tabBarStyle={{ borderBottom: "1px solid #d9d9d9",   color: "#ACABAB" }}  defaultActiveKey="1" items={items} onChange={onChange} />
                </Card>
            </Col>
        </Row>
    );
};

const SettingsForm = () => {
    const inputStyle = { border: "1px solid #d9d9d9", borderRadius: "4px" };

    return (
        <Card style={{width:"100%"}}>
            <Form layout="vertical ">
                <Row gutter={[16,8]}>
                    <Col span={12}>
                        <Form.Item label="App Name">
                            <Input placeholder="Enter app name" style={inputStyle} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="App Email">
                            <Input placeholder="Enter app email" style={inputStyle} />
                        </Form.Item>
                    </Col>
                </Row>

                <Title style={{margin:0}} level={5}>Site Information</Title>

                <Row gutter={[16, 8]}>
                    <Col span={12}>
                        <Form.Item label="Site Title">
                            <Input placeholder="Enter site title" style={inputStyle} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[16, 8]}>
                    <Col span={12}>
                        <Form.Item label="Site Description">
                            <Input.TextArea rows={3} placeholder="Enter site description" style={inputStyle} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row style={{ marginBottom: 8 }}>
                    <Col span={24}>
                        <Title style={{ margin: 0, textAlign: "start" }} level={5}>
                            Logo
                        </Title>
                    </Col>
                </Row>

                <Row justify="start">
                    <Col>
                        <Form.Item style={{ marginBottom: 0 }}>
                            <Upload>
                                <Button
                                    type="dashed"
                                    icon={<PlusOutlined />}
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        borderRadius: "4px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems:"center",
                                        justifyContent: "center",
                                    }}
                                >
                                    Upload
                                </Button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>


                <Title level={5}>Login Message</Title>
                <Row gutter={[16, 8]}>
                    <Col span={12}>
                        <Form.Item label="Login Message">
                            <Input.TextArea rows={3} placeholder="Enter login message" style={inputStyle} />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="primary">Save</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default AppSetting;