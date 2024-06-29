import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const Spinner = ({ path = "login" }) => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preval) => --preval)
        }, 1000);

        count === 0 && navigate(`/${path}`, { state: location.pathname })

        return () => clearInterval(interval);

    }, [count, location, navigate, path])
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
            <h1>We are redirecting you in {count}</h1>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}

export default Spinner

// here we pass props as a path which indicates that when user try to access the admin dashboard then it won't redirect to the login page but it will redirect to the home page i.e `/${path}`