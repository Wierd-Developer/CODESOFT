import React, { useState } from 'react'
import './../Components/Test.scss'
import { motion } from 'framer-motion'
const Test = () => {
    const [open, setOpen] = useState(false)
    const variant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    return (
        <div className='course' >
            <motion.div className='box' variants={variant} initial="hidden" animate={open ? "visible" : "hidden"} transition={{ duration: 2 }}>
            </motion.div>
            <button onClick={() => setOpen(prev => !prev)}>button</button>
        </div>
    )
}

export default Test
{/* <motion.div className='box' animate={{ opacity: 0.5, scale: 0.5 }} transition={{ duration: 2 }} whileInView={{ opacity: 1, scale: 2 }}></motion.div> */ }