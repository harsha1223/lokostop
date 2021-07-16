import Product from '../Product';
import React, { Component } from 'react'

export class FeatureBox extends Component {
    render() {
        return (
            <div>
               <div className="find_by_category_box">
                    <p className="most_viewd_text">Featured Products</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="new_arrival_box">
                    {/* <Product />
                    <Product />
                    <Product />
                    <Product /> */}
                </div> 
            </div>
        )
    }
}

export default FeatureBox
