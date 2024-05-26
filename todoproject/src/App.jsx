import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './contexts'

function App() {
  const [todos, settodos] = useState([])
  const addtodo=(todo)=>{
    settodos((prev)=>[...prev, {id:Date.now(),...todo}] )
  }

  const updatetodo=(id,todo)=>{
    settodos((prev)=>prev.map( ))
  }

  return (
    <Todoprovider value={{todos,addtodo,updatetodo,deletetodo,togglecomplete}}>
     <div className=" bg-blue-950 text-white-500 w-screen h-screen py-7">
    <h1 className='text-4xl py-12 '>Manage your Todos</h1>        
    
    
    <form className='flex justify-center'>
    <input
                type="text"
                placeholder="Write Todo..."
                className="w-96 border border-black/10 rounded-l-lg px-10 outline-none duration-150 bg-white/20 py-1.5 p"
            />

      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
      </button>

    </form>

    <br/>

    <form className='flex justify-center'>
    <input
    type='checkbox'
    
    />

      <input
      type='text'
      placeholder='Learn Something New'
      className='w-96 rounded-lg bg-yellow-200 text-orange-600 line-through '/>

<button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                > 
                📁</button>

      <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                
            >
                ❌
            </button>

    </form>
    <br/>

    <form className='flex justify-center'>
    <input
    type='checkbox'
    
    />

      <input
      type='text'
      placeholder='Learn Something New'
      className='w-96 rounded-lg bg-yellow-200 text-orange-600 line-through'/>
      <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                > 
                📁</button>
      <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                
            >
                ❌
            </button>

    </form>

    <br/>

    <form className='flex justify-center'>
    <input
    type='checkbox'
    
    />

      <input
      type='text'
      placeholder='Learn Something New'
      className='w-96 rounded-lg bg-yellow-200 text-orange-600  '/>

<button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                > 
                📁</button>

<button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                
            >
                ❌
            </button>

    </form>
</div>
    </Todoprovider>

  )
}

export default App
