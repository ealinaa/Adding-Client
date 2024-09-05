import { Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgetPassword from "./pages/ForgetPassword"
import Home from "./pages/Home"
import CreateClient from "./pages/CreateClient"

function App() {
  

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>

      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/register" element ={<Register/>}/>
        <Route path="/forgetpassword" element ={<ForgetPassword/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path ="/createclient" element= {<CreateClient/>}/>
       
      </Routes>
      </div>
    </>
  )
}

export default App
