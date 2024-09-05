

const CreateClient = () => {
  return (
    <>
    <div className="w-5/6 mx-auto">
        
    <form className=' flex flex-col items-center justify-center w-full' style={{ height: '100vh' }}>
    <div className=' w-full lg:w-1/2 border-2 border-solid border-slate-300 p-4  '>
             <h1 className='text-3xl font-bold text-center pb-4 pt-4 underline'>Adding Client</h1>
             
             <div className='pb-3  text-xl font-semibold flex justify-between'>
               <label htmlFor="username " >Username</label>
               <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-3/4' name='username' id='username' placeholder="write your username" required/>
             </div>

             <div className='pb-3  text-xl font-semibold flex justify-between'>
               <label htmlFor="email" >Email</label>
               <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-3/4 ' name='email' id='email' placeholder="write your email" required/>
             </div>
           
             {/* <div className='pb-3  text-2xl font-semibold flex justify-between'>
               <label htmlFor="phonenumber " >PhoneNumber</label>
               <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5 sm:w-4/5' name='phonenumber' id='phonenumber' placeholder="Write your phone number" required/>
             </div> */}

<div className=' ram pb-3  text-xl  font-semibold flex justify-between'>
               <label htmlFor="phonenumber " >PhoneNumber</label>
               <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md  w-3/5 sm:w-3/4 ' name='phonenumber' id='phonenumber' placeholder="Write your phone number" required/>
             </div>
             
             <div className='pb-3  text-xl font-semibold flex justify-between'>
               <label htmlFor="address " >Address</label>
               <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5  sm:w-3/4' name='address' id='address' placeholder="Write your address" required/>
             </div>

             <div className='pb-3  text-xl font-semibold flex justify-between'>
               <label htmlFor="remarks" >Remarks</label>
               <input type="text" className=' border-2 border-zinc-300 p-2 rounded-md w-3/5  sm:w-3/4' name='remarks' id='remarks' placeholder="write your remarks" required/>
             </div>
             <div className="text-center space px-4 pt-4 pb-3">

             <button className=' font-bold rounded-md px-16 py-2 text-lg border-2 border-solid bg-slate-200 hover:bg-gray-500 '  >Add Client</button>
             </div>

                </div>
               

            </form>
        </div>
    
    </>
  )
}

export default CreateClient