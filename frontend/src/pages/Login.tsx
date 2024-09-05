
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className=" w-5/6 mx-auto " >
   
         <form className=' flex flex-col items-center justify-center w-full' style={{ height: '100vh' }}>
           <div className=' w-full lg:w-1/2 border-2 border-solid border-slate-300 p-4  '>
             <h1 className='text-3xl font-bold text-center pb-4 pt-4 underline'>LOGIN</h1>
             
             <div className='pb-3  text-2xl font-semibold flex justify-between'>
               <label htmlFor="username" >Email</label>
               <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='email' id='email'/>
               
             </div>
             <div className='  flex justify-between text-2xl font-semibold '>
               <label htmlFor="pwd"  >Password</label>
               <input type="password" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='pwd' id='pwd'  />
            
             </div>
            
            
             <div className='text-center space-x-4 pt-4'>
   
               <button className=' font-bold rounded-md px-4 py-2 text-lg border-2 border-solid bg-slate-200 hover:bg-gray-500 '  >Login</button>
               <Link to='/forgetpassword'>
               <button className=' font-bold rounded-md px-4 py-2 text-lg border-2 border-solid bg-slate-200 hover:bg-gray-500 ' >Forget password</button>
               </Link>
               <button className=' font-bold rounded-md px-4 py-2 text-lg border-2 border-solid bg-slate-200 hover:bg-gray-500  '>Cancel</button>
             </div>
             <div className='text-xl  pt-3 text-center'>
               Already have an account? <Link to="/register" className='ps-3 text-blue-700 font-semibold'>Register</Link>
             </div>
           </div>
   
         </form>
   
   
       </div>
  );
}

export default Login;
