import React from 'react';
import { useState } from 'react';
const Virtual_Dom = () => {

    const [message, setMessage] = useState('Hello, Virtual DOM!');

    const updateMessage = () => {
        setMessage('Hello, Updated Virtual DOM!');
      };

  return (
    <div>
       <h1>Dom Virtual</h1>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default Virtual_Dom;
