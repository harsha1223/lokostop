import Header from '../Component/Header/Header'
import { FaShippingFast, FaRegClock } from "react-icons/fa";
import { MdSettingsBackupRestore, MdPayment } from "react-icons/md";
import './Home.css'
import Footer from '../Component/Footer/Footer';
import FindByCategory from '../Component/Boxes/FindByCategory';
import Header01 from '../Component/Header/Header01';
import React, { Component } from 'react'
import NewArrival from '../Component/Boxes/NewArrival';
import PopularBox from '../Component/Boxes/PopularBox';
import FeatureBox from '../Component/Boxes/FeatureBox';
import SixImageSlider from '../Component/Slider/SixImageSlider';
import ClientImage from '../Component/Slider/ClientImage';
import VideoContainer from '../Component/Slider/VideoContainer';
import CategoryBox from '../Component/Boxes/CategoryBox';
import MostViewedBox from '../Component/Boxes/MostViewedBox';
import TopClients from '../Component/Boxes/TopClients';
import Loader from '../Loader/Loader'
import {connect} from 'react-redux'
import {getAllProducts} from '../../Redux/Actions/ProductActions'
import {getFooterDetails} from '../../Redux/Actions/StorefrontActions'

class Home extends Component {
    state = {
        products:[]
    }
    componentDidMount(){
        this.props.getAllProducts()
        this.props.getFooterDetails()
        this.setState({products: this.props.products})
    }
    render() {
        if(this.props.loading || this.props.footerLoading){
            return <Loader />
        }
        else return (
            <div>
                <Header01></Header01>
                <Header></Header>
                <VideoContainer />
                <div className="Free_box">
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
                <NewArrival />
                <MostViewedBox />
                <FindByCategory />
                <CategoryBox />
                <TopClients />
                <ClientImage />
                <VideoContainer />
                <FeatureBox />
                <PopularBox />
                <SixImageSlider />
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        products: state.getProducts.products,
        loading: state.getProducts.loading,
        footerLoading: state.getFooter.loading,
        productDetails: state.getProductDetails.product
    }
}
export default connect(mapStateToProps, {getAllProducts, getFooterDetails})(Home)
