import React from 'react';
import { useState } from 'react';
const State = () => {
    const [color,setColor]=useState("Black");
  return (
    <div>
      <h1>Use State Hook</h1>
      <h1>my favourite color is {color}!</h1>
    </div>
  );
}

export default State;
