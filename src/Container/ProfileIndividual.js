import React, { Component } from 'react'
import Header from './Component/Header/Header'
import Header01 from './Component/Header/Header01';
import ProfileIndividualfirstbox from './Component/ProfileIndividualfirstbox';
import './ProfileIndividual.css'
export class ProfileIndividual extends Component {
    render() {
        return (
            <div>
                <Header01></Header01>
                <Header></Header>
                <div className="find_by_category_box">
                    <p className="most_viewd_text">MY PROFILE</p>
                    <hr  style={{marginLeft:'-3vw'}} id="line_blogs"></hr>
                </div>
                <div className="profileOuterMainBOx">
                    <ProfileIndividualfirstbox/>
                </div>
            </div>
        )
    }
}

export default ProfileIndividual
