import './Cart.css'
import Header from './Component/Header/Header';
import Header01 from './Component/Header/Header01';
import { Table, TableCell } from 'semantic-ui-react'
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline, IoCloseCircleSharp } from "react-icons/io5";
import Product from './Component/Product';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Footer from './Component/Footer/Footer';
import Billinginfo from './Component/Billinginfo';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export class Cart extends Component {
    render() {
        return (
            <div>
                <Header01 />
                <Header></Header>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">CART</p>
                    <hr id="line_blogs"></hr>
                </div>
                <p className='No_of_product'>2 Items</p>
                <div className="total_items_cart">
                    <div className='total_head_no'>
                        <p>01.</p>
                        <p>TOTAL ITEMS</p>
                    </div>
                    <div className="tble_box">
                        <table className="col_names">
                            <tr className="table_heading">
                                <td className="product_image">PRODUCT IMAGE</td>
                                <td className="product_Name">PRODUCT NAME</td>
                                <td className="product_avail">AVAILABILITY</td>
                                <td className="product_code">PRODUCT CODE</td>
                                <td className="product_price">UNIT PRICE</td>
                                <td className="product_quantity">QUANTITY</td>
                                <td className="product_subtotal">SUBTOTAL</td>
                            </tr>
                            <tr className="table_heading1">
                                <td className="product_image1"><img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></td>
                                <td className="product_Name1">
                                    <p className="product_para_1">This is the Product name in maximum 2 lines</p>
                                    <p className="product_para_2">Tags: First tag, Second tag</p>
                                    <p className="product_para_3">View Detail</p>
                                </td>
                                <td className="product_avail1">Available</td>
                                <td className="product_code1">8ADESGHA</td>
                                <td className="product_price1">Rs.4999.00</td>
                                <td className="product_quantity1">
                                    <FiMinusCircle id="minus_icon"></FiMinusCircle>
                                    <p className="product_quant_para">01</p>
                                    <IoAddCircleOutline id="add_icon" />
                                </td>
                                <td className="product_subtotal1">
                                    <p className="product__sub_para">Rs. 4,999.00</p>
                                    <IoCloseCircleSharp id="closeIcon" />
                                </td>
                            </tr>
                            <tr className="table_heading1">
                                <td className="product_image1"><img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></td>
                                <td className="product_Name1">
                                    <p className="product_para_1">This is the Product name in maximum 2 lines</p>
                                    <p className="product_para_2">Tags: First tag, Second tag</p>
                                    <p className="product_para_3">View Detail</p>
                                </td>
                                <td className="product_avail1">Available</td>
                                <td className="product_code1">8ADESGHA</td>
                                <td className="product_price1">Rs.4999.00</td>
                                <td className="product_quantity1">
                                    <FiMinusCircle id="minus_icon"></FiMinusCircle>
                                    <p className="product_quant_para">01</p>
                                    <IoAddCircleOutline id="add_icon" />
                                </td>
                                <td className="product_subtotal1">
                                    <p className="product__sub_para">Rs. 4,999.00</p>
                                    <IoCloseCircleSharp id="closeIcon" />
                                </td>
                            </tr>
                            <div className="button_box_1">
                                <button id="continue_shopping"> Continue Shopping</button>
                                <button id="cartUpdate">Update Cart</button>
                            </div>
                        </table>
                    </div>

                </div>
                <Billinginfo />
                <div className="buttons_cart_continue">
                    <button className="button_blog_one"> Continue Shopping</button>
                    <Link to='/payment'><button className="button_blog_two">Proceed to Payment</button></Link>
                </div>
                <div className="most_view_box">
                    <p className="most_viewd_text">RECENTLY VIEWED</p>
                    <hr id="line_view"></hr>
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
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Cart
