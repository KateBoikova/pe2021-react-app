import React, { useState, useEffect } from 'react';

function MouseClickerH () {
  // const state = useState(0);
  // const counter = state[0];
  // const setCounter = state[1];

  // const [counter, setCounter] = useState(0);
  // const [coords, setCoords] = useState({ x:0, y:0 });
  // const clickHandler = () => {setCounter(counter+1)};
  // return (
  //   <div onClick={clickHandler}
  //   onMouseMove={mouseMoveHandler}
  //   style={{height: '100vh', border: '2px solid red', boxSizing: 'border-box'}}>
  //     {counter}
  //   </div>
  // )

  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const clickHandlerDecrement = () => {
    setCounter(counter - step);
  };
  const clickHandlerIncrement = () => {
    setCounter(counter + step);
  };
  setStep = ({ target: { value } }) => {
    setStep(Number(value));
  };

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <>
      <div>{counter}</div>
      <input type='number' value={step} onChange={clickHandlerStep} />
      <br />
      <button onClick={clickHandlerDecrement}>-</button>
      <button onClick={clickHandlerIncrement}>+</button>
    </>
  );
}

export default MouseClickerH;
