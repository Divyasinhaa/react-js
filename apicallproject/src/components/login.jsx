import React,{useState,useContext} from 'react'
import usercontext from '../context/usercontext'

function Login() {

    const [username,setusername]=useState("username")
    const [password,setpassword]=useState("password")

    const{setuser}=useContext(usercontext)
 
    const handlesubmit=(e)=>{
        e.preventDefault()
        setuser(username,password)
    }

    return (
        <div>
            <h2>Login</h2>
            <input type='text' 
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            placeholder='username'/>
            {"                           "}
            <input type='text' 
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            placeholder='password'/>
            <button onClick={handlesubmit}>Submit</button>
        </div>
        
    )
}

export default Login
