import { Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element ={<Register/>}/>
        <Route path="/signup" element ={<Signup/>}/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
