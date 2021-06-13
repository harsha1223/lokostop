import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Header01 from './Component/Header/Header01'
import Product from './Component/Product'
import './Section.css'
function Section() {
    return (
        <div>
            <Header01></Header01>
            <Header></Header>
            <div className="sectionBox">
                <div className="filterbox">
                    <p className="filtersHeading">Filters</p>
                    <p className="parafilter">Filter your preference and dig deep to buy what you want</p>
                    <div className='filterCategories'>
                        <p>Washing machine</p>
                        <p>automatic</p>
                        <p>20,000</p>
                        <p>Black</p>
                        <p>Washing machine</p>
                    </div>
                </div>
                <div className="ParticularSection">
                    <div className="headParticular">
                        <p>WASHING MACHINE</p>
                        <hr/>
                    </div>
                    <div className="dropSort">
                        <p>Sort by :</p>
                        <select className='sortIndividual'>
                            <option value="">Newest</option>
                            <option value="">Discount</option>
                            <option value="">Customer Rating</option>
                        </select>
                    </div>
                    <div className="individualcategorybox">
                        <Product></Product>
                        <Product/>
                    </div>
                    <button className="load_more_blogs" style={{marginLeft:'30.015vw'}}>Load more</button>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Section
