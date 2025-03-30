import { Card, Switch, Space, Typography } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './hellosign.css';

const { Text } = Typography;

const Stages = () => {
    const [stages, setStages] = useState([
        { key: '1', name: 'Job Review', enabled: false },
        { key: '2', name: 'Site Survey', enabled: false },
        { key: '3', name: 'Design', enabled: false },
        { key: '4', name: 'Permit', enabled: false },
        { key: '5', name: 'Utility & HOA', enabled: false },
        { key: '6', name: 'Installation & Inspections', enabled: false },
        { key: '7', name: 'PTO & Commissioning', enabled: false },
        { key: '8', name: 'Accounting & Funding', enabled: false },
        { key: '9', name: 'Completed', enabled: false },
        { key: '10', name: 'Completed Site Visit Required', enabled: false },
        { key: '11', name: 'Cancelled', enabled: false },
        { key: '12', name: 'Cancelled Audit Complete', enabled: false },
    ]);

    const handleToggle = (key) => {
        setStages(prevStages =>
            prevStages.map(stage =>
                stage.key === key ? { ...stage, enabled: !stage.enabled } : stage
            )
        );
    };

    return (
        <Card title="Stages Setting"  headStyle={{ backgroundColor: "#F5F5F5",border:"1px solid #CACACA" }}>
            {stages.map((stage, index) => (
                <div key={stage.key} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "6px 0"
                }}>

                    {/* Stage + Status (No Extra Space) */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Text style={{ width: "250px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {index + 1}. {stage.name}
                        </Text>
                        <Text
                            style={{
                                backgroundColor: stage.enabled ? "transparent" : "#F7DB8059",
                                color: stage.enabled ? "green" : "black",
                                padding: "4px 8px",
                                borderRadius: "4px"
                            }}
                        >
                            {stage.enabled ? "Completed" : "Pending"}
                        </Text>
                    </div>

                    {/* Switch & Edit Icon */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Switch style={{ width: "48px", height: "16px" }} size="small" onChange={() => handleToggle(stage.key)} checked={stage.enabled} />
                        <EditOutlined />
                    </div>
                </div>
            ))}
        </Card>
    );
};

export default Stages;
