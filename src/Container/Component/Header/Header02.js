import './Header02.css'
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export class Header02 extends Component {
    render() {
        return (
            <div className="Header_two">
            <div className="logo"></div>
            <div className="navbar">
                <ul>
                    <Link to="/"><li>
                        <div class="drop">
                            <button class="dropbtn1">Home</button>
                            <div class="dropdown-content1">
                                <Link to="#">Washing Machine</Link>
                                <Link to="#">Link 2</Link>
                                <Link to="#">Link 3</Link>
                            </div>
                        </div>
                    </li></Link>
                    {/* <a href="#"><li>New Arrivals</li></a> */}
                    <Link to='/aboutUs'><li>About us</li></Link>
                    <Link to='/sendquery'><li>Send query</li></Link>
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
}

export default Header02
