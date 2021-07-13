import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <div>
                <input className="signinput" type="text" placeholder="Full Name"/>
                <input className="signinput" type="email" placeholder="Email-address"/>
                <input className="signinput" type="text" placeholder="Enter Password"/>
                <input className="signinput" type="text" placeholder="Re-enter password"/>
                <button className="signButton">SIGN - UP</button>
            
            </div>
        )
    }
}

export default SignUp
