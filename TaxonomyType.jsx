import {Input, Card, Row, Col, Button, Typography, Form} from "antd";
import { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;

const TaxonomyTypes = () => {
    const [fields, setFields] = useState([
        { key: 1, label: "Stage", plural: "stages", slug: "spark-stages" },
        { key: 2, label: "Lead Source", plural: "Lead Sources", slug: "lead-sources" },
        { key: 3, label: "Utility Company", plural: "Utility Companies", slug: "utility-companies" },
        { key: 4, label: "Deal Type", plural: "Deal Types", slug: "deal-types" },
        { key: 5, label: "Financing", plural: "Financings", slug: "financing" },
        { key: 6, label: "Roof Type", plural: "Roof Types", slug: "roof-types" },
        { key: 7, label: "Inverter", plural: "Inverters", slug: "inverter" },
        { key: 8, label: "Module", plural: "Modules", slug: "module" },
        { key: 9, label: "Meter", plural: "Meters", slug: "meter" },
        { key: 10, label: "Bug Category", plural: "Bug Categories", slug: "bug-categories" },
        { key: 11, label: "Severity", plural: "Severities", slug: "severity" },
        { key: 12, label: "Build Partner", plural: "Build Partners", slug: "build-partners" },
        { key: 13, label: "Permit Partner", plural: "Permit Partner", slug: "permit-partner" },
        { key: 14, label: "Battery", plural: "Batteries", slug: "batteries" },
        { key: 15, label: "Role Category", plural: "Role Categories", slug: "role-categories" },
        { key: 16, label: "Job Type", plural: "Job Types", slug: "job-types" },
        { key: 17, label: "Resource Category", plural: "Resource Categories", slug: "resource-categories" },
        { key: 18, label: "Job Status", plural: "Job Statuses", slug: "job-statuses" },
        { key: 19, label: "Inverter Manufacturer", plural: "Inverter Manufacturers", slug: "inverter-manufacturers" },
        { key: 20, label: "Mobile Manufacturer", plural: "Mobile Manufacturers", slug: "mobile-manufacturers" },
        { key: 21, label: "Adder Category", plural: "Adder Categories", slug: "adder-categories" },
        { key: 22, label: "Racking", plural: "Rackings", slug: "rackings" },
        { key: 23, label: "Financier Term", plural: "Financier Terms", slug: "financier-terms" },
        { key: 24, label: "Permit Type", plural: "Permit Types", slug: "permit-types" },
        { key: 25, label: "Equipment Type", plural: "Equipment Types", slug: "equipment-types" },
        { key: 26, label: "Schedule Visit Type", plural: "Schedule Visit Types", slug: "schedule-visit-types" },
    ]);

    const [nextKey, setNextKey] = useState(27);

    const removeField = (key) => {
        setFields(fields.filter(field => field.key !== key));
    };

    const addField = () => {
        const newField = {
            key: nextKey,
            label: "",
            plural: "",
            slug: ""
        };
        setFields([...fields, newField]);
        setNextKey(nextKey + 1);
    };

    const handleLabelChange = (key, value) => {
        const updatedFields = fields.map(field => {
            if (field.key === key) {
                // Generate plural and slug from label
                const plural = value.endsWith('y') ?
                    `${value.slice(0, -1)}ies` :
                    value.endsWith('s') ?
                        `${value}es` :
                        `${value}s`;

                const slug = value.toLowerCase().replace(/\s+/g, '-');

                return { ...field, label: value, plural, slug };
            }
            return field;
        });
        setFields(updatedFields);
    };

    return (
        <Card>
            {fields.map((field) => (
                <Row gutter={16} key={field.key} align="middle" style={{marginBottom: "16px"}}>
                    <Col span={8}>
                        <div>
                            <label>Label <span style={{color: "red"}}>*</span></label>
                            <Input
                                value={field.label}
                                onChange={(e) => handleLabelChange(field.key, e.target.value)}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <label>Plural <span style={{color: "red"}}>*</span></label>
                            <Input value={field.plural} disabled/>
                        </div>
                    </Col>
                    <Col span={7}>
                        <div>
                            <label>Slug <span style={{color: "red"}}>*</span></label>
                            <Input value={field.slug} disabled/>
                        </div>
                    </Col>
                    <Col span={1}
                         style={{display: "flex", alignItems: "flex-end", height: "56px", justifyContent: "center"}}>
                        <MinusCircleOutlined
                            style={{
                                fontSize: "18px",
                                cursor: "pointer",
                                marginBottom: "5px"
                            }}
                            onClick={() => removeField(field.key)}
                        />
                    </Col>
                </Row>
            ))}

            <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                <Button
                    type="dashed"
                    onClick={addField}
                    icon={<PlusOutlined/>}
                >
                    Add Taxonomy Type
                </Button>
            </div>

            <Form.Item style={{ display: "flex", justifyContent: "flex-end",marginTop:"10px",marginBottom:"-10px" }}>
                <Button type="primary">Save</Button>
            </Form.Item>
        </Card>
);
};

export default TaxonomyTypes;