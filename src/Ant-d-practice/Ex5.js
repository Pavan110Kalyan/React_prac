import React from 'react';
import { Button, Flex, Segmented } from 'antd';
const boxstyle={
    width:'100%',
    height:120,
    borderRadius:6,
    border:'1px solid #40a9ff',
};
const justifyOptions=[
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];

const Ex5 = () => {
    const [justify, setJustify]=React.useState(justifyOptions[0]);
    const [alignItems, setAlignItems] = React.useState(alignOptions[0]);

  return (
    <Flex gap="middle" align='start' vertical>
        <p>Select justify :</p>
        <segmented options={justifyOptions} onChange={setJustify} />
        <p>Select align :</p>
        <segmented options={alignOptions} onChange={setAlignItems} />
        <Flex style={boxstyle} justify={justify} align={alignItems}>
            <Button type='primary'>Primary</Button>
            <Button type='primary'>Primary</Button>
            <Button type='primary'>Primary</Button>
            <Button type='primary'>Primary</Button>
        </Flex>

    </Flex>
   
  );
}

export default Ex5
