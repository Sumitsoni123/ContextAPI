import { useContext, useState } from 'react'
import './App.css'
import Counter from './components/CountBtn'
import { CounterContext } from './context/CounterContext'

function App() {
  const {count} = useContext(CounterContext);

  return (
    <div className='App'>
      <h1>Count : {count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

export default App
