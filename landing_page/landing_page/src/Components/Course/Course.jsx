import React, { useEffect, useRef } from 'react'
import './Course.css'
import ScrollReveal from 'scrollreveal'
import Tittle from '../Tittle/Tittle'
const Course = () => {
    const headingRef = useRef()
    useEffect(() => {

        ScrollReveal().reveal(headingRef.current, {
            distance: '60px',
            duration: 1500,
            delay: 400,
            // opacity: 0.9,
            // origin: 'right',
            scale: 0.85,
            easing: 'ease-in-out'
            // rotate: {
            //     x: 20,
            //     z: 20,
            //     y: 20
            // }

        })

    }, [])
    return (
        <div className='courses'>
            <div className="container-card">
                <div className="course-description">
                    <Tittle tittle="COURSE" />
                    <h1><span >Ready to Elevate Your</span> Cooking Experience?</h1>
                    <p>Our course is designed to address the common pain points that home cooks face, from recipe fatigue to lack of confidence in the kitchen. Let us help you overcome these challenges and unlock your full potential as a chef.

                    </p>
                </div>
                <div className="course-card" ref={headingRef}>
                    <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f2183b78ce633fd4418d_ella-olsson-KPDbRyFOTnE-unsplash.webp" alt="" />
                    <div className='card-info' >
                        <Tittle tittle="ONLINE COURSE" />
                        <h1>Culinary Essentials</h1>
                        <p>From Home Cook to Home Chef</p>
                        <div className="lessons">
                            <div>
                                <Tittle tittle="25" />
                                <p>Lessons</p>
                            </div>
                            <div>
                                <Tittle tittle="4" />
                                <p>Instructors</p>
                            </div>
                            <div>
                                <Tittle tittle="300" />
                                <p>Recipes</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-btn'>
                        <h4>$ 55.00 USD </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course