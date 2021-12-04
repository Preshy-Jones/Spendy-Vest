import React from 'react';
import './About.scss';
import aboutPic from '../assets/aboutPic.png';
import pic3 from '../assets/pic3.png';
import pic2 from '../assets/pic2.png';

const About = () => {
    return(
        <div id= "home-container2">
            <div id="main-about-container">
                <div id="about-text">
                    <h1>About</h1>
                </div>
                <div id="about-image">
                    <img src={aboutPic} alt="icon" />
                </div>
            </div>
            <div id="second-section">
                <div id="graphic">
                    <img style={{width: '400px', height: '350px'}} src={pic3} alt="icon" />
                </div>
                <div id="texts">
                    <div id="texts2">
                        <div id="large">OWN A PIECE OF HAPPINESS EVERY TIME YOU SPEND</div>
                        <div id="small">
                            Your money gives you a piece of happiness and Spendyvest
                            helps you own a piece of it whenever you spend.<br /> Growing
                            your savings in bits by rounding up your daily spends and 
                            investing them to earn you interests daily in dollars.
                        </div>
                    </div>
                </div>
            </div>
            <div id="story">
                <div id="story-header">OUR STORY</div>
                <div id="story-content-top">
                    <div id="story-content">
                        Here's a backdrop of our story. In January 2021, we started off to build
                        a product,  it failed and didn't make it to the market. It was a sad one.  
                        Next, we got another idea for a product, we started building again and that 
                        failed too. Things were looking bad now that time and resources invested were 
                        all gone. But we didn't turn off the light yet, we headed to find the next one 
                        to build, August 2021, boom an idea came while we were discussing, people will 
                        love to save every time they spend. Yes. That was it, Spendyvest was birthed.
                    </div>
                </div>
            </div>
            <div id="story">
                <div id="story-header">OUR MISSION</div>
                <img style={{width: '80%', height: '400px', marginTop: '50px'}} src={pic2} alt="icon" />
            </div>
            <div id="story">
                <div id="story-header">OUR VISSION</div>
                <div id="story-content-top">
                    <div style={{fontSize:'25px', fontFamily:'Mukta', color:'#979797'}}>
                        Our VISION is to connect your everyday life making it easy for you to live, 
                        work and grow with excitement.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;