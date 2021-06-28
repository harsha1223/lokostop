import React from 'react'
import './Header02.css'
import { MdLocalPhone, MdEmail } from "react-icons/md";
import {Link} from 'react-router-dom'
function Header02() {
    return (
            <div className="Header_two">
                <div className="logo"></div>
                <div className="nav">
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        {/* <a href="#"><li>New Arrivals</li></a> */}
                        <Link to='/aboutUs'><li>About us</li></Link>
                        <a href="#"><li>Send query</li></a>
                        <a href="#"><li>Complaint</li></a>
                        <Link to="/blogs"><li>Blogs</li></Link>
                    </ul>
                </div>
                <div className="Header_two_part3">
                    <div className="mobile_part">
                        <p>+91-9898989898</p>
                        <MdLocalPhone id='phone' />
                    </div>
                    <div className="email_part">
                        <p>sidhuelectronics1@gmail.com</p>
                        <MdEmail id='mail' />
                    </div>
                </div>
            </div>
    )
}

export default Header02