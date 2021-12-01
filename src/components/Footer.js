import React, { useEffect, useState } from 'react';
import './Footer.scss';
import apple from '../assets/apple.png';
import play from '../assets/play.png';
import company from '../assets/company.png';
import whitewhats from '../assets/whitewhats.png';
import whiteTwitter from '../assets/whiteTwitter.png';
import whiteFacebook from '../assets/whiteFacebook.png';

const Footer = () => {

    const [width, setWidths] = useState(false);

    const getDimensions = () => {
        const windowWidth = document.documentElement.clientWidth;
        windowWidth > 700? setWidths(true) : setWidths(false);
    }

    useEffect(() => {
        const windowWidth = document.documentElement.clientWidth;
        windowWidth > 700? setWidths(true) : setWidths(false);
        window.addEventListener("resize", getDimensions);
    });

    return(
        <div id='main-container'>
            <div id="inner-header">
                <div id='name'>
                    <div id='save'>
                       <div id="bigger-text">
                           SAVE & INVEST WHILE <br/> YOU SPEND &PURCHASE
                       </div>
                    </div>
                    <div id="plane">
                        Grow your savings in bits whenever you spend, earn more
                        in dollar daily.
                    </div>
                </div>
                <div id='store'>
                    <div id="store-container">
                        <div className="stores">
                            <img className="plays" src={play} alt="icon" />
                        </div>
                        <div className="stores">
                            <img className="plays" src={apple} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="company-details">
                {width&&<div className="details-container">
                    <img style={{width: '200px', height: '151px'}} src={company} alt="icon" />
                </div>}

                <div className="details-container">
                    <div className="seconds">
                        <div className='header-name'>Company</div>
                    </div>
                    <div className="second-container">
                        <div style={{width: '30px', borderBottom:'2px solid #F2C438'}} className="itemss">Home</div>
                        <div style={{width: '30px', borderBottom:'2px solid #F2C438'}} className="itemss">About</div>
                        <div style={{width: '60px', borderBottom:'2px solid #F2C438'}} className="itemss">Contact Us</div>
                        <div style={{width: '25px', borderBottom:'2px solid #F2C438'}} className="itemss">FAQ</div>
                    </div>
                </div>

                {!width&&<div className="details-container">
                    <div id="secondss">
                        <div className='header-name'>Get in touch</div>
                    </div>
                    <div id="second-containers">
                        <div style={{width: '100%'}} className="itemsss">
                            for partnership and enquiries
                        </div>
                        <div style={{width: '100%', fontWeight:'800', marginTop:'20px'}} className="itemsss">
                            info@spendyvest.com
                        </div>
                        <div id='social'>
                            <div id="cont">
                                <img style={{width: '25px', marginRight:'10px', height: '25px'}} src={whiteTwitter} alt="icon" />
                                <img style={{width: '25px', marginRight:'10px', height: '25px'}} src={whitewhats} alt="icon" />
                                <img style={{width: '25px', marginRight:'10px', height: '25px'}} src={whiteFacebook} alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>}

                <div className="details-container">
                    <div className="seconds">
                        <div className='header-name'>Products</div>
                    </div>
                    <div className="second-container">
                        <div style={{width: '100%'}} className="itemss">
                            Invite friends and earn
                        </div>
                    </div>
                </div>
                {width&&<div className="details-container">
                    <div className="seconds">
                        <div className='header-name'>Get in touch</div>
                    </div>
                    <div className="second-container">
                        <div style={{width: '100%'}} className="itemss">
                            for partnership and enquiries
                        </div>
                        <div style={{width: '100%', fontWeight:'800'}} className="itemss">
                            info@spendyvest.com
                        </div>
                        <div id='social'>
                            <div id="cont">
                                <img style={{width: '25px', marginRight:'10px', height: '25px'}} src={whiteTwitter} alt="icon" />
                                <img style={{width: '25px', marginRight:'10px', height: '25px'}} src={whitewhats} alt="icon" />
                                <img style={{width: '25px', marginRight:'10px', height: '25px'}} src={whiteFacebook} alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Footer;