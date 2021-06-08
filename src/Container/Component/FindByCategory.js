import React from 'react'
import {  IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
function FindByCategory() {
    return (
        <div>
            <div className="find_by_category_box">
                <p className="most_viewd_text">Find by category</p>
                <hr id="line_category"></hr>

            </div>
            <div className="category_box">
                <p className="offers">Open category and sort according to your preferences. Unveil offers.</p>
                <div className="category_names">
                    <p className='particular_cat'>Mobile & Tablet</p>
                    <p className='particular_cat'>Washing Machine</p>
                    <p className='particular_cat'>Mobile & Tablet</p>
                   

                </div>
                <p className="or">OR</p>
                <div className="category_Search">
                    <div className="centre_first_part">
                        <div className="Selected1">
                            <p style={{marginTop:'11px'}}>All categories</p> <IoIosArrowDown id="ArrowIcon1" />
                        </div>
                        <div className="dropdown_list_categories">
                            <div className="dropdown_list_items">Category 1 </div>
                            <div className="dropdown_list_items">Category 2 </div>
                            <div className="dropdown_list_items">Category 3 </div>
                            <div className="dropdown_list_items">Category 4 </div>
                            <div className="dropdown_list_items">Category 5 </div>
                            <div className="dropdown_list_items">Category 6 </div>
                            <div className="dropdown_list_items">Category 7 </div>
                            <div className="dropdown_list_items">Category 8 </div>
                        </div>
                    </div>
                    <div className="centre_first_part">
                        <div className="Selected_brand">
                            <p style={{marginTop:'11px'}}>Brand</p> <IoIosArrowDown id="ArrowIcon1" />
                        </div>
                        <div className="dropdown_list_categories">
                            <div className="dropdown_list_items">Brand 1 </div>
                            <div className="dropdown_list_items">Brand 2 </div>
                            <div className="dropdown_list_items">Brand 3 </div>
                            <div className="dropdown_list_items">Brand 4 </div>
                            <div className="dropdown_list_items">Brand 5 </div>
                            <div className="dropdown_list_items">Brand 6 </div>
                            <div className="dropdown_list_items">Brand 7 </div>
                            <div className="dropdown_list_items">Brand 8 </div>
                        </div>
                    </div>
                    <div className="centre_second_part">
                        <input type="text" placeholder="Budget (approximate)" />
                    </div>
                    <div className="find_icon">
                        <p style={{marginTop:'11px'}}>Find</p><FiSearch id='search' />
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default FindByCategory
