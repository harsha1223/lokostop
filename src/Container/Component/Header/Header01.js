import './Header01.css'
import { IoIosArrowDown, IoIosArrowForward, IoIosHeart } from "react-icons/io";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export class Header01 extends Component {
    render() {
        return (
            <div className="Header_one" >
                <div className="Header_one_left">
                    <div className="dropdown">
                        <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiMenu id="MenuIcon" />&nbsp;&nbsp; Browse categories
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Washing Machine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ForwardArrow' /></Link>
                                <ul className="dropdown-menu dropdown-submenu">
                                    <li>
                                        <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Heading 1</Link>
                                    </li>
                                    <li>
                                        <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Heading 1</Link>
                                    </li>
                                    <li>
                                        <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Heading 1</Link>
                                    </li>
                                    <li>
                                        <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Heading 1</Link>
                                    </li>
                                    <li></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
                
                <div className="Header_one_centre">
                    <div className="centre_first_part">
                        <div className="dropdown">
                            <button style={{ marginTop: '1.5%' }} className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                All categories
                            </button>
                            <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
                                <li><Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Washing Machine &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<IoIosArrowForward className='ForwardArrow' /></Link>
                                    <ul className="dropdown-menu dropdown-submenu">
                                        <li>
                                            <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Heading 1</Link>
                                        </li>
                                        <li>
                                            <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Heading 1</Link>
                                        </li>
                                        <li>
                                            <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Heading 1</Link>
                                        </li>
                                        <li>
                                            <Link style={{ background: 'transparent', color: '#1D1D1D', textAlign: 'center' }} className="dropdown-item" to="#">Heading 1</Link>
                                        </li>
                                        <li></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="centre_second_part">
                        <input type="text" placeholder="Enter your search key..." />
                    </div>
                    <div className="centre_third_part">
                        <p style={{ marginTop: '0.878vw' }}>Search</p><FiSearch id='search' />
                    </div>
                </div>


                <div className="Header_one_right">
                    <div className="Favorites"><IoIosHeart id='Heart' /><span id="count">0</span><p>Favorites</p></div>
                    <Link to='/Cart'><div style={{ color: '#1D1D1D' }} className="cart"><FiShoppingCart id='Cart' /><span id="count">0</span><p>Cart</p></div></Link>
                    <div className="image_user"><img style={{ cursor: 'pointer' }} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60"></img></div>
                </div>
            </div>
        )
    }
}

export default Header01
