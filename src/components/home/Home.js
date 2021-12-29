import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./Home.scss";
import image1 from "../../assets/landingImage1.png";
import play from "../../assets/googlePlay.png";
import serviceflowImage from "../../assets/serviceflow.svg";
import reminderImage from "../../assets/reminderimage.svg";
import house from "../../assets/house.svg";
import savebutton from "../../assets/savebutton.svg";
import feather from "../../assets/feather_send.svg";
import moneybar from "../../assets/moneybar.svg";
import estate from "../../assets/estate.svg";
import icontoggle from "../../assets/Toggle.svg";
import phone from "../../assets/phone.svg";
import phonebg from "../../assets/phonebg.svg";

const Body = ({ setEmail, email }) => (
  <div className="main font-mukta">
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

    <div className="flex justify-center">
      <img src={serviceflowImage} />
    </div>

    {/* section */}
    <div className="flex bg-primary py-32 justify-center items-center">
      <div className="w-4/5 flex">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <img className="md:w-2/5" src={reminderImage} />
          <h1 className="md:w-2/5 text-4.5xl text-white font-mukta font-extrabold">
            PUT A REMINDER OF YOUR EVERYDAY TRANSACTIONS INTO SAVINGS AND EARN
            IN DOLLARS DAILY
          </h1>
        </div>
      </div>
    </div>
    <div>
      <div className="flex justify-center">
        <div className="flex w-4/5">
          <h1 className="text-4.5xl md:w-2/5 text-left text-textshade font-mukta font-extrabold ">
            IN THREE SIMPLE STEPS, YOU START USING THE APP
          </h1>
        </div>
      </div>
      <div className="cardContainer">
        <div className="card  shadow-bigCard flex flex-col justify-between items-start py-6 px-8">
          <div className="flex flex-col justify-between items-start h-full">
            <span class=" bg-primary text-white text-2xl py-0.5 px-3.5 rounded-secondary">
              1
            </span>
            <h2 className="text-xl font-bold my-4">Link your bank account</h2>
            <p className="text-left text-base font-normal text-textash">
              Download the mobile app and link your already existing bank
              account(s).
            </p>
            <div className="flex w-full shadow-card items-start pt-1 mt-28">
              <img src={house} alt="" />
              <h2 className="text-base text-textash ml-4 mr-auto">
                Spendyvest Bank |
              </h2>
              <div>
                <img src={savebutton} alt="" />
                <img src={feather} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="card  shadow-bigCard flex flex-col justify-between items-start py-6 px-8">
          <div className="flex flex-col justify-between items-start h-full">
            <span class=" bg-primary text-white text-2xl py-0.5 px-3.5 rounded-secondary">
              2
            </span>
            <h2 className="text-xl font-bold my-4">Set a Roundup</h2>
            <p className="text-left text-base font-normal text-textash">
              Select your preferred roundups for whenever you spend from your
              bank account it could be to the nearest tenth or hundredth.
            </p>
            <div className="flex w-full shadow-card items-start pt-1 mt-28">
              <img className="mr-7" src={moneybar} alt="" />
              <div className="pt-4">
                <img src={savebutton} alt="" />
                <img src={feather} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="card  shadow-bigCard flex flex-col justify-between items-start py-6 px-8">
          <div className="flex flex-col justify-between items-start h-full">
            <span class=" bg-primary text-white text-2xl py-0.5 px-3.5 rounded-secondary">
              3
            </span>
            <h2 className="text-xl font-bold my-4">Invest your funds</h2>
            <p className="text-left text-base font-normal text-textash">
              Select your choice asset to invest your funds in the app, the app
              rounds up your every spendings to your preferred roundups and
              deducts it, investing them into your choice asset growing daily in
              dollars.
            </p>
            <div className="flex w-full shadow-card items-start pt-1 mt-28">
              <img src={estate} alt="" />
              <h2 className="text-base text-textash ml-4 mr-auto">
                Real estate
              </h2>
              <div>
                <img src={icontoggle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div className="flex">
          <div>
            <h1 className="text-2xl text-textash">
              GROW YOUR SAVINGS WHILE SPENDING
            </h1>
            <p className="text-4.5xl font-extrabold">
              KEEP A SMALL CHANGE AFTER YOU SPEND AND GROW YOUR SAVINGS, EARNING
              YOU INTEREST DAILY IN DOLLARS
            </p>
          </div>
          <div>
            <img src={phone} alt="" />
            <img src={phonebg} alt="" />
          </div>
        </div>
      </div>
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
