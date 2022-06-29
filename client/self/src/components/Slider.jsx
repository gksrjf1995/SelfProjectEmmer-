import React from 'react'
import {motion} from "framer-motion"
import images from "../images/images"
import one from "../images/image1.png"

const Slider = () => {

console.log(images);    
  return (
    <motion.div className='carousel'>
        <motion.div className='inner-carousel'>
            {images.map((item)=>{
                return <motion.div  className='item'>
                    <img src={item} alt={"이미지"}/>
                </motion.div>
            })}

            
        </motion.div>
    </motion.div>
  )
}

export default Slider