
import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [showpass , setshowpass] = useState(false);

  const showpassword = (e) => {
    e.preventDefault();
    setshowpass(current=>!current)
  }
  return (
    <div className='flex justify-center items-center h-screen border-x-4 '>
       <div className='border-8 w-5/12 h-96 mx-4 p-9'>
        <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
             Create Sign with Login   
            </p>
            <form className='mt-4' onSubmit={(e)=>{}}>
            <div class="rounded-md shadow-sm -space-y-px ">
                <div className='flex items-center justify-center my-2'>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-5/12 items-center justify-center px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                </div>
                <div className='flex items-center relative justify-center my-2'>
                    <label for="password" class="sr-only">Password</label>
                    
                    <input id="password" name="password" type={showpass ? "password" : "text"} autocomplete="current-password" required class="appearance-none rounded-none relative block w-5/12 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                    <button className='hidden lg:block' onClick={(e)=>{showpassword(e)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="z-10 border-2 border-gray-500 h-5 w-5 absolute right-52 bottom-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    
                           
                </div>
                <div>
                    <input id="remember" name="remember" type={"checkbox"} className={"mt-5 mr-2"}/>
                    <label for="remeber">Remember me</label> 

                    <div className='flex flex-col  justify-center items-center'>
                        <button type="submit" class="mt-3 relative w-5/12 flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute   left-0 inset-y-0 flex items-center pl-3">
                                <svg class="h-5 w-5 text-indigo-500 hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        Sign in
                        </button>
                    </div>
                    
                </div>
            </div>
            </form>
            
        </div>
       </div>
    </div>
  )
}

export default Form