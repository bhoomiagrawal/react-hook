import React, { useState, useEffect } from 'react';

import logo from "./logo.svg";
import "./App.css";


//By using custom hook
const useTitle = title => {
  useEffect(
    () => {
      document.title = title;
    },
    [title]
  )
}

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
 
  const [total, setTotal] = useState(5);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log('asasass');
  //   document.title = `You clicked ${total} times`;
  //   // return function cleanup() {
  //   //   setCount(count + 1)
  //   // };
  // });

  useEffect(() => {
    console.log('other effect');
  });

  const increment  = () => setCount(count + 1);
  useTitle(count);


  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <p>useEffect state count (starting with 5): {total}</p>
      <div>
      <button onClick={() => {setCount(0); setTotal(5)}} style={{marginLeft: '5px'}}>Reset</button>
      <button onClick={increment} style={{marginLeft: '5px'}}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)} style={{marginLeft: '5px'}}>-</button>
        <button onClick={()=>setTotal(total + 1)} style={{marginLeft: '5px'}}>useEffect state</button>
      </div>
      
    </div>
  );
}

export default App;
