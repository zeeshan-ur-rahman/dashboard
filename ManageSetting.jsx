import { Space, Button, Breadcrumb, Typography, Badge } from "antd";
import superAdminImage from "../assets/admin_logo.jpeg"
import TaxonomyICon from "../assets/tax.svg"
import CustomIcon from "../assets/custom.svg"
import ActivityIcon from "../assets/activity.svg"
import { BellOutlined,SettingOutlined } from "@ant-design/icons";


const { Title } = Typography;

const ManageSetting = () => {
    return (
        <>
 


            <Space size="middle" style={{ display: "flex", justifyContent: "flex-end", padding: "0px 16px",borderBottom:"1px solid #CACACA",width:"100%",height:"56px" }}>
                <Button type="text" ><img src={TaxonomyICon} alt="" />Taxonomies</Button>
                <Button type="text" ><img src={CustomIcon} alt="" />Custom Fields</Button>
                <Button type="text" icon={<SettingOutlined />}>Settings</Button>
                <Button type="text"> <img src={ActivityIcon} alt="" />Activity Logs</Button>
                <Badge count={83} size="small" >
                <Button type="text" icon={<BellOutlined  style={{fontSize:"20px"}}/>} />
                </Badge>
                <Button type="text">
                    <img 
                        src={superAdminImage} 
                        alt="Super Admin" 
                        style={{ 
                            width: "20px", 
                            height: "20px", 
                            borderRadius: "50%", 
                            marginRight: "8px" 
                        }} 
                    />
                    Super Admin
                </Button>
            </Space>

            <div
                style={{
                    width: "100% ",
                    height:"70px",
                    padding: "16px 12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderBottom: "1px solid #CACACA",
                    borderLeft: "1px solid CACACA",
                    color:"#FFFFFF"
                }}
            >
                <Title level={5} style={{ margin: "0 0 8px 0", textAlign: "left" }}>Manage Settings</Title>
                <Breadcrumb items={[
                    { title: "Home" },
                    { title: "Settings" }
                ]} />
            </div>
        </>
    );
};

export default ManageSetting;