import React from 'react'
import '../style.css'
import 'font-awesome/css/font-awesome.min.css'

const Home = () =>{
    return(
       <div className ={'homeContainer'}>
           <div className={'homeTopCover'}>
               {/* <p className={'semiHeader'}> GLOG DAILY INSPIRATION </p> */}
                <h1>One Stop Daily Sensation, Inspiration and Tips</h1>
                <button type={'button'} className={'getStarted'}>Get Started</button>
           </div>
           <div className={'Topics'} >
               <div className={'TopicsHeading'}>
               <h3>Sharing, Reading, all of Technology News, Topics.
                    TechGo is The Digital Library In Your Hand
                </h3>
               </div>
               <p> Everything from the latests models of computers to the technological changes made all over the country are available.Including the different languages used to program different programs all available here on TechGo </p>
            <button type={'button'} className={'TopicsButton'}>Explore</button>
           <div className={'gridContainer'}>
               <div className={'grid1'}>
                    <h4>Science and Technology</h4>
                    <p>
                    It is a long established fact that a reader will be distracted
                    </p>
               </div>
               <div className={'grid2'}>
                    <h4>Different Languages</h4>
                    <p>
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>
               </div>
               <div className={'grid3'}>
               <h4>Innovations</h4>
               <p>
               Various versions have evolved over the years, sometimes by accident.
               </p>
               </div>
               <div className={'grid4'}>
                 <h4>Developments</h4>
                 <p>
                 Contrary to popular belief, Lorem Ipsum is not simply random text. 
                 </p>
               </div>
               <div className={'grid5'}>
                  <h4>Technology 401</h4>
                  <p>
                  There are many variations of passages of Lorem Ipsum available
                  </p>
               </div>
               <div className={'grid6'}>
                  <h4>Science of Today</h4>
                  <p>
                   you need to be sure there isn't anything embarrassing hidden in the middle of text
                  </p>
               </div>
               
           </div>
           </div>

       </div>
    )
}
export default Home