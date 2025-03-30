import { Space, Button, Breadcrumb, Typography } from "antd";
import { SettingOutlined, FileTextOutlined, BellOutlined, UserOutlined, UnorderedListOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ManageSetting = () => {
    return (
        <>
            <Space size="middle" style={{ display: "flex", justifyContent: "flex-end", padding: "0px 16px",borderBottom:"1px solid #ddd" }}>
                <Button type="text" icon={<UnorderedListOutlined />}>Taxonomies</Button>
                <Button type="text" icon={<FileTextOutlined />}>Custom Fields</Button>
                <Button type="text" icon={<SettingOutlined />}>Settings</Button>
                <Button type="text" icon={<UnorderedListOutlined />}>Activity Logs</Button>
                <Button type="text" icon={<BellOutlined />} />
                <Button type="text" icon={<UserOutlined />}>Super Admin</Button>
            </Space>

            <div
                style={{
                    width: "100%",
                    height:"70px",
                    padding: "16px 12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: "#fff",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderBottom: "1px solid #ddd",
                    borderLeft: "1px solid #ddd",
                    borderTop: "1px solid #ddd",
                }}
            >
                <Title level={5} style={{ margin: "0 0 8px 0", textAlign: "left" }}>Manage Settings</Title>
                <Breadcrumb style={{ margin: "0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Settings</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </>
    );
};

export default ManageSetting;
