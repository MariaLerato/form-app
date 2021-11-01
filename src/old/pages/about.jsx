import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import '../style.css'
import M from '../../components/images/me-snap.jpg'
const About = () => {
    return (
        <div className="container">
            <div class="section group">
                <div class="col span_1_of_2">
                </div>
                <div class="col span_1_of_2">
                </div>
            </div>
            <div className={'resumeContainer'}>
                <div className={'resumeHeader'}>
                    <div className={'img'}>
                        <img src={M} alt={'me'} height={250} />
                    </div>
                    <div className={'nameResume'}>
                        <h1>Maria Fenyane</h1>
                        <p>Application Developer</p>
                    </div>
                </div>
                <div className={'resumeAllContainer'}>
                    <div className="personal">
                        <div className='personalContainer'>
                            <h2>Contact</h2>
                            <i className="fa fa-phone"></i>0793879978
                            <br />  <i className="fa fa-envelope"></i>fenyane02@gmail.com
                            <br />  <i className="fa fa-map-marker"></i>287 Zone Q Lebowakgomo
                        </div>
                        <div className="social">
                            <h2>Social</h2>
                            <i className="fa fa-facebook"></i> /Maria_Lerato/
                            <br /> <i className="fa fa-linkedin"></i> Maria Lerato
                            <br /> <i className="fa fa-instagram"></i> fenyane02
                        </div>
                    </div>
                    <div className={'resumeAbout'}>
                        <div className="summary">

                            <div className="sum"> <h2>About Me</h2></div>
                            <p>I am a Application Developer, proficient in HTML5,CSS3 and JavaScript. Able to create applications using a JavaScript library React Native. Have knowledge in VB.net and Python programming.
                                Trained Application Development at mlab south africa in Codetribe academy</p>
                        </div>
                        <div class="education">
                            <h2>Education</h2>
                            <div class="edu-container">
                                <div class="edu-date">
                                    {/* <p class="date">2013 - 2017 </p> */}
                                    <p class="college">2018 - 2020</p>
                                </div>
                                <div class="edu">
                                    <p class="college-det">
                                        <h4> Capricorn Tvet college</h4>
                                        NC(V) Level 4 in ITC
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="reference">
                            <h2>References</h2>
                            <h4>Tyson Moyahabo Motlhabeng</h4>
                            <p className="code"> CodeTribe Facilitator Mlab Limpopo
                                <br /> tyson@mlab.co.za</p>
                            <br />  <h4>PC Mothata</h4>
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
                </div>
            </div>
        </div>

    )
}
export default About