import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import './AboutUs.css'
import { IoIosArrowForward} from "react-icons/io";
import Header01 from './Component/Header/Header01';
function AboutUs() {
    return (
        <div>
            <Header01 />
            <Header/>
            <div className="Heading_about">
                <p>ABOUT US</p>
                <hr/>
            </div>
            <div className="image_about">
                <p>We give huge discounts on electronic products. Here, we are on your side.</p>
                <img src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60" alt="HR"/>
            </div>
            <div className="mission_about">
                <p className="bold_about">Our Mission</p>
                <p className="detail_about_mission">SELLING BIG BRAND PRODUCTS AT CHEAPER PRICE WITH HIGH ASSURANCE.</p>
                <p className="bold_about">About</p>
                <p className="detail_about_mission">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellendus hic necessitatibus placeat neque, consequatur maiores possimus, labore ad sunt adipisci tempora dolorum, dicta deserunt error totam natus beatae? Molestiae obcaecati quae, veritatis nemo consectetur cumque neque eligendi itaque iure deleniti incidunt magnam asperiores rem atque earum voluptate, et culpa, quas quam adipisci corrupti. Nisi nulla voluptates magnam distinctio impedit!</p>
            </div>
            <button className="start_buying">Start shopping<IoIosArrowForward id="Arrow_buying" /></button>
            <div className="categories_black_about">
                <ul>
                    <li>Mobile Phones</li>
                    <li>Speakers</li>
                    <li>Washing Machine</li>
                </ul>
            </div>
            <div className="mission_about">
                <p className="detail_about_mission_1">To connect with us, see the <i><b><u>header</u></b></i>  to get the <u>email address</u> and the <u>phone number</u>. In case of emergency kindly give us a call, for enquiry please write a small mail about your issue and also provide your contact details. We are pretty excited to solve your problem.</p>
            </div>
            <button className="start_buying">Start shopping<IoIosArrowForward id="Arrow_buying" /></button>
            <Footer/>
        </div>
    )
}

export default AboutUs
