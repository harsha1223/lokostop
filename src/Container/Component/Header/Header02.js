import './Header02.css'
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IoIosArrowForward, IoIosHeart } from "react-icons/io";
class Header02 extends Component {
    state = {
        menus: []
    }
    // componentDidMount() {
    //     const { menus } = this.state
    //     const setCategories = (root) => {
    //         if (root.childrenMenu.length == 0) {
    //           return (
    //             <Link
    //               style={{
    //                 background: "transparent",
    //                 color: "#1D1D1D",
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //               }}
    //               className={"dropdown-item"}
    //               to={"/"}
    //             >
    //               {root.name}
    //               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //               {root.childrenMenu.length > 0 ? (
    //                 <IoIosArrowForward className="ForwardArrow" />
    //               ) : (
    //                 ""
    //               )}
    //             </Link>
    //           );
    //         } else
    //           return (
    //             <React.Fragment>
    //               <Link
    //                 style={{
    //                   background: "transparent",
    //                   color: "#1D1D1D",
    //                   display: "flex",
    //                   justifyContent: "space-between",
    //                 }}
    //                 className={"dropdown-item"}
    //                 to={"/"}
    //               >
    //                 {root.name}
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 <IoIosArrowForward className="ForwardArrow" />
    //               </Link>
    //               {root.childrenMenu.length > 0 ? (
    //                 <ul className="dropdown-menu dropdown-submenu">
    //                   {root.childrenMenu.map((child, key) => {
    //                     return <li key={key}>{setCategories(child)}</li>;
    //                   })}
    //                 </ul>
    //               ) : (
    //                 ""
    //               )}
    //             </React.Fragment>
    //           );
    //       };
    //     // this.props.menus.forEach((menu, key) => {
    //     //     let tempData = {};
    //     //     if(menu.menuItems.length > 0){
    //     //         tempData.title = (
    //     //             <button style= {{fontWeight:'bold'}}class="btn  dropdown-toggle" type="button" id={"dropdownMenuButton"+key} data-bs-toggle="dropdown" aria-expanded="false">
    //     //                      {menu.name}
    //     //                 </button>
    //     //         )
    //     //         menu.menuItems.forEach(menuItem=>{
    //     //             tempData.content = setCategories(menuItem)
    //     //         })
    //     //     }
    //     //     // tempData.content = setCategories(menu);
    //     //     menus.push(tempData);
    //     //   });
    //       this.setState({ menus });
    // }
    render() {
        return (
            <div className="Header_two">
            <div className="logo">
                <img src="https://www.logo.wine/a/logo/Lacoste/Lacoste-Logo.wine.svg" alt="Reload" />
            </div>
            <div className="navbar">
                <ul>
                    {/* {this.state.menus.map((menu,key)=>{
                        return <Link to="/"><li className="navli"><div className="dropdown" key={key}>
                            {menu.title}
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                 <li>{menu.content}</li>
                        </ul>
                        </div></li> </Link>
                    })} */}
                   <Link to='/aboutUs'><li className="navli">About us</li></Link>
                    <Link to='/sendquery'><li className="navli">Send query</li></Link>
                    <Link to='/profile'><li className="navli">Complaint</li></Link>
                    <Link to="/blogs"><li className="navli">Blogs</li></Link>
                </ul>
            </div>
            <div className="Header_two_part3">
                <div className="mobile_part">
                    <p>+91-9898989898</p>
                    <MdLocalPhone id='phone' />
                </div>
                <div className="email_part">
                    <p>sidhuelectronics1@gmail.com</p>
                    <MdEmail id='mail' />
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        menus: state.getMenus.menus
    }
}
export default connect(mapStateToProps)(Header02)
