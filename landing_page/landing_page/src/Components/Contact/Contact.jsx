import React, { useEffect, useRef } from 'react'
import './Contact.css'
import Tittle from '../Tittle/Tittle'
import ScrollReveal from 'scrollreveal'
const Contact = () => {
    const headingRef = useRef()
    useEffect(() => {
        ScrollReveal().reveal(headingRef.current, {
            distance: '60px',
            duration: 1500,
            delay: 400,
            origin: 'bottom',
            interval: 10

        })
    }, [])
    return (
        <div id="contact" className='contact' ref={headingRef}>
            <div className="contact-container" >
                <Tittle tittle="Registration" />
                <h2>‍Ready to Elevate</h2>
                <h1>‍Your Cooking Skills?</h1>
                <p>Enroll now and begin your culinary journey!</p>
                <div className="contact-details">
                    <div className="username">
                        <div className="first-name">
                            <label for="Name" className='first-name'>First Name</label>
                            <br />
                            <input type='text' placeholder='James' required />
                        </div>
                        <div className="second-name">
                            <label for="Name" className='second-name'>Second Name</label>
                            <br />
                            <input type='text' placeholder='cook' required />
                        </div>
                    </div>

                    <label for="email" className='email'>Email Address</label>

                    <input type='email' placeholder="name@company.com" required />
                    <label for="number" className='phone'>Phone Number</label>

                    <input type='text' placeholder='+123 456 798 912' required />
                    <div className='checkbox-input' ><input type="checkbox" />Text me with news and offers</div>
                </div>
                <div >
                    <button className='button-20'>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact