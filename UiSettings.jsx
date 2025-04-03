import React, { useState } from "react";
import { Button, Card } from "antd";
import "antd/dist/reset.css";

const colors = [
    ["#9BA1B6", "#667388", "#4C5468", "#9EA3AE", "#6B7380","#4A5561"],
    ["#A2A3A8", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#A2A3A8", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#E89E47", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#EFCC3A", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#86D287", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#7AC8BE", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#154D68", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#154D68", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#154D68", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
    ["#154D68", "#5E7BF3", "#61B17D", "#E3802C", "#677388","#609CE4"],
];

const UiSettings = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    return (
        <Card 
            title="Primary colors" 
            headStyle={{ backgroundColor: "#F5F5F5", borderBottom: "1px solid #CACACA" }}
            style={{ 
                width: "100%", 
                maxWidth: 1375, 
                margin: "0px",
                padding: "0px",
                borderRadius: "5px",
                border: "1px solid #ddd"
            }}
        >
            <div style={{ marginBottom: 16, fontWeight: "bold" }}>Background Color</div>
            
            {/* Color Grid */}
            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(6, 24px)", 
                gap: 8, 
                justifyContent: "start",
            }}>
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

            {/* Save Button with Border */}
            <div style={{ 
                display: "flex", 
                justifyContent: "flex-end", 
                marginTop: 20,
                padding: "8px",
            }}>
                <Button type="primary">Save</Button>
            </div>
        </Card>
    );
};

export default UiSettings;
