import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Collapse, Select } from 'antd';
const { Option } = Select;
const text1 = `
We at Dev2Prod help individuals, startups, and large enterprises with custom-built software applications. Our teams deal with UX/ UI design all the way to Artificial Intelligence software solutions.
`;
const text2 = `
Please find our contact us form on the page. Please fill in everything you dream of, and we would get in touch with you.
`;
const text3 = `
Honestly, the answer varies based on the project. We advise you to be open to options. We will help you with the brainstorming sessions as well. For this, do get in touch.
`;
const text4 = `
The answer is a big, fat NO. Most of our customers come from a non-technical background, and there is absolutely no necessity to know the ins and outs of technology to get started.
`;
const text5 = `
The answer to this varies with the size and the complexity of the project. We would send you a quotation and the expected time frame before initiating any project. This will precisely answer all your needs.
`;

const Expand = () => {
  const [expandIconPosition, setExpandIconPosition] = useState('end');
//   const onPositionChange = (newExpandIconPosition) => {
//     setExpandIconPosition(newExpandIconPosition);
//   };
//   const onChange = (key) => {
//     console.log(key);
//   };
//   const genExtra = () => (
//     <SettingOutlined
//       onClick={(event) => {
//         // If you don't want click extra trigger collapse, you can prevent this:
//         event.stopPropagation();
//       }}
//     />
//   );
  const items = [
    {
        label: 'How can you help me with?',
      children: <div>{text1}</div>,
    },
    {
      //key: '1',
      label: 'How do I create a product with you?',
      children: <div>{text2}</div>,
      //extra: genExtra(),
    },
    {
     // key: '2',
      label: 'Should I create a mobile app or a web app?',
      children: <div>{text3}</div>,
    //  extra: genExtra(),
    },
    {
     // key: '3',
      label: 'Do I need to be tech-savvy to work with you?',
      children: <div>{text4}</div>,
    //  extra: genExtra(),
    },
    {
        label: 'How long does it take to build an application?',
      children: <div>{text5}</div>,
    },
  ];
  return (
    <>
      <Collapse
        //defaultActiveKey={['0']}
        // onChange={onChange}
        expandIconPosition={expandIconPosition}
        items={items}
      />
      <br />
      {/* <span>Expand Icon Position: </span> */}
      {/* <Select
        value={expandIconPosition}
        style={{
          margin: '0 8px',
        }}
        onChange={onPositionChange}
      >
        <Option value="start">start</Option>
        <Option value="end">end</Option>
      </Select> */}
    </>
  );
};
export default Expand;