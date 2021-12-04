import React from 'react';
import './FAQ.scss';
import pic4 from '../assets/pic4.png';

const FAQ = () => {
    return(
        <div id= "home-container3">
            <div id="main-about-container2">
                <div id="about-text2">
                    FREQUENTLY ASKED <br /> QUESTIONS
                    <div id="about-text3">
                        Some things you may want to know, if you can't find it, call us.
                    </div>
                </div>
                
                <div id="about-image2">
                    <img src={pic4} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default FAQ;