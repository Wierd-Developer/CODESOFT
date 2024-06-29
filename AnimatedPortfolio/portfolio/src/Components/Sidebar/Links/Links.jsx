import React from 'react'
import { motion } from 'framer-motion'
const Links = () => {
    const variant = {
        open: {
            transition: {
                staggerChildren: 0.1,
                stiffness: 50
            },
        },
        close: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
                stiffness: 50

            }
        }
    }
    const itemVariant = {
        open: {
            y: 0,
            opacity: 1
        },
        close: {
            y: 50,
            opacity: 0
        }
    }
    const link = ["Home", "Services", "Portfolio", "Contact", "About"]
    return (
        <motion.div className='links' variants={variant}>
            {link.map((l) => (

                <motion.a href={`#${l}`} variants={itemVariant} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>{l}</motion.a>
            ))}
        </motion.div>
    )
}

export default Links