import React from 'react';
// import './Calender.scss';
import { Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
const Calender = () => {
    const { token } = theme.useToken();
    // const wrapperStyle = {
    //   width: 250,
    //   border: `1px solid ${token.colorBorderSecondary}`,
    //   borderRadius: token.borderRadiusLG,
    // };
    return (
      <div  className='calender'>
        <h3>Calendar</h3>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} className='cal'/>
        <table id='table'>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </table>
      </div>

    );
}

export default Calender;
