import React, { Component } from 'react'
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline, IoCloseCircleSharp } from "react-icons/io5";
export class Wishlist extends Component {
    render() {
        return (
            <div className="tble_box1">
                <table className="col_names1">
                    <tbody>
                        <tr className="table_headingnew">
                            <td className="product_image">PRODUCT IMAGE</td>
                            <td className="product_Name">PRODUCT NAME</td>
                            <td className="product_availnew">AVAILABILITY</td>
                            <td className="product_codenew">PRODUCT CODE</td>
                            <td className="product_pricenew">UNIT PRICE</td>
                            <td className="product_quantitynew">QUANTITY</td>
                            <td className="product_subtotalnew">SUBTOTAL</td>
                        </tr>
                        <tr className="table_heading1">
                            <td className="product_image1"><img alt='reload' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></td>
                            <td className="product_Name1">
                                <p className="product_para_1">This is the Product name in maximum 2 lines</p>
                                <p className="product_para_2">Tags: First tag, Second tag</p>
                                <p className="product_para_3">View Detail</p>
                            </td>
                            <td className="product_avail1new">Available</td>
                            <td className="product_code1">8ADESGHA</td>
                            <td className="product_price1new">Rs.4999.00</td>
                            <td className="product_quantity1new">
                                <FiMinusCircle id="minus_icon"></FiMinusCircle>
                                <p className="product_quant_para">01</p>
                                <IoAddCircleOutline id="add_icon" />
                            </td>
                            <td className="product_subtotal1">
                                <p className="product__sub_para">Rs. 4,999.00</p>
                                <IoCloseCircleSharp id="closeIcon" />
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className="button_box_1new">
                    <button id="continue_shopping"> Continue Shopping</button>
                    <button id="cartUpdate">Update Cart</button>
                </div>
            </div>
        )
    }
}

export default Wishlist
