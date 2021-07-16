import './Header02.css'
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import {connect} from 'react-redux'

class Header02 extends Component {
    render() {
        return (
            <div className="Header_two">
            <div className="logo"></div>
            <div className="navbar">
                <ul>
                    <Link  to="/"><li>Home</li></Link>
                    <Link to="/"><li>
                        <div className="drop">
                            <button className="dropbtn1">Dropdown</button>
                            <div className="dropdown-content1">
                                <p>Washing Machine</p>
                                <p>Link 2</p>
                                <p>Link 3</p>
                            </div>
                        </div>
                    </li></Link>
                    <Link to='/aboutUs'><li>About us</li></Link>
                    <Link to='/sendquery'><li>Send query</li></Link>
                    <Link to='/profile'><li>Complaint</li></Link>
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
const mapStateToProps = state =>{
    return {
        menus: state.getMenus.menus
    }
}
export default connect(mapStateToProps)(Header02)
