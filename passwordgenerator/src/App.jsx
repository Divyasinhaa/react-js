import { useState,useCallback,useRef,useEffect } from 'react'
function App() {
  const [length, setLength] = useState(6);
  const[allownumbers,setallownumbers]=useState(true);
  const[charallow,setcharallow]=useState(true);
  const[password,setpassword]=useState();

  const passwordRef = useRef(null)

  const passwordgenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(allownumbers){
      str+="1234567890";
    }
    if(charallow){
      str+="!@#$%^&*()_-+={}[]'<>,."
    }
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setpassword(pass)

      
    }
  ,[length,allownumbers,charallow,setpassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordgenerator()
  }, [length, allownumbers, charallow, passwordgenerator])


  return (
    <>
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg  h-auto px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>PASSWORD GENERATOR</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4"></div>

    
    <div className='flex py-4'>
      <input
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3'
      ref={passwordRef}
      />
      <button onClick={copyPassword}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
    </div>

    <div className='gap-x-2 flex'>
    <input
    type='range'
    min={6}
    max={100}
    value={length}
    className='space-x-8 cursor-pointer'
    onChange={(e) => {setLength(e.target.value)}}

    />Length
    
    <input
    type='checkbox'
    className='space-x-8'
    onChange={() => {
      setallownumbers((prev) => !prev);
  }}
    />Numeric 

    <input
    type='checkbox'
    className='space-x-8'
    onChange={() => {
      setcharallow((prev) => !prev )
  }}
    />Character 

    </div>
    </div>
    </>
  )

}

export default App