import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const Counter = () => {

  const {count, setCount} = useContext(CounterContext);

  const handleIncDec = (props) => {
    props? setCount(count+1): setCount(count-1);
  }
  
  return (
    <div>
        <button onClick={() => handleIncDec(true)}>Increment</button>
        <button onClick={() => handleIncDec(false)}>Decrement</button>
    </div>
  )
}

export default Counter