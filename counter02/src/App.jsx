import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let [counter,setCounter]=useState(6)

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
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
