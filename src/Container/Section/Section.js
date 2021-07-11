import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import Header01 from '../Component/Header/Header01'
import Product from '../Component/Product'
import './Section.css'
import React, { Component } from 'react'
import Filter from './Filter'
import { connect } from "react-redux";
import {getCategoryProducts} from '../../Redux/Actions/CategoryActions'
import Loader from '../Loader/Loader'

class Section extends Component {
    componentDidMount(){
        this.props.getCategoryProducts()
    }
    render() {
        if(this.props.loading){
            return <Loader />
        }
        return (
            <div>
                <Header01></Header01>
                <Header></Header>
                <div className="sectionBox">
                   <Filter/>
                    <div className="ParticularSection">
                        <div className="headParticular">
                            <p>WASHING MACHINE</p>
                            <hr />
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
                            <Product />
                        </div>
                        <button className="load_more_blogs" style={{ marginLeft: '30.015vw' }}>Load more</button>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      products: state.getCategoryProducts.products,
      loading: state.getCategoryProducts.loading
    };
  };
export default connect(mapStateToProps, {getCategoryProducts})(Section)
