import { Link } from "react-router-dom"

function Register() {
  return (
    <div className=" w-5/6 mx-auto " >
      

    <form className=' flex flex-col items-center justify-center w-full ' style={{ height: '100vh' }}>
   

      <div className=' w-full lg:w-1/2 border-2 border-solid border-slate-200 p-4  '>
        <h1 className='text-3xl font-bold text-center md:pb-4 pb-4 md:pt-3 pt-3 underline'>REGISTER</h1>
        <div className='  flex justify-between text-xl font-semibold '>
          <label htmlFor="username" className='w-2/5 sm:w-1/5 text-lg sm:text-xl font-bold'  >Username</label>
          <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='username' id='username'/>

        </div>

        <div className=' md:pt-3 pt-3  text-xl font-semibold flex justify-between'>
          <label htmlFor="username" className='w-2/5 sm:w-1/5 text-lg sm:text-xl font-bold' >Email</label>
          <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='email' id='email'/>
        </div>

        <div className='  flex justify-between md:pt-3 pt-3 md:pb-4 pb-4 text-xl font-bold '>
          <label htmlFor="pwd" className='w-2/5 sm:w-1/5 text-lg sm:text-xl'>Password </label>
          <input type="password" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='pwd' id='pwd' />

        </div>
        {/* <div className='  flex justify-between md:pt-3 pt-3 md:pb-4 pb-4 text-xl font-bold '>
          <label htmlFor="pwd" className='w-2/5 sm:w-1/5 text-lg sm:text-xl'>Confirm Password </label>
          <input type="confirm password" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='pwd' id='pwd' />

        </div>
        */}

        <div className='text-center space-x-4 '>

          <button className=' font-semibold rounded-md px-4 py-2 text-2xl border-2 border-solid bg-slate-200 hover:bg-gray-500 ' >Register</button>
          <button className=' font-semibold rounded-md px-4 py-2 text-2xl border-2 border-solid bg-slate-200 hover:bg-gray-500  '>Go Back</button>
        </div>
        <div className='text-xl  pt-3 text-center'>
          Already have an account? <Link to="/login" className='ps-3 text-blue-700 font-semibold'>Login</Link>
        </div>
      </div>

    </form>
  



  </div>
  )
}

export default Register