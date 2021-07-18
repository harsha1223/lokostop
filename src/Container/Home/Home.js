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
import {getFeatures} from '../../Redux/Actions/StorefrontActions'
class Home extends Component {
    state = {
        products:[],
        productRows: []
    }
    componentDidMount(){
        this.props.getFeatures()
        this.setState({products: this.props.products, productRows: this.props.allProductRows})
    }
    render() {
        if(this.props.loading ||this.props.allProductRowsLoading || this.props.featuresLoading){
            return <Loader />
        }
        else return (
            <div>
                <Header01 />
                <Header />
                <VideoContainer />
                {this.props.allFeatures.Features && this.props.allFeatures.Features.SectionStatus? 
                <div className="Free_box">
                    {this.props.allFeatures.Features.Features.filter(feature=>{
                        if(feature.Icon != "" && feature.SubTitle != "" && feature.Title != "")
                            return true
                        return false
                    }).map((feature,key)=>{
                        return (
                            <div className="Free_Shipping" key={key}>
                        <FaShippingFast id="shipping_Icon" />
                        <div className="shipping_text">
                            <p className="shipping_text1">{feature.Title}</p>
                            <p className="shipping_text2">{feature.SubTitle}</p>
                        </div>
                    </div>
                        )
                    })}
                    
                    {/* <div className="Free_return">
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
                    </div> */}
                </div>
                : ""}
                 <NewArrival products={this.state.productRows}/>
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
        productDetails: state.getProductDetails.product,
        allProductRows: state.getProductTabs.productGrid,
        allProductRowsLoading: state.getProductTabs.loading,
        featuresLoading: state.getFeatures.loading,
        allFeatures: state.getFeatures.features
    }
}
export default connect(mapStateToProps, {getFeatures})(Home)
