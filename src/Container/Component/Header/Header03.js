import React from 'react'
import './Header03.css'
import { IoIosArrowDown } from "react-icons/io";
function Header03() {
    return (
        <div className="Header_three">
            <div className="header_three_left">
                <p style={{marginTop:'0.805vw'}}>Brands:</p>
                <div className="small_logo_box">
                    <ul>
                        <li><img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/Snapchat/Snapchat-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/Snapchat/Snapchat-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/McDonald's/McDonald's-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/McDonald's/McDonald's-Logo.wine.svg" alt="" /></li>
                        <li><img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="header_three_center">
                <ul>
                    <li>Microwave</li>
                    <li>Washing Machine</li>
                    <li>Mobile & Tablet</li>
                    <li>Refrigerators</li>
                    <li>Television</li>
                    <li>Headphone</li>
                    <li>phone</li>
                    <li>Speaker</li>
                </ul>

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
