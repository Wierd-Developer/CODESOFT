import React, { useEffect, useRef } from 'react'
import './About.css'
import Tittle from '../Tittle/Tittle'
import ScrollReveal from 'scrollreveal'
const About = () => {
    const headingRef = useRef()
    useEffect(() => {
        ScrollReveal().reveal(headingRef.current, {
            distance: '60px',
            duration: 2500,
            delay: 400,
            easing: 'ease-in'

        })
    })
    return (
        <div id="about" className="about" ref={headingRef}>
            <div className="wrapper">
                <div className="about-img">
                    <img src={"https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6618eb4b94d2461923e5811b_hoja-studio-Thw3nleO3cM-unsplash.webp"} alt="" />
                </div>
                <div className="about-details">
                    <div className="about-tittle">
                        <Tittle tittle="ABOUT US" />
                        <h1>Master the Art of <span>Cooking at Home</span></h1>
                        <p>Welcome to "Culinary Essentials: From Home Cook to Home Chef," where we're on a mission to empower aspiring chefs like you to create extraordinary dishes right from the comfort of your own kitchen.</p>
                    </div>
                    <div className="div-cards">
                        <div className="tittle-cards">
                            <img src={"https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660e6a1de8131d537239edef_bowl-fill.svg"} alt="" />
                            <Tittle tittle="Personalized Feedback" />
                            <p className="card-description">Get personalized guidance from professional chefs to hone your skills.</p>
                        </div>
                        <div className="tittle-cards">
                            <img src={"https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660e6a1d73ed3f9b27418145_time-fill.svg"} alt="" />
                            <Tittle tittle="Flexible Learning" />
                            <p className="card-description">Access videos, recipes, and resources anytime, anywhere.</p>
                        </div>
                        <div className="tittle-cards"><img src={"https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6613e9bb1d80b7a663b08f94_emotion-2-fill.svg"} alt="" />
                            <Tittle tittle="Community Connection" />
                            <p className="card-description">Join our online community to share experiences and cooking tips.</p>
                        </div>
                        <div className="tittle-cards">
                            <img src={"https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660e6a1de48e31df7a3ae823_verified-badge-fill.svg"} alt="" />

                            <Tittle tittle="Expert-Led Instruction" />
                            <p className="card-description">Gain insider tips and techniques to become a confident home chef.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About