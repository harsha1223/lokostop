import React from 'react'
import './Header03.css'
import { IoIosArrowDown } from "react-icons/io";
function Header03() {
    return (
        <div className="Header_three">
            <div className="header_three_left">
                <p style={{marginTop:'11px'}}>Brands:</p>
                <div className="small_logo_box">
                    <div className="small_box_inside_box">
                        
                    </div>
                </div>
            </div>
            <div className="header_three_center">

            </div>
            {/* <div className="header_three_right">
                <div className="mail">
                    <p style={{marginTop:'7px'}}>SignIn / SignUp</p>
                    <IoIosArrowDown id="Header3Icon" />
                </div>
                <div className="image_user"><img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></div>
            </div> */}
        </div>

    )
}

export default Header03
