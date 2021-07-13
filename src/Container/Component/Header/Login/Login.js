import React, { Component } from "react";
import { connect } from "react-redux";
import "./Login.css";
import SignUp from "./SignUp";
import { loginUser } from "../../../../Redux/Actions/UserActions";
class Login extends Component {
  state = {
    data: {
      Email: "",
      Password: "",
    },
  };
  setData = (key, val) =>{
    const {data} = this.state;
    data[key] = val;
    this.setState({data})
  }
  signIn = () =>{
    this.props.loginUser(this.state.data.Email, this.state.data.Password);
  }
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn imagevl"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <img
            alt="Reload"
            className="image_userimage"
            style={{ cursor: "pointer" }}
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          ></img>
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-keyboard="false"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title logoval" id="staticBackdropLabel">
                  Lokostop
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p className="promiseword">
                We promise products from best brands with assurance.
              </p>
              <div className="modal-body modalPadding">
                <ul
                  className="nav nav-pills mb-3 signval"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item " role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Sign In
                    </button>
                  </li>
                  <li className="nav-item " role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Sign Up
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div>
                      <input
                        className="signinput"
                        name="Email"
                        type="text"
                        placeholder="Email-address"
                        value={this.state.data.Email}
                        onChange={(e)=>this.setData(e.target.name, e.target.value)}
                      />
                      <input
                        className="signinput"
                        name="Password"
                        type="password"
                        placeholder="Password"
                        value={this.state.data.Password}
                        onChange={(e)=>this.setData(e.target.name, e.target.value)}
                      />
                      <button className="forgotbutton">forgot password?</button>
                      <button className="signButton"  type="submit" onClick={(e)=>{
                          e.preventDefault();
                          this.signIn()
                      }}>SIGN - IN</button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <SignUp />
                  </div>
                </div>
              </div>
              <div className="modal-footer googleface">
                <p className="orWord">OR</p>
                <button type="button" className="btn signgoogle">
                  Sign in with google
                </button>
                <button type="button" className="btn signface">
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.loginUser.user,
  };
};
export default connect(mapStateToProps, { loginUser })(Login);
