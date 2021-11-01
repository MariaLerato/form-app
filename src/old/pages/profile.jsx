import React from 'react'
import '../stylesheet.css'

const Profile = () =>{
    return(
        <div className="profile-container">
            {/* <div class="section group"> */}
	            {/* <div className="menu-container"> */}
                <div class="section group">
	                <div class="col span_1_of_2">
	                    {/*This is column 1 */}
	                </div>
                    <div class="col span_1_of_2">
	                    {/* This is column 2 */}
	                </div>    
               
                </div>
            <div className="profile1">
                <i className="fa fa-user fa-4x"></i>
                <p className="details">
                    <h1>Maria Fenyane</h1>
                    <h2>Software Developer</h2>
                    <h5>Contact Me</h5>
                </p>
            </div>
            <div className="profile2">
                <i className="fa fa-facebook fa-4x"></i>
                <p>
                    <h2>Facebook Acount</h2>
                    https://facebook.com/Maria_Lerato</p>
            </div>
            <div className="profile4">
                <i className="fa fa-github fa-5x"> </i>
                    <p>
                        <h2>Github Account</h2>
                        <h6>https://github.com/MariaLerato</h6>
                    </p>
            </div>
            
            <div className="profile3">
            <i className="fa fa-envelope fa-3x"></i>
                <p>
                  <h2>  GMAIL ACCOUNT</h2>
                  <h6>fenyane02@gmail.com</h6>
                </p>
            </div>
            <div className="profile5">
                <i className="fa fa-linkedin fa-3x"></i>
                <p>
                    <h2>Linked in</h2>
                    <h6>https://linkedin.com/MariaLerato</h6></p>            
            </div>
            </div>
        // </div>
    )
}
export default Profile