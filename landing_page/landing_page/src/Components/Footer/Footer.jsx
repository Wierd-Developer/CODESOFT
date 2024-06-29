import React, { useEffect, useRef } from 'react'
import './Footer.css'
import img2 from '../../Assets/image2.png'
import ScrollReveal from 'scrollreveal'
const Footer = () => {
    const headingRef = useRef()
    useEffect(() => {
        const interval = setInterval(() => {
            ScrollReveal().reveal(headingRef.current, {
                distance: '60px',
                duration: 1500,
                delay: 400,
                origin: 'right',


            })
            return () => { clearInterval(interval); }
        }, 5000)

    }, [])
    return (
        <div className='footer' >
            <div ref={headingRef}></div>
            <div className="left-footer" >
                <img className='logo' src={img2} alt="" />
                <h4>Email: <span>
                    info@culinaryessentials.com</span></h4>
                <h4>Phone: <span>
                    +1 (132) 456-7890</span></h4>
                <h4>Address: <span>
                    132 Main Street, City, State, Zip Code</span></h4>
                <p>Feel free to contact us via email or phone during our business hours:</p>
                <div className='social-img'>
                    <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617d39269617a61e4b7e818_facebook-fill-white.svg" alt="" />
                    <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617d3920ad13c50c2c154c0_instagram-fill-white.svg" alt="" />
                    <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617d392163902a81f2b0c12_tiktok-fill-white.svg" alt="" />
                    <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617d392163902a81f2b0c1b_linkedin-fill-white.svg" alt="" />
                </div>
            </div>
            <div className="right-footer">
                <div className="essentials">
                    <h3>Culinary Essentials</h3>
                    <h4>About</h4>
                    <h4>Course</h4>
                    <h4>Steps</h4>
                    <h4>Reviews</h4>
                    <h4>Instructors</h4>
                </div>
                <div className="resources">
                    <h3>Resources</h3>
                    <h4>Style Guide</h4>
                    <h4>Licenses</h4>
                    <h4>Changelog</h4>
                    <h4>Password</h4>
                </div>

            </div>
        </div>
    )
}

export default Footer