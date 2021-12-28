import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.scss";
import image1 from "../assets/landingImage1.png";
import play from "../assets/googlePlay.png";

const Body = ({ setEmail, email }) => (
  <div className="main">
    <div className="firstDiv">
      <div className="topTextContainer">
        <h2>
          SAVE IN BITS <br />
          EVERY
          {/* <h1 style={{ backgroundColor: "#F2C438" }}> */}
          TIME YOU SPEND.
          <br /> EARN DOLLARS DAILY.
        </h2>
        <h4>
          Take the stress out of your savings. Get to round off your everyday
          spendings and save in bits whenever you spend, investing them to grow
          daily in dollars.
        </h4>
        <h3>JOIN OUR WAITLIST TODAY</h3>
        <h4>
          Exclusive first access to app by early users, sign up now. Get a share
          of spendyvest You can get more shares when you invite your friends to
          join the waitlist and win an amazing gift.
        </h4>
        <form>
          <input type="text" id="name" name="name" placeholder="Full Name" />

          <input id="phone" name="phone" placeholder="Enter Phone Number." />
          <input
            id="phone"
            name="email"
            value={email}
            placeholder="Enter Email."
            onChange={(email) => setEmail(email.target.value)}
          />
          <div className="btnDiv">
            <button className="button1" type="button">
              <h3>Get In</h3>
            </button>
            <button type="button" className="button2">
              <h3>Check your standing</h3>
            </button>
          </div>

          <div className="btnDivApp">
            <button className="button1" type="button">
              <img src={play} className="imgBtn" />
            </button>
            <button type="button" className="button2">
              Check your standing
            </button>
            {/* second btn row */}
          </div>
        </form>
      </div>
      {/* <div className="topRightDiv">

      </div> */}
      <img
        src={image1}
        alt="landingImage1"
        loading="lazy"
        className="imageTop1"
      ></img>
    </div>

    <div className="cardContainer">
      <div className="card1">A</div>
      <div className="card2">B</div>
      <div className="card3">C</div>
    </div>
  </div>
);

function Home() {
  const [email, setEmail] = useState();
  return (
    <Fragment>
      <Header />
      <Body setEmail={setEmail} email={email} />
      <Footer />
    </Fragment>
  );
}

export default Home;
