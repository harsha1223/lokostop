import React from 'react'
import { IoIosArrowDown, IoIosArrowForward, IoIosHeart } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import {Link} from 'react-router-dom'
function FindByCategory() {
    return (
        <div>
            <div className="find_by_category_box">
                <p className="most_viewd_text">Find by category</p>
                <hr id="line_category"></hr>

            </div>
            <div className="category_box">
                <p className="offers">Open category and sort according to your preferences. Unveil offers.</p>
                <div className="category_names">
                    <p style={{marginTop:'1.098vw'}} className='particular_cat'>Mobile & Tablet</p>
                    <p className='particular_cat'>Washing Machine</p>
                    <p className='particular_cat'>Mobile & Tablet</p>
                   

                </div>
                <p className="or">OR</p>
                <div className="category_Search">
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
                    <div className="centre_first_part">
                    <div className="drop">
                            <button className="dropbtn1" style={{marginTop:'0.5vw' , marginLeft:'2vw'}}>Brand</button>
                            <div style={{left:'-1vw'}} className="dropdown-content1">
                                <Link to="#">Washing Machine</Link>
                                <Link to="#">Link 2</Link>
                                <Link to="#">Link 3</Link>
                            </div>
                        </div>
                        {/* <div className="Selected_brand">
                            <p style={{marginTop:'0.805vw'}}>Brand</p> <IoIosArrowDown id="ArrowIcon1" />
                        </div>
                        <div className="dropdown_list_categories">
                            <div className="dropdown_list_items">Brand 1 </div>
                            <div className="dropdown_list_items">Brand 2 </div>
                            <div className="dropdown_list_items">Brand 3 </div>
                            <div className="dropdown_list_items">Brand 4 </div>
                            <div className="dropdown_list_items">Brand 5 </div>
                            <div className="dropdown_list_items">Brand 6 </div>
                            <div className="dropdown_list_items">Brand 7 </div>
                            <div className="dropdown_list_items">Brand 8 </div>
                        </div> */}
                    </div>
                    <div className="centre_second_part">
                        <input type="text" placeholder="Budget (approximate)" />
                    </div>
                    <div className="find_icon">
                        <p style={{marginTop:'0.805vw'}}>Find</p><FiSearch id='search' />
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default FindByCategory
