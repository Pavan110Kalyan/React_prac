import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Head from './DashBoard/Head';
import DashDesign from './DashBoard/DashDesign.css';
import Nav from './DashBoard/Nav';
import Body from './DashBoard/Body';


import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import React1 from './pages/React1';
import Routing from './pages/Routing';

import UbNav from './UboraHealth/UbHome';
// import Header from './UboraHealth/Header';
import Login from './UB_Health/Login.js';
// import Login from './UboraHealth/Login';
import Partner from './UboraHealth/Partner';
import Start from './UboraHealth/Start';
import UbHome from './UboraHealth/UbHome';
import DayCare from './UboraHealth/DayCare';
import Appointment from './UboraHealth/Appointment';
import CareGiver from './UboraHealth/CareGiver';
import OrderSummary from './pages/OrderSummary';
import HomePage from "./UboraHealth/HomePage/HomePage";

//import { Button } from 'antd';
//  import Button from 'antd/es/button';
import { Button, DatePicker, Card, Carousel, Calendar } from 'antd';
//import 'antd/dist/antd.css';
import ButtonSize from './Ant-d-practice/ButtonSize';
import Ex1 from './Ant-d-practice/Ex3';
import Ex2 from './Ant-d-practice/Ex2';
import Ex4 from './Ant-d-practice/Ex4';
import Ex5 from './Ant-d-practice/Ex5';
import Ex6 from './Ant-d-practice/Ex6';
import Ex7 from './Ant-d-practice/Ex7';
// import Header from './Dev2Prod/Header';
// import Intro from './Dev2Prod/Intro';
import Dev2prodHome from './Dev2Prod/Dev2prodHome';
import Menu from './UB_Health/Menu.js';
import Expand from './Ant-d-practice/Expand.js';
import MediaQ from './Ant-d-practice/MediaQ.js';
import UB_Header from './UB_Health/UBHeader.js';
import UBHealth from './UB_Health/UBHealth.js';
import Dash from './UBDash/Dash.js';
import Center1 from './UBDash/Center1.js';
import Calender from './UBDash/Calender.js';
import Bookings from './UBDash/Bookings.js';
import Virtual_Dom from './Training_tasks/Virtual_Dom.js';
import State from './Training_tasks/State.js';
import Hook1 from './components/Hook1.jsx';
import Effect from './Training_tasks/Effect.js';
import Ref from './Training_tasks/Ref.js';
import EventHandling from './Training_tasks/EventHandling.js';
import Task1 from './Training_tasks/Task1.js';
import SeniorCareRoom from './Training_tasks/SeniorCareRoom.js';
import Project_Task from './Training_tasks/Project_Task.js';
import Dummy from './Training_tasks/Dummy.js';
import Project1 from './Project/Project1.js';








//  import Head from './Tasks/Head';
// import Body from './Tasks/Body';
// import Body2 from './Tasks/Body2';
// import Foot from './Tasks/Foot';
// import Task1Css from'./Tasks/Task1Css.css';

// const { RangePicker } = DatePicker;


function App() {
  return (
   
    // <div>
    //   <Virtual_Dom/>
    //   {/* <State/> */}
    //   <Hook1/>
    //   <Effect/>
    //   <Ref/>
    //   <EventHandling/>
    //   {/* <Dash/> */}
    //   {/* <Calender/> */}
    //   {/* <Bookings/> */}
    // </div>


    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //   <Route index element={<Home />}/>
    //   <Route path="blogs" element={<Blog />}/>
    //   <Route path="contact" element={<Blog />}/>
    //   <Route path="react" element={<React1 />}/>
    //   <Route path='order' element={<OrderSummary/>}/>
    //   <Route path="nopage" element={<NoPage />}/>
    //   <Route path="route" element={<Routing />}/> 
    //   </Route>
    // </Routes>
    // </BrowserRouter>


    <>
    {/* <Task1/> */}
    {/* <Project_Task/> */}
    {/* <SeniorCareRoom/> */}
    {/* <Dummy/> */}
    <Project1/>
    </>


    // <React.Fragment>




    // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<HomePage />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/partner" element={<Partner />} />
    //     <Route path="/order" element={<OrderSummary />}/>
    //     <Route path="/start" element={<Start />} />
    //     <Route path="/daycare" element={<DayCare />} />
    //     <Route path="/appoint" element={<Appointment />} />
    //     <Route path="/caregiver" element={<CareGiver />} />
    //     {/* <Route path="/order" element={<OrderSummary/>}/> */}
    //   </Routes>
    // </Router>

    // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<UBHealth/>} />
    //     <Route path="/menu" exact element={<Menu />} />
    //     <Route path="/login" element={<Login />} />
  //  {/* //     <Route path="/partner" element={<Partner />} />
  //       <Route path="/order" element={<OrderSummary />}/>
  //       <Route path="/start" element={<Start />} />
  //       <Route path="/daycare" element={<DayCare />} />
  //       <Route path="/appoint" element={<Appointment />} />
  //       <Route path="/caregiver" element={<CareGiver />} /> */}
      //  {/* <Route path="/order" element={<OrderSummary/>}/> */}
    // {/* //   </Routes>
    // </Router>  */}



    // <div className="App">
  
     // {/* <Button type="primary">Button</Button>
 //    <Button type='primary'>Button</Button> */}
    // {/* <header className="App-header">
    //     <h1>Ant Design Example</h1>
    //     <Card title="Ant Design Components">
    //       <Button type="primary">Primary Button</Button>
    //       <Button>Default Button</Button>
    //       <Button type="dashed">Dashed Button</Button>
    //       <DatePicker />
    //       <RangePicker />
    //       </Card>
    //   </header> */}
  //     {/* <Antd1 /> */}
    //  {/* <ButtonSize />
  //   //   <Ex1 /> */}//
  //  {/* <Ex7 /> */}
  //    {/* <Header />
  //   //   <Intro /> */}
  //      {/* <Dev2prodHome /> */}
      //  {/* <UBHealth />  */}
  //     //  <Menu />
  //       {/* <MediaQ/> */}
  //   {/* <AntdC /> */}
  //   {/* // <Expand/>  */}
  // </div>
 
    // </React.Fragment>

    //<Login />

  //   */

  
  );
}
;

export default App;
