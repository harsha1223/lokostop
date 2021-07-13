import React, { Component } from 'react'

export class SignIn extends Component {
    render() {
        return (
            <div>
                <input className="signinput" type="email" placeholder="Email-address"/>
                <input className="signinput" type="text" placeholder="Password"/>
                <button className="forgotbutton">forgot password?</button>
                <button className="signButton">SIGN - IN</button>
            </div>
        )
    }
}

export default SignIn
