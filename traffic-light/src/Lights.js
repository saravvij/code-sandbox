import React, { useState, useEffect } from 'react';

const black = 'black';
const green = 'green';
const yellow = 'yellow';
const red = 'red';

const Lights = () => {
  const [status, setStatus] = useState(black);
  useEffect(() => {
    const timer = setInterval(() => {
      switch (status) {
        case black:
          setStatus(green);
          break;
        case green:
          setStatus(yellow);
          break;
        case yellow:
          setStatus(red);
          break;
        case red:
          setStatus(green);
          break;
        default:
          setStatus(black);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [status]);

  return (
    <div className='lights'>
      <div
        className={status === green ? green : black}
        onClick={() => setStatus(green)}
      ></div>
      <div
        className={status === yellow ? yellow : black}
        onClick={() => setStatus(yellow)}
      ></div>
      <div
        className={status === red ? red : black}
        onClick={() => setStatus(red)}
      ></div>
    </div>
  );
};

export default Lights;
