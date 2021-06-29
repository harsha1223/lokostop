import {  FaRegHeart } from "react-icons/fa";
import { BiGitCompare, BiCart } from "react-icons/bi";
import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            <div className="product_details_list">
                    <div className="image_box">
                        <img src="https://images.unsplash.com/photo-1583172747862-afcb755ebd13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="RELOAD" />
                        <p className='discount'>10% off</p>

                    </div>
                    <div className="add_to_cart_box">
                        <div id="div_first" className="add_to_cart_inner_box" >
                            <BiGitCompare className="Compare_Icon" />
                            <div className="add_to_cart_text_icon">
                                <p style={{marginTop:'0.439vw'}}>ADD TO CART</p>
                                <BiCart style={{
                                    color: 'white',
                                    marginLeft: '0.952vw',
                                    marginTop: '0.512vw',
                                    fontSize: '1.3vw'
                                }} />
                            </div>
                            <FaRegHeart className="Fav_icon" style={{ color: "#9d9d9d" }} />
                        </div>

                    </div>
                    <div className="product_details">
                        <p className="category_name_product">LED TELIVISION</p>
                        <p className="name_details_each_product">
                            LG 6.5kg 5 Star Smart Inverter Fully-Automatioc Top loading Washing Machine(T65SKSF4Z)
                        </p>
                        <div className="price_of_product">
                            <p className="para_price_one">25,000</p>
                            <p className="para_price_two">Rs 22,000</p>
                        </div>
                    </div>

                </div>
        )
    }
}

export default Product
