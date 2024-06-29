import React from 'react'
import './Hero.scss'
import hero from './../Assets/IT.png'
import scrollimg from './../Assets/scroll.png'
import { motion } from 'framer-motion'

const Hero = () => {

    const textVariant = {
        initial: {
            x: -500,
            // y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            // y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },

        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const sliderText = {
        initial: {
            x: 0,

        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                duration: 20,
                repeatType: "mirror",
            }
        },
    }
    return (
        <div div className="Hero-section">
            <div className="wrapper">
                <motion.div className="Text-container" variants={textVariant} initial="initial" whileInView="animate" >
                    <motion.h2 variants={textVariant}>SATPAL CODER</motion.h2>
                    <motion.p variants={textVariant}>A web developer and UI designer</motion.p>
                    <motion.div className="text-button" variants={textVariant}>
                        <motion.button className='btn' variants={textVariant}> Latest Content</motion.button>
                        <motion.button className='btn2' variants={textVariant}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img id='scrollpng' src={scrollimg} alt="" variants={textVariant} animate="scrollButton" />
                </motion.div>
                <motion.div className="text-slider" variants={sliderText} initial="initial" animate="animate">
                    You don't have to be extreme. Just Consistent
                </motion.div>
                <div className="image-container">
                    <img src={hero} alt="" height={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero