import React, { useState } from 'react'
import Links from './Links/Links'
import './Sidebar.scss'
import Togglebutton from './Togglebutton/Togglebutton'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variant = {
        open: {
            clipPath: "circle(1200px at 30px 30px)",
            transition: {
                type: "spring",
                stiffness: 20
            }
        },
        close: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                stiffness: 400,
                damping: 40,
                type: "spring"
            }
        }
    }
    return (
        <motion.div className='sidebar' animate={open ? "open" : "close"}>

            <motion.div className='bg' variants={variant}>
                <Links />
            </motion.div>
            <Togglebutton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar