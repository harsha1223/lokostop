import React from 'react'
import PopularCategories from './PopularCategories'
function PopularBox() {
    return (
        <div>
             <div className="find_by_category_box">
                    <p className="most_viewd_text">Popular categories</p>
                    <hr id="line_category"></hr>
                </div>
                <div className="new_arrival_box">
                    <PopularCategories />
                    <PopularCategories />
                    <PopularCategories />
                    <PopularCategories />
                </div>
        </div>
    )
}

export default PopularBox
