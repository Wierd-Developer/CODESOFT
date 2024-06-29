import React from 'react'
import './Navbar.scss'
import youtube from './../Assets/youtube.png'
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';


const Navbar = () => {
    return (
        <div className='Navbar'>
            <Sidebar />
            <div className="wrapper">
                <span style={{ fontSize: "20px" }}><b>SATPALCODER</b></span>
                <div className="social">
                    <a href="#"><FaYoutube size={35} color='white' /></a>
                    <a href="#"><FaLinkedin size={30} color='white' /></a>
                    <a href="#"><FaInstagram size={30} color='white' /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar