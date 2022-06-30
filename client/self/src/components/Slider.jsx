import React , {useState , useRef} from 'react'
import {motion} from "framer-motion"
import images from "../images/images"
import { useEffect } from 'react';


const Slider = () => {

const  [width , setwidth] = useState();

const carousel = useRef();

useEffect(()=>{
  console.log(carousel);
  console.log(carousel.current.scrollWidth , carousel.current.offsetWidth);
  setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
},[]);
  
  return (
    <motion.div ref={carousel} className='carousel'>
        <motion.div drag={"x"} whileTap={{ cursor :  "grabbing"}} dragConstraints = {{right : 0  ,left : -width}} className='inner-carousel'>
            {images.map((item)=>{
                return <motion.div   className='item'>
                    <img  src={item} alt={"이미지"}/>
                </motion.div>
            })}   
        </motion.div>
    </motion.div>
  )
}

export default Slider