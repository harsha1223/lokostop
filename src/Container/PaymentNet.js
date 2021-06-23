import React, { Component } from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Header01 from './Component/Header/Header01'
import { FaShippingFast, FaRegClock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdSettingsBackupRestore, MdPayment } from "react-icons/md";
import { Link } from 'react-router-dom'
import './PaymentNet.css'
export class PaymentNet extends Component {
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
                                    <Link to='/paymentDebit'><li>DEBIT CARD</li></Link>
                                    <li style={{ background: 'white' }}>NET BANKING</li>
                                    <Link to='/paymentWallet'><li>WALLET/UPI</li></Link>
                                    <Link to='/PaymentCash' ><li>CASH ON DELIVERY</li></Link>
                                </ul>
                            </div>
                            <div className="boxdetail">
                                <div className="netboxmain">
                                    <p className="netbanking">NET BANKING</p>
                                    <div className="banklogosbox">
                                        <div className="bankindividual">
                                        <input type="radio" name="bank" id="banklogo" value='sbi' ></input>
                                        <label for="sbi"><img id= 'bankimage1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3B59yTFdif9Ux4ijbkKWXXXZY1fhF3zWbA&usqp=CAU" alt="Reload" /></label>
                                        </div>
                                        <div className="bankindividual">
                                        <input type="radio" name="bank" id="banklogo" value='hdfc' ></input>
                                        <label for="hdfc"><img id= 'bankimage' src="https://seekvectorlogo.net/wp-content/uploads/2018/12/hdfc-bank-vector-logo.png" alt="Reload" /></label>
                                        </div>
                                        <div className="bankindividual">
                                        <input type="radio" name="bank" id="banklogo" value='icici' ></input>
                                        <label for="icici"><img id= 'bankimage' src="https://techstory.in/wp-content/uploads/2015/07/icici-bank-ltd-logo.jpg" alt="Reload" /></label>
                                        </div>
                                        <div className="bankindividual">
                                        <input type="radio" name="bank" id="banklogo" value='axis' ></input>
                                        <label for="axis"><img id= 'bankimage' src="https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg" alt="Reload" /></label>
                                        </div>
                                    </div>
                                </div>
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

export default PaymentNet