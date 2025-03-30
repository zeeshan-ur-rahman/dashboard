import React, { useState } from "react";
import { Button, Card } from "antd";
import "antd/dist/reset.css";

const colors = [
    ["#d9d9d9", "#bfbfbf", "#8c8c8c", "#595959", "#262626"],
    ["#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d"],
    ["#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08"],
    ["#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106"],
    ["#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d"],
    ["#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c"],
    ["#91d5ff", "#69c0ff", "#40a9ff", "#1890ff", "#096dd9"],
    ["#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4"],
];

const UiSettings = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    return (
        <Card title="Primary colors" style={{ width: "100%", padding: 24 }}>
            <div style={{ marginBottom: 16, fontWeight: "bold" }}>Background Color</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 24px)", gap: 8, justifyContent: "start" }}>
                {colors.flat().map((color, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        style={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            backgroundColor: color,
                            border: selectedColor === color ? "2px solid black" : "1px solid #ccc",
                            cursor: "pointer",
                        }}
                    />
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
                <Button type="primary">Save</Button>
            </div>
        </Card>
    );
};

export default UiSettings;
