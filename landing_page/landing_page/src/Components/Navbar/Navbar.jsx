import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import img2 from '../../Assets/image2.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
    const [show, setShow] = useState(true)
    const onClickMenu = () => {
        show ? setShow(false) : setShow(true)
        console.log(`show ${show}`)
    }
    return (
        <nav className='Navbar container'>

            <div className='nav-logo'>
                <Link to={"/"}><img src={img2} alt="" /></Link>
            </div>

            <ul className={show ? "hide-menu" : "light"}>
                <HashLink to={"#about"}><li>About</li></HashLink>
                <HashLink to={"#reviews"}><li>Review</li></HashLink>
                <Link><li>Instructors</li></Link>
                <Link><li>FAQs</li></Link>

                <li>
                    <HashLink to={"#contact"}><button className='button-20'>
                        Enroll Now
                    </button></HashLink>
                </li>

            </ul>
            <div className="side-bar">
                {/* <RxHamburgerMenu className={show ? "dark" : "light"} onClick={onClickMenu} style={{ fontSize: "40px", margin: "auto 0px" }} /> */}
                {show ? (<RxHamburgerMenu className={show ? "dark" : "light"} onClick={onClickMenu} style={{ fontSize: "38px", margin: "1px 20px " }} />)
                    :
                    (<RxCross1 className={show ? "dark" : "light"} onClick={onClickMenu} style={{ fontSize: "30px", margin: "auto " }} />)}
            </div>

        </nav >


    )
}

export default Navbar