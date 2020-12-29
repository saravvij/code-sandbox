import React, { useState, useMemo } from 'react';
import './style.css';
import Sum from './Sum';

function App() {
  const [count, setCount] = useState(0);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);


  // Slow function
  const computeExpensiveValue = (a, b) => {
    console.log('computeExpensiveValue', a, b);
    return a * b * 1000;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(value1, value2), [
    value1,
    value2,
  ]);

  // Slow child component
  const memoSum = useMemo(() => <Sum value1={value1} value2={value2} />, [
    value1,
    value2,
  ]);

  return (
    <div className='app'>
      <h1>React useMemo hook demo</h1>
      <h2>count: {count}</h2>
      <h2>memoizedValue: {memoizedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
      <button onClick={() => setValue1(value1 + 1)}>Update Valu1</button>
      <button onClick={() => setValue2(value2 + 1)}>Update Valu2</button>
      <div>
        Child component
        {memoSum}
      </div>
    </div>
  );
}

export default App;
