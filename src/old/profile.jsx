import React from 'react'
import './stylesheet.css'

const Profile = () =>{
    return(
        <div className="profile-container">
            <div className="profile1">
                <i className="fa fa-user fa-5x"></i>
                <p className="details">
                    <h1>Maria Fenyane</h1>
                    <h2>Software Developer</h2>
                    <h5>Contact Me</h5>
                </p>
            </div>
            <div className="profile2">
                <i className="fa fa-facebook fa-5x"></i>
                <p>
                    <h2>Facebook Acoount</h2>
                    https://facebook.com/Maria_Lerato</p>
            </div>
            <div className="profile4">
                <i className="fa fa-instagram fa-5x"> </i>
                    <p>
                        <h2>Instagram Account</h2>
                        <h6>fenyane02</h6>
                    </p>
            </div>
            <div className="profile3">
                <i className="fa fa-envelop fa-5x"></i>
                <p>
                  <h2>  GMAIL ACCOUNT</h2>
                  <h5>fenyane02@gmail.com</h5>
                </p>
            </div>
            <div className="profile5">
                <i className="fa fa-linkedin fa-5x"></i>
                <p>
                    <h2>Linked in</h2>
                    <h5>Maria Lerato</h5></p>            
            </div>
        </div>
    )
}
export default Profile