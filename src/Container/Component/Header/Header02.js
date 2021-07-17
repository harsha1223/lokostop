import './Header02.css'
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { IoIosArrowForward, IoIosHeart } from "react-icons/io";
class Header02 extends Component {
    render() {
        return (
           <div className="Header_two">
            <div className="logo"></div>
            <div className="navbar">
                <ul>
                    <Link to="/"><li className="navli">
                    <div class="dropdown" >
                        <button style= {{fontWeight:'bold'}}class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                             Home
                        </button>
                        <ul class="dropdown-menu" s aria-labelledby="dropdownMenuButton1">
                            <li><Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} class="dropdown-item" to="#">Washing Machine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ForwardArrow' /></Link>
                                <ul class="dropdown-menu dropdown-submenu">
                                    <li>
                                        <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} class="dropdown-item" to="#">Heading 1</Link>
                                    </li>
                                    <li>
                                        <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} class="dropdown-item" to="#">Heading 1</Link>
                                    </li>
                                    <li>
                                        <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} class="dropdown-item" to="#">Heading 1</Link>
                                    </li>
                                    <li>
                                        <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} class="dropdown-item" to="#">Heading 1</Link>
                                    </li>
                                    <li></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                        {/* <div className="drop">
                            <button className="dropbtn1">Home</button>
                            <div className="dropdown-content1">
                                <p>Washing Machine</p>
                                <p>Link 2</p>
                                <p>Link 3</p>
                            </div>
                        </div> */}
                    </li></Link>
                    <Link to='/aboutUs'><li className="navli">About us</li></Link>
                    <Link to='/sendquery'><li className="navli">Send query</li></Link>
                    <Link to='/profile'><li className="navli">Complaint</li></Link>
                    <Link to="/blogs"><li className="navli">Blogs</li></Link>
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
