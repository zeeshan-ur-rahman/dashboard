import { Table, Input, Button, Switch, Space, Pagination } from 'antd';
import { ReloadOutlined, SettingOutlined, CopyOutlined } from '@ant-design/icons';
import "./hellosign.css"

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
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'Actions',
            key: 'actions',
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
        <div style={{ background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: '#f5f5f5',
            }}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Input placeholder="Search..." style={{width: '341px'}}/>
                </div>
                <Space>
                    <Switch size="large" checkedChildren="Show Deleted" unCheckedChildren="Show Deleted"/>
                    <Button type="text" icon={<CopyOutlined/>} size="small"/>
                    <Button type="text" icon={<ReloadOutlined/>} size="small"/>
                    <Button type="text" icon={<SettingOutlined/>} size="small" title="Settings"/>
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

            <div style={{display: 'flex', justifyContent: 'end', marginTop: '16px', alignItems: 'center'}}>
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