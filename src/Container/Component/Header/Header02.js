import './Header02.css'
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import React, { Component ,useState} from 'react'
// import styled from "styled-components";
import { connect } from 'react-redux'
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward, IoIosHeart } from "react-icons/io";
import Hamburger from 'hamburger-react'



// const Div = styled.div`
// margin-left:0;
// @media (max-width:700px){
//     .hamburg{
//         margin-left:-4.571vw;
//         transform: ${({ open }) =>
//             open ? "translateX(0)" : "translateX(-100%)"};
//         transition: transform 0.3s ease-in-out;
//     }
// `;
// const StyledBurger = styled.div`
//     margin-top: 1.529vw;
//     width: 4.671vw;
//     height: 3.829vw;
//     top: ${({ open }) => (open ? "1.429vw" : "2.929vw")};
//     left: ${({ open }) => (open ? "2.143vw" : "5.286vw")};
//     justify-content: space-around;
//     flex-flow: column nowrap;
//     display: none;
//     @media (max-width: 425px) {
//         display: flex;
//         position: sticky;
//         position: -webkit-sticky;
//         z-index: 1042;
//     }
//     div {
//         z-index: 1041;
//         background-color: ${({ open }) => (open ? "#7D7D7D" : "#ccc")};
//         border-radius: 1.429vw;
//         transform-origin: 0vw;
//         transition: all 0.3s linear;
//         &:nth-child(1) {
//             transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0)`)};
//         }
//         &:nth-child(2) {
//             transform: ${({ open }) =>
//                 open ? `translateX(100%)` : `translateX(0)`};
//             opacity: ${({ open }) => (open ? 0 : 1)};
//         }
//         &:nth-child(3) {
//             transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0)`)};
//         }
//     }
// `;

class Header02 extends Component {

    state = {
        menus: [],
        display: 'none'
    }

    componentDidMount() {
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
    }
    render() {
        // const [open, setOpen] = useState(false);
        return (
            
            <div className="Header_two" >
                {/* <input type="checkbox" id="check"></input>
                <button class="checkbtn" ><FiMenu /></button> */}
                {/* <StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div id="hamburgline1" />
                    <div id="hamburgline2" />
                    <div id="hamburgline3" />
                </StyledBurger> */}
                
                <div className="logo">
                    <img src={this.props.logos && this.props.logos.Logo ? "https://api.lokostop.in/" + this.props.logos.Logo.HeaderLogo.image : ""} alt="Reload" />
                </div>
                <div className="closing">
                <div className="navbar">
                    <ul className="navvvvul">
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
            <div className='hamburg'>
            <Hamburger direction="right" size={4} distance="sm" color="#08E5A9" onToggle={toggled=>{if (toggled) {
            this.setState({ display: 'flex' });
  } else {
    this.setState({ display: 'none' });
  }}}/>
            </div>
            <div className="menu" style={{display:this.state.display}}>
            <ul className="menul">
                        <Link to='/aboutUs'><li className="menul1">About us</li></Link>
                        <Link to='/sendquery'><li className="menul1">Send query</li></Link>
                        <Link to='/profile'><li className="menul1">Complaint</li></Link>
                        <Link to="/blogs"><li className="menul1">Blogs</li></Link>
                    </ul>
            </div>
            
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        menus: state.getMenus.menus,
        logos: state.getLogos.logos
    }
}
export default connect(mapStateToProps)(Header02)
