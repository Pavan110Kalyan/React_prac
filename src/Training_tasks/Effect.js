import React, { useEffect, useRef, useState } from 'react';

const Effect = () => {
    const [count, setCount]=useState(0);

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });
   
    // const [counter, setCounter] = useState(0);
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    //     return () => {
    //         document.title = 'React App';
    //       };
    //     }, [counter]); 

  return (
    <div>
      <h1>use Effect Hook</h1>
      <h1>i have rendered {count} times!</h1>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button> */}
       
    </div>
  );
}

export default Effect;
