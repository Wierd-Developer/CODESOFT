import React, { useEffect, useRef } from 'react'
import '../Hero/Hero.css'
import Layout from '../Layout'
import { FaLongArrowAltRight } from "react-icons/fa";
import scroll from '../../Assets/scroll.png'
import About from '../Aboutus/About';
import Course from '../Course/Course';
import Steps from '../Steps/Steps';
import Reviews from '../Reviews/Reviews';
import List from '../list/List';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import scrollreveal from 'scrollreveal'
const Hero = () => {
    const headingRef = useRef()
    useEffect(() => {
        scrollreveal().reveal(headingRef.current, {
            distance: '60px',
            duration: 2500,
            delay: 400,
            origin: 'bottom',

        })
    }, [])
    return (
        <Layout>

            <div className='hero-section ' ref={headingRef}>
                <h6 >Welcome to Culinary Essentials</h6>
                <h1>From Home Cook to </h1>
                <h1 style={{ color: "#ff6a3b", fontStyle: "italic", fontWeight: "900" }}>Home Chef </h1>
                <p style={{ fontSize: "1.2rem", letterSpacing: "1.2px", fontWeight: 400 }}>Transform Cooking Skills & Elivate Your Culinary Journey</p>
                <button className='button-20' >Explore{<FaLongArrowAltRight style={{ fontSize: '20px', marginLeft: "5px" }} />}
                </button>

                <div className='scroll-img'>
                    <img src={scroll} alt="" />
                </div>
            </div>
            <About />
            <Course />
            <Steps />
            <Reviews />
            <Contact />
            <Footer />
        </Layout>
    )
}

export default Hero