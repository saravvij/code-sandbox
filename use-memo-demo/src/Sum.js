import React from 'react';

export default function Sum({ value1 = 0, value2 = 0 }) {
  const computeExpensiveValue = (a, b) => {
    for(let i=0; i<1000000000; i++){}
    return a * b * 1000;
  };
  computeExpensiveValue(value1, value2);

  console.log('Sum called', value1, value2);
  return (
    <div>
      <h2>Sum: {value1 + value2}</h2>
    </div>
  );
}
