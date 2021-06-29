import React, { Component } from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Header01 from '../Component/Header/Header01'
import { FaShippingFast, FaRegClock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdSettingsBackupRestore, MdPayment } from "react-icons/md";
import { Link } from 'react-router-dom'
export class PaymentDebit extends Component {
    render() {
        return (
            <div>
                <Header01 />
                <Header />
                <div className="find_by_category_box">
                    <p className="most_viewd_text"> PAYMENT</p>
                    <hr id="line_blogs"></hr>
                </div>
                <Link to='/cart'>
                    <div className="goblog">
                        <IoIosArrowBack id="blog_icon" />
                        <p>Back to cart</p>
                    </div>
                </Link>
                <div className="outerpaymentbox">
                    <div className="firstpaybox">
                        <div className='total_head_no'>
                            <p>03.</p>
                            <p>PAYMENT METHOD</p>
                        </div>
                        <div className="insidepay">
                            <div className="paymethod">
                                <ul>
                                    <Link to='/payment'><li >CREDIT CARD</li></Link>
                                    <li style={{ background: 'white' }}>DEBIT CARD</li>
                                    <Link to='/paymentNet'><li>NET BANKING</li></Link>
                                    <Link to='/paymentWallet'><li>WALLET/UPI</li></Link>
                                    <Link to='/PaymentCash' ><li>CASH ON DELIVERY</li></Link>
                                </ul>
                            </div>
                            <div className="boxdetail">
                                <div className="creditDetail">
                                    <p className="creditpara">DEBIT CARD</p>
                                    <input type="text" id="inputBoxCard" placeholder="CARD NUMBER" />
                                    <div className="monthyearbox">
                                        <input type="text" id="monthimput" placeholder="EXPIRY MONTH" />
                                        <input type="text" id="monthimput" placeholder="EXPIRY YEAR" />
                                    </div>
                                    <div className="monthyearbox">
                                        <input type="text" id="monthimput" placeholder="CVV" />
                                        <p className="cvv">Last 3 digits on the back side of your card</p>
                                    </div>
                                    <input type="text" id="inputBoxCard" placeholder="NAME ON THE CARD" />
                                </div>
                                <p className="check_box1">
                                    <label className="containerCheck">
                                        Save the bank details for faster payments ahead
                                        <input type="checkbox"></input>
                                        <span className="checkMark"></span>
                                    </label>
                                </p>
                                <button className="paynow">PAY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="secondpaybox">
                        <div className="secondpay_1box">
                            <p className='para1_pay'>ABCDEF</p>
                            <hr id='payline' />
                            <div className="paymntbox_card">
                                <p>PAYMENT OF</p>
                                <p><b>Rs. 45,289.00</b></p>
                            </div>
                        </div>
                        <div className="Free_boxpay">
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
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default PaymentDebit