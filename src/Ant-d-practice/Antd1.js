import React from 'react';
import { Button, DatePicker, Card} from 'antd';



const { RangePicker } = DatePicker;

function Antd1() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ant Design Example1</h1>
        <Card title="Ant Design Components">
            <div>
          {/* <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type='primary'>Click here</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="dashed">Dashed2 Button</Button> */}
          <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" shape="circle">A</Button>
    <Button type="primary" icon="search">Search</Button>
  </div>
          </div>
{/* 
          <br />
          <br /> */}

          {/* <div><DatePicker /></div> */}
          {/* <br /> */}
          {/* <RangePicker /> */}

        </Card>
      </header>
    </div>
  );
}

export default Antd1;
