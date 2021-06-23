import Header from './Component/Header/Header'
import { FaShippingFast, FaRegClock, FaRegStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { MdSettingsBackupRestore, MdPayment } from "react-icons/md";
import './Home.css'
import Footer from './Component/Footer/Footer';
import FindByCategory from './Component/FindByCategory';
import PopularCategories from './Component/PopularCategories';
import Product from './Component/Product';
import Header01 from './Component/Header/Header01';
import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header01></Header01>
                <Header></Header>
                <div className="video_container">
                    <img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3MlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                </div>
                <div className="Free_box">
                    <div className="Free_Shipping">
                        <FaShippingFast id="shipping_Icon" />
                        <div className="shipping_text">
                            <p className="shipping_text1">Free shipping</p>
                            <p className="shipping_text2">On orders over Rs. 30,000</p>
                        </div>
                    </div>
                    <div className="Free_return">
                        <MdSettingsBackupRestore id="shipping_Icon" />
                        <div className="shipping_text">
                            <p className="shipping_text1">Free returns</p>
                            <p className="shipping_text2">Returns are free within 9 days</p>
                        </div>
                    </div>
                    <div className="Secure_payment">
                        <MdPayment id="shipping_Icon" />
                        <div className="shipping_text">
                            <p className="shipping_text1">100% Secure Payments</p>
                            <p className="shipping_text2">Your payment are safe with us</p>
                        </div>
                    </div>
                    <div className="Support">
                        <FaRegClock id="shipping_Icon" />
                        <div className="shipping_text">
                            <p className="shipping_text1">Support 24/7</p>
                            <p className="shipping_text2">Contact us 24 hours a day</p>
                        </div>
                    </div>
                </div>
                <div className="new_Arrivals">
                    <p className="new_Arrival_text">New Arrivals</p>
                    <hr id="line_1"></hr>
                    <div className="list_names">
                        <ul>
                            <li>Washing Machines</li>
                            <li>Mobile Phones</li>
                            <li>Kitchen Appliances</li>
                            <li>Laptop & Printer</li>
                        </ul>
                    </div>
                    <div id="arrow_box">
                        <IoIosArrowBack id="Arrow_forward" />
                        <IoIosArrowForward id="Arrow_backward" />
                    </div>
                </div>
                <div className="new_arrival_box">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />

                </div>
                <div className="most_view_box">
                    <p className="most_viewd_text">Most Viewed Products</p>
                    <hr id="line_view"></hr>
                    <div id="arrow_box">
                        <IoIosArrowBack id="Arrow_forward" />
                        <IoIosArrowForward id="Arrow_backward" />
                    </div>
                </div>
                <div className="most_viewed_compare">
                    <div className="image_box_second_one">
                        <img src="https://images.unsplash.com/photo-1583172747862-afcb755ebd13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="RELOAD" />
                        <p className='discount_one'>10% off</p>
                    </div>
                    <div className="comparing_products_details">
                        <p className="compare_product_details_cat">WASHING MACHINE</p>
                        <p className="detail_of_product_comparing">LG 6.5kg 5 Star Smart Inverter Fully-Automatioc Top loading Washing Machine(T65SKSF4Z)</p>
                        <div className="rating_product">
                            <div className="star">
                                <FaRegStar id="star_feature" />
                                <FaRegStar id="star_feature" />
                                <FaRegStar id="star_feature" />
                                <FaRegStar id="star_feature" />
                                <FaRegStar id="star_feature" />
                            </div>
                            <p className="text_rating">3.0 (4 Ratings)</p>
                        </div>
                        <div className="rating_product">
                            <p className="mrp_text">MRP:</p>
                            <p className="price_of_the_product">Rs 25,000</p>
                        </div>
                        <div className="price_box_discount">
                            <p className="our_price_text">Our Price:</p>
                            <p className="price_of_the_product_after_discount">Rs 22,000</p>
                        </div>
                        <div className="discount_box_in_compare">
                            <p className="discount_text_product"> Discount:</p>
                            <p className="how_much_discount" style={{ paddingBottom: '1.903vw' }}>10% off</p>
                        </div>
                        <div className="save_box">
                            <p className="save_text">You save:</p>
                            <p className="discount_amount">Rs 3,000</p>
                        </div>
                        <div className="save_box">
                            <p className="delivery_text">Delivery in:</p>
                            <p className="time_delivery">10 days after ordering</p>
                        </div>
                        <div className="save_box">
                            <p className="color_text"> Color:</p>
                            <select className="dropdown_colors" >
                                <option value="WH">White</option>
                                <option value="BL">Black</option>
                            </select>
                        </div>
                        <div className="buttons_compare">
                            <button className="cart_button" >ADD TO CART <BiCart style={{
                                // color: 'white',
                                marginLeft: '0.952vw',
                                marginTop: '0.512vw',
                                fontSize: '1.3vw'
                            }} /></button>
                            <button className="compare_button">COMPARE</button>
                        </div>
                        <p className="view_details">View details</p>
                    </div>
                    <div className="image_box_second">
                        <img src="https://images.unsplash.com/photo-1583172747862-afcb755ebd13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="RELOAD" />
                        <p className='discount_one'>10% off</p>
                    </div>

                </div>
                <FindByCategory />
                <div className="find_by_category_box">
                    <p className="most_viewd_text">New arrivals</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="advert_image"><img src="https://i.pinimg.com/originals/37/44/42/374442641969a8df7e783978e169d580.jpg" alt=""></img></div>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">BEST SELLING</p>
                    <hr id="line_category"></hr>
                </div>
                <div className='category_dash_outer_box'>
                    <div className="category_dash">
                        <div className="particular_category_choice">
                            <p>Air conditioner</p>
                            <hr id="line_for_particular_box_category"></hr>
                            <div id="arrow_box_1">
                                <IoIosArrowBack id="Arrow_forward" />
                                <IoIosArrowForward id="Arrow_backward" />
                            </div>
                        </div>
                        <Product />
                    </div>
                    <div className="category_dash">
                        <div className="particular_category_choice">
                            <p>LED Television</p>
                            <hr id="line_for_particular_box_category"></hr>
                            <div id="arrow_box_1">
                                <IoIosArrowBack id="Arrow_forward" />
                                <IoIosArrowForward id="Arrow_backward" />
                            </div>
                        </div>
                        <Product />
                    </div>
                    <div className="category_dash">
                        <div className="particular_category_choice">
                            <p>Microwave</p>
                            <hr id="line_for_particular_box_category"></hr>
                            <div id="arrow_box_1">
                                <IoIosArrowBack id="Arrow_forward" />
                                <IoIosArrowForward id="Arrow_backward" />
                            </div>
                        </div>
                        <Product />
                    </div>
                    <div className="category_dash">
                        <div className="particular_category_choice">
                            <p>Accessories</p>
                            <hr id="line_for_particular_box_category"></hr>
                            <div id="arrow_box_1">
                                <IoIosArrowBack id="Arrow_forward" />
                                <IoIosArrowForward id="Arrow_backward" />
                            </div>
                        </div>
                        <Product />
                    </div>
                </div>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">Our top clients</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="clients_name">
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>
                    <img className='client_icon' src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvZ29zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD"></img>



                </div>
                <p className="para_client">We provide our clients with bulk buying for their desired amount. See what our biggest clients have to say about us below.</p>
                <button className="start_buying">Start bulk buying<IoIosArrowForward id="Arrow_buying" /></button>
                <div className="images_box">
                    <div className="image_1_container">
                        <div className="image_1_upper">
                            <p className='image1_para1' style={{ marginTop: '3.880vw' }}>Radisson Hotel</p>
                            <p className="image1_para2">Punjab</p>
                            <div className="image_1_client_image">
                                <img src="https://images.unsplash.com/photo-1611095973763-414019e72400?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                            </div>
                            <p className="image_1_para3">"These are going to be reviews of our clients for our store, and this can be written in the size of 25 and with black font."</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                    </div>
                    <div className="image_3_outer_box">
                        <div className="images_3">
                            <div className="hover_item">
                                <p className='image1_para1' style={{ marginTop: '0.293vw', color: 'white' }}>Radisson Hotel</p>
                                <p className="image1_para2" style={{ marginTop: '0', color: 'white' }}>Punjab</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <div className="images_3">
                            <div className="hover_item">
                                <p className='image1_para1' style={{ marginTop: '0.293vw', color: 'white' }}>Radisson Hotel</p>
                                <p className="image1_para2" style={{ marginTop: '0', color: 'white' }}>Punjab</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <div className="images_3">
                            <div className="hover_item">
                                <p className='image1_para1' style={{ marginTop: '0.293vw', color: 'white' }}>Radisson Hotel</p>
                                <p className="image1_para2" style={{ marginTop: '0', color: 'white' }}>Punjab</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>

                    </div>
                    <div className="image_2">
                        <p className="image_2_1"><img src="https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" /></p>
                        <p style={{ marginTop: "1.830vw" }} className="image_2_1"><img src="https://images.unsplash.com/photo-1596036435403-cdb01867592d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" /></p>
                    </div>
                </div>
                <div style={{ marginTop: "2.928vw" }} className="video_container">
                    <img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3MlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                </div>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">Featured Products</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="new_arrival_box">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">Popular categories</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="new_arrival_box">
                    <PopularCategories /><PopularCategories /><PopularCategories /><PopularCategories />
                </div>


                <div className="slide_box">
                    <div className="slider_box_one">
                        <img style={{ width: "35.944vw" }} src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img style={{ width: "29.283vw" }} src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWljcm93YXZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img style={{ width: "37.116vw" }} src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img style={{ width: "26.940vw" }} src="https://images.unsplash.com/photo-1542372358-5d022764bd6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdhc2hpbmclMjBtYWNoaW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className="slider_box_one">
                        <img style={{ width: "26.647vw" }} src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img style={{ width: "58.565vw" }} src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <img style={{ width: "32.577vw" }} src="https://images.unsplash.com/photo-1575571536958-38aa1227786a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGVsZWN0cm9uaWNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />

                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home
