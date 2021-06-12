import React from 'react'
import './Header01.css'
import { IoIosArrowDown, IoIosArrowForward, IoIosHeart } from "react-icons/io";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
function Header01() {
    return (
            <div className="Header_one" >
                <div className="Header_one_left">
                    <div className="Selected">
                        <FiMenu id="MenuIcon" />
                        <p>Browse categories</p>
                        <IoIosArrowDown id="ArrowIcon" />
                    </div>
                    <div className="dropdown_list">
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                        <div className="dropdown_list_items">Heading 1 <IoIosArrowForward className='ForwardArrow' /></div>
                    </div>


                </div>
                <div className="Header_one_centre">
                    <div className="centre_first_part">
                        <div className="Selected1">
                            <p style={{marginTop:'0.732vw'}}>All categories</p> <IoIosArrowDown id="ArrowIcon1" />
                        </div>
                        <div className="dropdown_list_categories">
                            <div className="dropdown_list_items">Category 1 </div>
                            <div className="dropdown_list_items">Category 1 </div>
                            <div className="dropdown_list_items">Category 1 </div>
                            <div className="dropdown_list_items">Category 1 </div>
                            <div className="dropdown_list_items">Category 1 </div>
                            <div className="dropdown_list_items">Category 1 </div>
                            <div className="dropdown_list_items">Category 1 </div>
                            <div className="dropdown_list_items">Category 1 </div>
                        </div>
                    </div>
                    <div className="centre_second_part">
                        <input type="text" placeholder="Enter your search key..." />
                    </div>
                    <div className="centre_third_part">
                        <p style={{marginTop:'0.878vw'}}>Search</p><FiSearch id='search' />
                    </div>
                </div>
                <div className="Header_one_right">
                    <div className="Favorites"><IoIosHeart id='Heart' /><span id="count">0</span><p>Favorites</p></div>
                    <Link to='/Cart'><div style={{color:'#1D1D1D'}} className="cart"><FiShoppingCart id='Cart' /><span id="count">0</span><p>Cart</p></div></Link>
                    <div className="image_user"><img style ={{cursor:'pointer'}} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></div>
                </div>
            </div>
    )
}

export default Header01
