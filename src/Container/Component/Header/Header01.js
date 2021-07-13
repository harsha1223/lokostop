import "./Header01.css";
import { IoIosArrowForward, IoIosHeart } from "react-icons/io";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Header03.css";
import { connect } from "react-redux";
import Login from "./Login/Login";

class Header01 extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    const { categories } = this.state
    const setCategories = (root) => {
      if (root.childrenCategory.length == 0) {
        return (
          <Link
            style={{
              background: "transparent",
              color: "#1D1D1D",
              display: "flex",
              justifyContent: "space-between"
            }}
            className={"dropdown-item"}
            to={'/category/' + root.url}
          >
            {root.name}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {root.childrenCategory.length > 0 ? <IoIosArrowForward className="ForwardArrow" /> : ""}
          </Link>
        )
      }
      else return (
        <React.Fragment>
          <Link
            style={{
              background: "transparent",
              color: "#1D1D1D",
              display: "flex",
              justifyContent: "space-between"
            }}
            className={"dropdown-item"}
            to={'/category/' + root.url}
          >
            {root.name}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IoIosArrowForward className="ForwardArrow" />
          </Link>
          {root.childrenCategory.length > 0 ?
            <ul className="dropdown-menu dropdown-submenu">
              {root.childrenCategory.map((child, key) => {
                return <li key={key}>
                  {setCategories(child)}
                </li>
              })}
            </ul>
            : ""}
        </React.Fragment>
      )
    };
    this.props.categories.forEach((category) => {
      let tempData = {}
      tempData.content = setCategories(category);
      categories.push(tempData)
    });
    this.setState({ categories })
  }
  render() {
    return (
      <div className="Header_one">
        <div className="Header_one_left">
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FiMenu id="MenuIcon" />
              &nbsp;&nbsp; Browse categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {this.state.categories.map((category, key) => {
                return (
                  <li key={key}>
                    {category.content}
                  </li>
                )
              })}
            </ul>

          </div>
        </div>

        <div className="Header_one_centre">
          <div className="centre_first_part">
            <div className="dropdown">
              <button
                style={{ marginTop: "1.5%" }}
                className="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All categories
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {this.state.categories.map((category, key) => {
                  return (
                    <li key={key}>
                      {category.content}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="centre_second_part">
            <input type="text" placeholder="Enter your search key..." />
          </div>
          <div className="centre_third_part">
            <p style={{ marginTop: "0.878vw" }}>Search</p>
            <FiSearch id="search" />
          </div>
        </div>

        <div className="Header_one_right">
          <div className="Favorites">
            <IoIosHeart id="Heart" />
            <span id="count">0</span>
            <p>Favorites</p>
          </div>
          <Link to="/Cart">
            <div style={{ color: "#1D1D1D" }} className="cart">
              <FiShoppingCart id="Cart" />
              <span id="count">0</span>
              <p>Cart</p>
            </div>
          </Link>
          <div className="image_user">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.getCategories.categories,
  };
};
export default connect(mapStateToProps)(Header01);
