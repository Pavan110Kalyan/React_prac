import React from 'react';
// import './Book_History.scss';
import Bookings from './Bookings';
const Book_History = () => {
  return (
    <div className='bookHistory'>
    <h3 id='h3'>Previous Updates</h3>
    <div className='book_history'>
        <Bookings/>
        <Bookings/>
        <Bookings/>
        <Bookings/>
        <Bookings/>
        <Bookings/>
        <Bookings/>
        <Bookings/> 
    </div>
    </div>
  );
}

export default Book_History;
