import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [counter,setCounter]=useState(0)

  //let counter=15;
  const addValue=()=>{
    if(addValue>=20){
      stop;
    }
    console.log("value added",counter);
    setCounter(counter+1)
  }

  const removeValue=()=>{
    if(removeValue<=0){
      stop;
    }
    console.log("value removed",counter);
    setCounter(counter-1);
  }

  return (
    <>
      <h1> Counter project </h1>
      <h2> Counter value: {counter} </h2>

      <button onClick={addValue}>ADD VALUE</button>
      <br/>
      <br/>
      <button onClick={removeValue}>REMOVE VALUE</button>
    </>
  )
}

export default App
