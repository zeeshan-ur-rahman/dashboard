import React, { useState } from "react";
import { Card, Input, Switch, Button, Radio, Row, Col } from "antd";
import "./global_notice.css"; // Custom CSS file ko import karein

const GlobalNotice = () => {
    const [noticeText, setNoticeText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [bgColor, setBgColor] = useState("#ffffff");

    const colors = ["#f5222d", "#faad14", "#52c41a", "#1890ff", "#722ed1", "#595959"];

    const handleSave = () => {
        console.log({ noticeText, isVisible, bgColor });
    };

    return (
        <Card style={{border:"1px solid #CACACA"}} title="Global Notice" headStyle={{ backgroundColor: "#F5F5F5",borderBottom:"1px solid #CACACA" }}>
            <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", marginBottom: 8 }}>Notice Text</label>
                <Input.TextArea
                    rows={5}
                    placeholder="Enter notice"
                    value={noticeText}
                    onChange={(e) => setNoticeText(e.target.value)}
                    style={{ width:"513px"  }}
                />
            </div>

            <Row gutter={16} style={{ marginBottom: 16, alignItems: "center" ,width:"513px" ,height:"99px" }}>
                <Col span={12}>
                    <label style={{ display: "block", marginBottom: 4 }}>Notice Bar Visibility</label>
                    <Switch checked={isVisible} onChange={setIsVisible}  size="large" unCheckedChildren="Hidden"  />
                </Col>
                <Col span={12}>
                    <label style={{ display: "block", marginBottom: 4 }}>Background Color</label>
                    <Radio.Group
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="custom-radio-group"
                        style={{ display: "flex", gap: "9px" }}
                    >
                        {colors.map((color) => (
                            <Radio.Button
                                key={color}
                                value={color}
                                className="custom-radio-btn"
                                style={{
                                    backgroundColor: color,
                                    borderRadius: "50%",
                                    width: 24,
                                    height: 24,
                                    display: "inline-block",
                                    padding: 0,
                                    boxShadow: "none",
                                    outline: "none",
                                    border: "none",
                                }}
                            >
                                &nbsp;
                            </Radio.Button>
                        ))}
                    </Radio.Group>
                </Col>
            </Row>

            <div style={{ textAlign: "right" }}>
                <Button type="primary" onClick={handleSave}>Save</Button>
            </div>
        </Card>
    );
};

export default GlobalNotice;
