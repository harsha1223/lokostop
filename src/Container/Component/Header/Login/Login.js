import React, { Component } from 'react'
import './Login.css'
import SignIn from './SignIn'
import SignUp from './SignUp'
export class Login extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn imagevl" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <img
                        alt="Reload"
                        className="image_userimage"
                        style={{ cursor: "pointer" }}
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    ></img>
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title logoval" id="staticBackdropLabel">Lokostop</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <p className="promiseword">We promise products from best brands with assurance.</p>
                            <div className="modal-body">
                                <ul className="nav nav-pills mb-3 signval" id="pills-tab" role="tablist">
                                    <li className="nav-item " role="presentation">
                                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Sign In</button>
                                    </li>
                                    <li className="nav-item " role="presentation">
                                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sign Up</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <SignIn/>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <SignUp/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer googleface">
                                <p className="orWord">OR</p>
                                <button type="button" class="btn signgoogle" >Sign in with google</button>
                                <button type="button" class="btn signface">Sign in with Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
