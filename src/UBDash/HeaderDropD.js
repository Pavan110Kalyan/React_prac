import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';
import './HeaderDropD.scss';

const items=[
    {
        label:<a href='#'>italic</a>,
        key:'0',
    },
    {
        label:<a href='#'>persian</a>,
        key:'1',
    },
    {
        type: 'divider',
    },
    {
        label:<a href='#'>french</a>,
        key:'3',
    },
];
const HeaderDropD = () => {
  return (
    <div className='HDDrop'>
      <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
      >
        <a onClick={(e)=> e.preventDefault()}>
            <Space>
                English
                <DownOutlined/>
            </Space>
        </a>
      </Dropdown>
    </div>
  );
}

export default HeaderDropD;