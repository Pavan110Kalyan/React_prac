import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';

const Day_Month = () => {
  return (
    <div className='day_month'>
         <Space direction="vertical">
              <Switch checkedChildren="Day" unCheckedChildren="Month" defaultChecked />
          </Space>
    </div>
  );
}

export default Day_Month;