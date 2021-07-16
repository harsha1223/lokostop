import {  FaRegHeart } from "react-icons/fa";
import { BiGitCompare, BiCart } from "react-icons/bi";
import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Product extends Component {
    render() {
        return (
            <div className="product_details_list">
                  <Link to="product/123">  <div className="image_box">
                      {this.props.product.baseImage?<img src={"https://api.lokostop.in/"+this.props.product.baseImage.image} alt="RELOAD" />: <img src="https://via.placeholder.com/200" alt="RELOAD"/>}
                        
                        {this.props.product.specialPrice != null && this.props.product.specialPrice && this.props.product.specialPriceType == "percent"? <p className='discount'>{this.props.product.specialPrice}%off</p>: ""}
                        {this.props.product.specialPrice != null && this.props.product.specialPrice && this.props.product.specialPriceType == "Fixed"? <p className='discount'>{Math.trunc((this.props.product.price-this.props.product.specialPrice)/this.props.product.price*100)}%off</p>: ""}
                    </div></Link>
                    <div className="add_to_cart_box">
                        <div id="div_first" className="add_to_cart_inner_box" >
                            <BiGitCompare className="Compare_Icon" />
                            <div className="add_to_cart_text_icon">
                                <p style={{marginTop:'0.439vw'}}>ADD TO CART</p>
                                <BiCart style={{
                                    color: 'white',
                                    marginLeft: '0.952vw',
                                    marginTop: '0.512vw',
                                    fontSize: '1.3vw'
                                }} />
                            </div>
                            <FaRegHeart className="Fav_icon" style={{ color: "#9d9d9d" }} />
                        </div>

                    </div>
                    <div className="product_details">
                        
                        {this.props.product.categories.map((category, key)=>{
                            return <Link key={key} to={'/category/'+category.url+"/"+category._id}><p className="category_name_product">{category.name}</p> </Link>
                        })}
                        
                    <Link to="product/123"> 
                        
                        <p className="name_details_each_product">
                            {this.props.product.name}
                            <br/>
                                {this.props.product.shortDescription}
                        </p>
                        <div className="price_of_product">
                            {this.props.product.specialPrice != null && this.props.product.specialPrice? <React.Fragment><p className="para_price_one">₹ {this.props.product.price}</p>
                            <p className="para_price_two">₹ {this.props.product.specialPrice}</p></React.Fragment>:<p className="para_price_two">₹ {this.props.product.price}</p> }
                            
                        </div>
                    </Link>
                    </div>

                </div>
        )
    }
}

export default Product
