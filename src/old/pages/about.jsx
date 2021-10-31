import React from 'react'
import k from './maria.jpg'
import 'font-awesome/css/font-awesome.min.css'
import './style.css'
const About = () => {
    return (
        <div className="container">
             <div class="section group">
	                <div class="col span_1_of_2">
	                </div>
	                <div class="col span_1_of_2">
	                </div>
                </div>
            <container className="head-container">
               
                <div className="left-container">
                    <div class="left-head">
                        <img src={k} alt="me" />
                    </div>
                        <div class="personal">
                            <h2>Contact</h2>
                            <i class="fa fa-phone"></i>0793879978
                          <br />  <i class="fa fa-envelope"></i>fenyane02@gmail.com
                            <br />  <i class="fa fa-map-marker"></i>287 Zone Q Lebowakgomo
                        </div>
                        <div class="social">
                            <h2>Social</h2>
                            <i class="fa fa-facebook"></i> /Maria_Lerato/
                            <br /> <i class="fa fa-linkedin"></i> Maria Lerato
                            <br /> <i class="fa fa-instagram"></i> fenyane02
                        </div>
                    </div>

                    <div class="right-container">
                        <div class="heading">
                            <h1>Maria Fenyane</h1>
                            <h2>
                                Software Developer
                            </h2>
                        </div>
                        <div class="summary">

                            <div class="sum"> <h2>About Me</h2></div>
                            <p>I am a Software Developer, proficient in HTML5,CSS3 and JavaScript. Able to create applications using a JavaScript library Reactjs. Have knowledge in VB.net and Python programming. Able to create web applications and web sites.
                                Trained Software Development at mlab south africa in Codetribe academy</p>
                        </div>
                        <div class="experience">
                            <h2>Work Experience</h2>
                            <div class="work-container">
                                <div class="date">
                                    June 2021 -
                                 <br />    Nov 2021
                                </div>
                                <div class="work">
                                    <h3>Software Development Trainee</h3>
                                    <h5>Codetribe mlab South Africa</h5>
                                    <p>Created websites and web applications using Reactjs. Learnt Scrum and Soft-skills</p>
                                </div>
                            </div>
                        </div>
                        <div class="education">
                            <h2>Education</h2>
                            <div class="edu-container">
                                <div class="edu-date">
                                    <p class="date">2013 - 2017 </p>
                                    <p class="college">2018 - 2020</p>
                                </div>
                                <div class="edu">
                                    <p class="high">
                                        <h4>Derek Kobe Senior Secondary School</h4>
                                        Grade 12
                                    </p>


                                    <p class="college-det">
                                        <h4> Capricorn Tvet college</h4>
                                        NC(V) Level 4 in ITC
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="reference">
                            <h2>References</h2>
                            <h4>Tyson Moyahabo Motlhabeng</h4>
                            <p class="code"> CodeTribe Facilitator Mlab Limpopo
                                <br /> tyson@mlab.co.za</p>
                            <br />   <h4>PC Mothata</h4>
                            <p class="system">System Analysis And Design Lecturer Capricorn Tvet college
                                <br />  0714262900</p>
                        </div>
                        <div class="skills">
                            <h2>Skills</h2>
                            <i class="fa fa-html5"></i> HTML5
                            <br /> <i class="fa fa-css3"></i> CSS3
                            <br /> <i class="fa fa-js-square"></i> JavaScript
                            <br /><i class="fa fa-file"></i> MS Word
                            <br /> <i class="fa fa-database"></i> Ms Access
                        </div>
                        <div class="hobbies">
                            <h2>Hobbies</h2>
                            <i class="fa fa-music"></i> Music
                            <br />  <i class="fa fa-book"></i> Novels
                            <br />  <i class="fa fa-cookie-alt"></i> Cooking
                        </div>
                    </div>
        </container>
    </div>
        
    )
}
export default About