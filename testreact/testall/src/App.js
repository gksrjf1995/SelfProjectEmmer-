import './App.css';
import {useEffect, useState} from "react"
import {motion} from "framer-motion"


const Usewindsize = () => {
  const [size , setsize] = useState([window.innerWidth , window.innerHeight]);

  useEffect(()=>{
    const handleResize = () => {
      setsize([window.innerWidth , window.innerHeight])
    };
    
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener("resize",handleResize);
    }
  },[]);
  return size;
}


function App() {
  
 

  const result = Usewindsize();
  console.log(result);
 
  return (
    <div className="App">
      <motion.h1 animate={{x : 50}}>
         Hello
      </motion.h1>
    </div>
  );
}

export default App;
