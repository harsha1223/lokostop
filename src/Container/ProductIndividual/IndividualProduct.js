import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import './IndividualProduct.css'
import FindByCategory from '../Component/Boxes/FindByCategory';
import Product from '../Component/Product';
import IndividualProductDetails from './IndividualProductDetails';
import Header01 from '../Component/Header/Header01';
import React, { Component } from 'react'
import PopularBox from '../Component/Boxes/PopularBox';
import { FaRegStar } from "react-icons/fa";
import ShowReview from './ShowReview'
import { IoIosArrowBack, IoIosArrowForward, IoIosAttach } from "react-icons/io";

export class IndividualProduct extends Component {
    render() {
        return (
            <div>
                <Header01></Header01>
                <Header />
                <IndividualProductDetails />
                <div className="review_main_with_specification">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button style={{ color: ' #9d9d9d', font: ' normal normal normal 1vw/2vw Poppins' }} class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button style={{ color: ' #9d9d9d', font: ' normal normal normal 1vw/2vw Poppins' }} class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Specifications</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button style={{ color: ' #9d9d9d', font: ' normal normal normal 1vw/2vw Poppins' }} class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Reviews</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="desciptionbox">
                                <div className="paradescription">
                                    <h6>Heading 1</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum asperiores inventore accusantium. Excepturi quisquam eos magnam sapiente at suscipit ad ea. Dolor rem molestias autem nobis cupiditate nemo quos aut necessitatibus obcaecati cumque.</p>
                                </div>
                                <div className="paradescription">
                                    <h6>Heading 1</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum asperiores inventore accusantium. Excepturi quisquam eos magnam sapiente at suscipit ad ea. Dolor rem molestias autem nobis cupiditate nemo quos aut necessitatibus obcaecati cumque.</p>
                                </div>
                                <div className="paradescription">
                                    <h6>Heading 1</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum asperiores inventore accusantium. Excepturi quisquam eos magnam sapiente at suscipit ad ea. Dolor rem molestias autem nobis cupiditate nemo quos aut necessitatibus obcaecati cumque.</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="specification_outer_box">
                                <div className='particularSpecification'>
                                    <h6>Heading 1</h6>
                                    <p>Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="review_outer_box">
                                <p className='read_review' style={{ marginTop: '1.171vw' }}>Read reviews here</p>
                                <div className="review_star">
                                    <FaRegStar id='star_feature_next' />
                                    <FaRegStar id='star_feature_next' />
                                    <FaRegStar id='star_feature_next' />
                                    <FaRegStar id='star_feature_next' />
                                    <FaRegStar id='star_feature_next' />
                                </div>
                                <div className="write_review">
                                    <div className="customer_review">
                                        <textarea
                                            className="commentBox"
                                            maxLength="200"
                                            placeholder="Choose a rating and start writing a review..."
                                        ></textarea>
                                        <div className="count_attach">
                                            <IoIosAttach className='attach' />
                                            <p className="no_count">0/200</p>
                                        </div>
                                    </div>
                                    <button className="review_button">Post Review</button>
                                </div>
                                <ShowReview />
                                <ShowReview />
                                <ShowReview />
                                <ShowReview />
                            </div></div>
                    </div>

                </div>
                <div className="most_view_box">
                    <p className="most_viewd_text">PEOPLE ALSO BUY</p>
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
                <FindByCategory />
                <PopularBox />
                <Footer />
            </div>
        )
    }
}

export default IndividualProduct