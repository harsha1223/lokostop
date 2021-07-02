import React, { Component } from 'react'
import Header from '../Component/Header/Header'
import Header01 from '../Component/Header/Header01';
import './ProfileIndividual.css'
import { FaBox } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline, IoCloseCircleSharp } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import PopularBox from '../Component/Boxes/PopularBox';
import Footer from '../Component/Footer/Footer'
import ComplaintPop from './ComplaintPop';
export class ProfileIndividual extends Component {
    render() {
        return (
            <div>
                <Header01></Header01>
                <Header></Header>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">MY PROFILE</p>
                    <hr style={{ marginLeft: '-3vw' }} id="line_blogs"></hr>
                </div>
                <div className="profileOuterMainBOx">
                    <div className="firstboxprofile">
                        <div className="name_individual_Hi">
                            <div className="image_user" style={{ height: '3vw', width: '3vw' }}><img style={{ cursor: 'pointer' }} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></div>
                            <div className="name_hi">
                                <p className="himessage">Hi,</p>
                                <p className="nameperson">ABCDEF</p>
                            </div>
                        </div>
                        <div className='orderboxsummary'>
                            <FaBox className='boxIcon'></FaBox>
                            <p>MY ORDERS</p>
                        </div>
                        <div className='orderboxsummary1'>
                            <MdAccountCircle className='accountIcon'></MdAccountCircle>
                            <p>ACCOUNT SETTINGS</p>
                        </div>
                        <div className="settingcategory">
                            <div class="nav flex-column nav-pills me-3 navcolor" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button class="nav-link active pillval" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Personal Information</button>
                                <button class="nav-link pillval" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">My Address</button>
                                <button class="nav-link pillval" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">My wishlist</button>
                                <button class="nav-link pillval" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Complaints</button>
                            </div>
                        </div>
                        <div className='orderboxsummary1'>
                            <BiLogOut className='accountIcon'></BiLogOut>
                            <p>LOGOUT</p>
                        </div>
                    </div>
                    <div className="secondBoxprofile">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                A
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">B</div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div className="tble_box1">
                                    <table className="col_names1">
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
                                            <td className="product_image1"><img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></td>
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


                                        <div className="button_box_1new">
                                            <button id="continue_shopping"> Continue Shopping</button>
                                            <button id="cartUpdate">Update Cart</button>
                                        </div>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div>
                                    <p className='complaintshead'>My Complaints</p>
                                    <div className="tble_box1complaint">
                                        <table className="col_names1">
                                            <tr className="table_headingnew">
                                                <td className="product_imagecomplaint">S.No</td>
                                                <td className="product_Namecomplaint">Complaint Heading</td>
                                                <td className="product_availnewcomplaint">Complaint ID</td>
                                                <td className="product_codenewcomplaint">Status</td>
                                                <td className="product_pricenewcomplaint">Replied</td>
                                            </tr>
                                            <tr className="table_heading1">
                                                <td className="product_image1complaint">1</td>
                                                <td className="product_Name1complaint">
                                                    My LG washing machine is not working properly
                                                </td>
                                                <td className="product_avail1newcomplaint">8273791MG</td>
                                                <td className="product_code1complaint">Sent</td>
                                                <td className="product_price1newcomplaint">
                                                    <div className="save_box">
                                                        <select className="dropdown_colors1" >
                                                            <option value="WH">Yes</option>
                                                            <option value="BL">No</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className="product_quantity1newcomplaint">
                                                    View Details
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                   <ComplaintPop/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <PopularBox />
                <Footer></Footer>
            </div >
        )
    }
}

export default ProfileIndividual
