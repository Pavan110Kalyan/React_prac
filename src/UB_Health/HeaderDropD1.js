import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';


const items=[
    {
        label:<a href='#'>senior care</a>,
        key:'0',
    },
    {
        label:<a href='#'>care givers</a>,
        key:'1',
    },
    {
        type: 'divider',
    },
    {
        label:<a href='#'>doctors</a>,
        key:'3',
    },
];
const HeaderDropD1 = () => {
  return (
    <div>
      <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
      >
        <a onClick={(e)=> e.preventDefault()}>
            <Space>
                Our services
                <DownOutlined/>
            </Space>
        </a>
      </Dropdown>
    </div>
  );
}

export default HeaderDropD1;