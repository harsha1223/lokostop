import {Link} from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import './IndividualProduct.css'
import FindByCategory from './Component/FindByCategory';
import PopularCategories from './Component/PopularCategories';
import Product from './Component/Product';

import IndividualProductDetails from './Component/IndividualProductDetails';
import Header01 from './Component/Header/Header01';


import React, { Component } from 'react'

export class IndividualProduct extends Component {
    render() {
        return (
            <div>
            <Header01></Header01>
            <Header />
            <IndividualProductDetails/>
            <div className="review_main_with_specification">
                <div className='Heading_Name_for_reviewbox'>
                    <ul>
                        <li>Description</li>
                        <Link to="/productSpecification" style={{textDecoration:'none', color:' #9d9d9d'}}><li>Specifications</li></Link>
                        <Link to="/productReview" style={{textDecoration:'none', color:' #9d9d9d'}}><li>Reviews</li></Link>
                    </ul>
                </div>
                <div className="line_for_review_define_box">
                    <hr className="line01Box"/>
                    <hr className="line02Box"/>
                </div>
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
}

export default IndividualProduct
