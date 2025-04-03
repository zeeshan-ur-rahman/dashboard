import { Table, Input, Button, Switch, Space, Pagination } from 'antd';
import { ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import "./hellosign.css"
import ArrowRight from "../assets/file-arrow-right.svg"

const HelloSignTemplates = () => {
    const data = [
        { key: '1', title: 'CO-Empower Install Agreement', state: 'Colorado - CO' },
        { key: '2', title: 'CO-Empower Install Agreement', state: 'Kansas - KS' },
        { key: '3', title: 'CO-Empower Install Agreement', state: 'Colorado - CO' },
        { key: '4', title: 'CO-Empower Install Agreement', state: 'Kansas - KS' },
        { key: '5', title: 'CO-Empower Install Agreement', state: 'Colorado - CO' },
        { key: '6', title: 'CO-Empower Install Agreement', state: 'Colorado - CO' },
        { key: '7', title: 'CO-Empower Install Agreement', state: '' },
        { key: '8', title: 'CO-Empower Install Agreement', state: '' },
        { key: '9', title: 'CO-Empower Install Agreement', state: 'Colorado - CO' },
        { key: '10', title: 'CO-Empower Install Agreement', state: '' },
        { key: '11', title: 'CO-Empower Install Agreement', state: 'Colorado - CO' },
    ];

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width:400,

        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width:300,
            render: (text) => text ? text : '-' 
        },
        {
            title: 'Actions',
            key: 'actions',
            width:200,

            render: (_, record) => (
                <Space>
                    <Button type="primary" size="small">
                        Update State
                    </Button>
                    {record.state && (
                        <Button size="small">
                            Default State
                        </Button>
                    )}
                </Space>
            ),
        },
    ];
    

    return (
        <div style={{ background: '#fff', border:"1px solid #CACACA" }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: '#f5f5f5',
                borderBottom:"1px solid #CACACA"
            }}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Input placeholder="Search..." style={{width: '341px'}}/>
                </div>
                <Space>
                    <Switch size="large" checkedChildren="Show Deleted" unCheckedChildren="Show Deleted"/>
                    <Button type="text" size="small"><img src={ArrowRight} /></Button>
                    <Button type="text" icon={<ReloadOutlined style={{fontWeight:"bold"}}/>} size="small"/>
                    <Button type="text" icon={<SettingOutlined />} size="small" title="Settings"/>
                </Space>
            </div>


            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                size="middle"
                className="custom-stages-table"
                rowClassName={(_, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')}

            />

            <div style={{display: 'flex', justifyContent: 'end', margin: '16px', alignItems: 'center'}}>
                <span style={{fontSize: '14px', color: "#3E3D3D"}}>1-11 of 11 item</span>
                <Pagination
                    showSizeChanger
                    defaultCurrent={1}
                    defaultPageSize={25}
                    pageSizeOptions={['10', '25', '50', '100']}
                    total={1}
                />
            </div>
        </div>
    );
};

export default HelloSignTemplates;