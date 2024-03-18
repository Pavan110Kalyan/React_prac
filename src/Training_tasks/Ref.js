import React from 'react'
import { useState,useRef,useEffect } from 'react';
const Ref = () => {

    const [inputValue, setInputValue] = useState("");

    const count=useRef(0);

    useEffect(()=>{count.current=count.current + 1});

  return (

    <div>
        <h1>Use Ref Hook</h1>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
        <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default Ref;
