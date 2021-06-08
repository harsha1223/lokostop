import React from 'react'
import './productReview.css'
import { Link } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import { IoIosArrowBack, IoIosArrowForward, IoIosAttach } from "react-icons/io";
import FindByCategory from './Component/FindByCategory';
import PopularCategories from './Component/PopularCategories';
import { FaRegStar } from "react-icons/fa";
import Product from './Component/Product';
import IndividualProductDetails from './Component/IndividualProductDetails';
import ShowReview from './Component/ShowReview'
import Header01 from './Component/Header/Header01'
function productReview() {
    return (
        <div>
            <Header01></Header01>
            <Header />
            <IndividualProductDetails />
            <div className="review_main_with_specification">
                <div className='Heading_Name_for_reviewbox'>
                    <ul>
                        <Link to="/productindividual" style={{ textDecoration: 'none', color: ' #9d9d9d' }}><li>Description</li></Link>
                        <Link to="/productSpecification" style={{ textDecoration: 'none', color: ' #9d9d9d' }}><li>Specifications</li></Link>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div className="line_for_review_define_box">
                    <hr className="line06Box" />
                    <hr className="line04Box" />
                    <hr className='line05Box' style={{ width: '630px' }}></hr>
                </div>
                <div className="review_outer_box">
                    <p className='read_review' style={{marginTop:'16px'}}>Read reviews here</p>
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
                    <ShowReview/>
                    <ShowReview/>
                    <ShowReview/>
                    <ShowReview/>
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
            <div className="find_by_category_box">
                <p className="most_viewd_text">Popular categories</p>
                <hr id="line_category"></hr>
            </div>
            <div className="new_arrival_box">
                <PopularCategories /><PopularCategories /><PopularCategories /><PopularCategories />
            </div>
            <Footer />
        </div>
    )
}

export default productReview
