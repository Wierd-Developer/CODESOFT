import React from 'react'
import './Steps.css'
import Tittle from '../Tittle/Tittle'
const Steps = () => {
    return (
        <div className='steps'>
            <div className='steps-container'>
                <Tittle tittle="STEPS" />
                <h1>Unlock Your Culinary Potencial <span>Today</span> </h1>
                <p>Enroll now and start your journey to culinary excellence!</p>
                <button className='button-20'>Enroll Now</button>
            </div>
        </div>
    )
}

export default Steps