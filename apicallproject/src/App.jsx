import './App.css'
import Profile from './components/profile'
import Login from './components/login'
import Usercontextprovider from './context/usercontextprovider'

function App() {
  

  return (
    <Usercontextprovider>
      <h1>api calls</h1>
      <Login/>
      <Profile/> 
    </Usercontextprovider >
  )
}

export default App
