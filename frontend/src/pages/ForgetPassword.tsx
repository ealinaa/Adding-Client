

const ForgetPassword = () => {
  return (
<div className=" w-5/6 mx-auto " >
 
 <form className='shadow-md  flex flex-col items-center justify-center w-full' style={{ height: '100vh' }}>
    
   <div className=' w-full lg:w-1/2  border-2 border-solid border-slate-200 ps-3 pr-4 '>
     <h1 className='text-3xl font-bold text-center pb-4 pt-4 underline'>Forget Password</h1>
     
     <div className='pb-4  text-2xl font-semibold flex justify-between'>
       <label htmlFor="email" >Email</label>
       <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md  w-5/6' name='email' id='email' />
       
     </div>
     <div className='pb-4 '>
     <button className='font-bold text-xl border-2  border-white bg-slate-200 hover:bg-cyan-200 p-2 rounded-lg'>
        Send password resent link
        

     </button>
     </div>
    
    
   </div>

 </form>

</div>
  )
}

export default ForgetPassword