import React, { Component } from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Header01 from '../Component/Header/Header01'
import './paymentCart.css'
import './PaymentNet.css'
import { FaShippingFast, FaRegClock } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdSettingsBackupRestore, MdPayment } from "react-icons/md";
import { Link } from 'react-router-dom'
export class paymentCart extends Component {
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
                            <div class="d-flex align-items-start" style={{ width: '100%' }}>
                                <div class="nav flex-column nav-pills me-3 nav1new" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">CREDIT CARD</button>
                                    <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">DEBIT CARD</button>
                                    <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">NET BANKING</button>
                                    <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">WALLET/UPI</button>
                                    <button class="nav-link" id="v-pills-cash-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cash" type="button" role="tab" aria-controls="v-pills-cash" aria-selected="false">CASH ON DELIVERY</button>
                                </div>
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                        <div className="creditDetail">
                                            <p className="creditpara">CREDIT CARD</p>
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
                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
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
                                    <div style={{width:'34vw'}} class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                        <div className="boxdetail">
                                            <div className="netboxmain">
                                                <p className="netbanking">NET BANKING</p>
                                                <div className="banklogosbox">
                                                    <div className="bankindividual">
                                                        <input type="radio" name="bank" id="banklogo" value='sbi' ></input>
                                                        <label for="sbi"><img id='bankimage1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn3B59yTFdif9Ux4ijbkKWXXXZY1fhF3zWbA&usqp=CAU" alt="Reload" /></label>
                                                    </div>
                                                    <div className="bankindividual">
                                                        <input type="radio" name="bank" id="banklogo" value='hdfc' ></input>
                                                        <label for="hdfc"><img id='bankimage' src="https://seekvectorlogo.net/wp-content/uploads/2018/12/hdfc-bank-vector-logo.png" alt="Reload" /></label>
                                                    </div>
                                                    <div className="bankindividual">
                                                        <input type="radio" name="bank" id="banklogo" value='icici' ></input>
                                                        <label for="icici"><img id='bankimage' src="https://techstory.in/wp-content/uploads/2015/07/icici-bank-ltd-logo.jpg" alt="Reload" /></label>
                                                    </div>
                                                    <div className="bankindividual">
                                                        <input type="radio" name="bank" id="banklogo" value='axis' ></input>
                                                        <label for="axis"><img id='bankimage' src="https://www.logo.wine/a/logo/Axis_Bank/Axis_Bank-Logo.wine.svg" alt="Reload" /></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="paynow">PAY NOW</button>
                                        </div>
                                    </div>
                                    <div style={{width:'34vw'}} class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                        <div className="boxdetail">
                                            <div className="netboxmain">
                                                <p className="netbanking">Wallet</p>
                                                <div className="banklogosbox">
                                                    <div className="bankindividual">
                                                        <input type="radio" name="bank" id="banklogo" value='phonepay' ></input>
                                                        <label for="phonepay"><img id='bankimage' src="https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg" alt="Reload" /></label>
                                                    </div>
                                                    <div className="bankindividual">
                                                        <input type="radio" name="bank" id="banklogo1" value='hdfc' ></input>
                                                        <label for="hdfc"><img id='bankimage2' src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" alt="Reload" /></label>
                                                    </div>
                                                    <div className="bankindividual">
                                                        <input type="radio" name="bank" id="banklogo1" value='icici' ></input>
                                                        <label for="icici"><img id='bankimage2' src="https://www.logo.wine/a/logo/Google_Pay/Google_Pay-Logo.wine.svg" alt="Reload" /></label>
                                                    </div>
                                                    <div className="bankindividual">
                                                        <input type="radio" name="bank" id="banklogo" value='axis' ></input>
                                                        <label for="axis"><img id='bankimage' src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/upi.png" alt="Reload" /></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="paynow">PAY NOW</button>
                                        </div>
                                    </div>
                                    <div style={{width:'34vw'}} class="tab-pane fade" id="v-pills-cash" role="tabpanel" aria-labelledby="v-pills-cash-tab">
                                        <div className="boxdetail">
                                            <div className="netboxmain">
                                                <p className="netbanking">Currently Unavailable</p>
                                            </div>
                                            <button className="paynow">PAY NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="paymethod">
                                <ul>
                                    <li style={{ background: 'white' }}>CREDIT CARD</li>
                                    <Link to='/paymentDebit'><li>DEBIT CARD</li></Link>
                                    <Link to='/paymentNet'><li>NET BANKING</li></Link>
                                    <Link to='/paymentWallet'><li>WALLET/UPI</li></Link>
                                    <Link to='/PaymentCash' ><li>CASH ON DELIVERY</li></Link>
                                </ul>
                            </div>
                            <div className="boxdetail">
                                <div className="creditDetail">
                                    <p className="creditpara">CREDIT CARD</p>
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
                            </div> */}
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

export default paymentCart