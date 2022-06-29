import React  , { useEffect , useState }from 'react'
import { Menu , Transition } from "@headlessui/react"

const ResizeScreen = () => {
  const [screen , setscreen] = useState([window.innerWidth , window.innerHeight]);
  
  useEffect(()=>{
    const handleResize = () => {
      setscreen([window.innerWidth , window.innerHeight]);
    }
    
    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[]);

  return screen 

}


const Navbar = () => {
  const [open , setopen] = useState(true);
  
  const result = ResizeScreen();
  
  const openmenu = (e) => {
    if(result[0] > 768 ) {
      return setopen(true);
    }
    setopen(current=>!current);
    console.log(open);
  }
  
  return (
    <nav class="bg-green-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="mobile-menu" type="button" class="relative inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" onClick={(e)=>openmenu(e)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
    </button>
    <div className={`${open ? "z-10"  : "-z-10"}  ${result[0] < 767 ? "absolute top-10 left-0 bottom-0 right-0" : ""} w-full md:block md:w-auto`} id="mobile-menu">
      <ul class={`${open ? `flex` : `hidden`} ${result[0] < 768 ? `flex` : ""} flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium`}>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 font-extrabold text-gray-700 hover:bg-slate-600 border-b border-gray-100 hover:text-white first-line: md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
        </li>
        <li> 
          <a href="#" class="block py-2 pr-4 pl-3 font-extrabold text-gray-700 hover:bg-slate-600 border-b border-gray-100 hover:text-white first-line: md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 font-extrabold text-gray-700 hover:bg-slate-600 border-b border-gray-100 hover:text-white  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 font-extrabold text-gray-700 hover:bg-slate-600 border-b hover:text-white border-gray-100    md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pr-4 pl-3 font-extrabold text-gray-700 hover:bg-slate-600 border-b hover:text-white border-gray-100    md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)}

export default Navbar