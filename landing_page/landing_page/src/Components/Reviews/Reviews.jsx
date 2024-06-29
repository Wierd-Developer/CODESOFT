import React, { useEffect, useRef } from 'react'
import './Reviews.css'
import Tittle from '../Tittle/Tittle'
import ScrollReveal from 'scrollreveal'
const Reviews = () => {
    const slider = useRef()
    const headingRef = useRef()
    useEffect(() => {
        ScrollReveal().reveal(headingRef.current, {
            distance: '60px',
            duration: 1500,
            delay: 400,
            // opacity: 0.9,
            // origin: 'right',
            // scale: 1.5,
            // easing: 'ease-in-out',
            rotate: {
                x: 20,
                z: 20,
                y: 20
            }

        })
    })
    let tx = 0
    const rightClick = () => {
        if (tx > -66) {
            tx -= 11
        }
        slider.current.style.transform = `translateX(${tx}%)`


    }
    const leftClick = () => {
        if (tx < 0) {
            tx += 11
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div id='reviews' className='reviews'>
            <div className='reviews-container' ref={headingRef}>
                <Tittle tittle="REVIEWS" />
                <h1>Join the Thousands of  <span> Satisfied Students</span> </h1>
                <p>who have transformed their cooking abilities with our comprehensive course.</p>

            </div>
            <img className='left-arrow' onClick={leftClick} src="data:image/png;base64,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" alt="" />
            <img onClick={rightClick} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC6SURBVHgB7dnBDcIwDIXhF8QAHYHRykTtBqQTMAKzsAEbmFggFYRQLrVlq++TcsjtV5TkYoBWIjLoQgYt9NTWTVYTomuRV/l1QVTvK/FPzPBOdOjwOWt4ZbgnhntjuDeGe2O4N4Z720V40R3yqKWU8xG5jO2M79lOWj0OSChj9JLteiztIY6IQr+0zpdXEQmDrTHYGoOtMdgag60x2FrG4Clb8JAqWHWiK6KS72lt/GAlrzHz59R2xsae7fcM7OE7mG8AAAAASUVORK5CYII=" className='right-arrow' alt="" />
            <div className="slider">
                <ul ref={slider} >

                    <li>
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                1. Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible. I can now confidently prepare meals that rival those of my favorite restaurants
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f2187513819dd6c9b9e1_Profile%20Picture%201.webp" alt="" />
                                <div><h4>Sarah M.</h4>
                                    <h5>Project Manager</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li >
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                2. Culinary Essentials reignited my passion for cooking! The personalized feedback boosted my confidence, and now I create tasty and quality dishes at home regularly. Highly recommend!
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f217eac20ee31085dc67_Profile%20Picture%202.webp" alt="" />
                                <div><h4>Jim P.</h4>
                                    <h5>Digital Nomad</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li >
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                3. I've always loved cooking, but this course took my skills to a whole new level. The recipes are easy to follow, and the results are restaurant-quality every time. I've impressed my friends and family with dishes I never thought I could make!
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f218044f27db4355c153_Profile%20Picture%203.webp" alt="" />
                                <div><h4>Micheal W.</h4>
                                    <h5>Project Manager</h5>
                                </div>
                            </div>
                        </div>
                    </li>


                    <li >
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                4. Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible. I can now confidently prepare meals that rival those of my favorite restaurants
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f2187513819dd6c9b9e1_Profile%20Picture%201.webp" alt="" />
                                <div><h4>Sarah M.</h4>
                                    <h5>Project Manager</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li >
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                5. Culinary Essentials reignited my passion for cooking! The personalized feedback boosted my confidence, and now I create tasty and quality dishes at home regularly. Highly recommend!
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f217eac20ee31085dc67_Profile%20Picture%202.webp" alt="" />
                                <div><h4>Jim P.</h4>
                                    <h5>Digital Nomad</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li >
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                6. I've always loved cooking, but this course took my skills to a whole new level. The recipes are easy to follow, and the results are restaurant-quality every time. I've impressed my friends and family with dishes I never thought I could make!
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f218044f27db4355c153_Profile%20Picture%203.webp" alt="" />
                                <div>
                                    <h4>Michael W.</h4>
                                    <h5>IT Consultant</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                1Culinary Essentials changed the way I cook! The personalized feedback from professional chefs helped me improve faster than I ever thought possible. I can now confidently prepare meals that rival those of my favorite restaurants
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f2187513819dd6c9b9e1_Profile%20Picture%201.webp" alt="" />
                                <div><h4>Sarah M.</h4>
                                    <h5>Project Manager</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li >
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                2Culinary Essentials reignited my passion for cooking! The personalized feedback boosted my confidence, and now I create tasty and quality dishes at home regularly. Highly recommend!
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f217eac20ee31085dc67_Profile%20Picture%202.webp" alt="" />
                                <div><h4>Jim P.</h4>
                                    <h5>Digital Nomad</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li >
                        <div className="review-cards">
                            <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/660fdc9453c29f243a5eb5bb_qoute%20icon.svg" alt="" />
                            <p>
                                3I've always loved cooking, but this course took my skills to a whole new level. The recipes are easy to follow, and the results are restaurant-quality every time. I've impressed my friends and family with dishes I never thought I could make!
                            </p>
                            <div className="review-img">
                                <img src="https://assets-global.website-files.com/660d5429a4473c68763ee7e8/6617f218044f27db4355c153_Profile%20Picture%203.webp" alt="" />
                                <div>
                                    <h4>Michael W.</h4>
                                    <h5>IT Consultant</h5>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Reviews