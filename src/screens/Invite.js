import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import manwithspeaker from "../assets/manwithspeaker.svg";
import check from "../assets/check.svg";
import path from "../assets/path.svg";
import hover from "../assets/hover.svg";
import hand from "../assets/hand.svg";
import headphones from "../assets/headphones.svg";
import guywithsneaks from "../assets/guywithsneaks.svg";
import ladyinsweater from "../assets/ladyinsweater.svg";
import ps5 from "../assets/ps5.svg";
import { Fragment } from "react";

const Body = () => (
  <div className="text-mukta">
    <div className="flex justify-end">
      <div className="flex flex-col-reverse lg:flex-row items-center w-fourteenth">
        <div>
          <h1 className="font-extrabold text-5.1xl text-textshade text-left">
            INVITE FRIENDS, GET SHARED, WIN GIFTS
          </h1>
          <h3 className=" text-textash text-base text-justify mt-5 mb-12">
            Our Early users referral Program
          </h3>
          <p className=" text-textash text-base text-justify">
            For our early users community, we share a part of our company with
            you. When you sign up and invite your friends you'll both earn a
            shares reward. As soon as your friend signs up on the waitlist we'll
            credit each of you a share of spendyvest to your mobile app
            accounts. <br /> <br /> <br />
            Keep in mind: You can receive up to 100 shares in referrals and when
            you exceed, you qualify to win a gift like sweatshirts with joggers,
            headsets, PS5 and more so feel free to spread the word.
          </p>
        </div>
        <img src={manwithspeaker} alt="" />
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-4/5">
        <h1 className="font-extrabold text-5.1xl text-textshade text-left">
          HOW TO INVITE FRIENDS
        </h1>
        <h3 className=" text-textash text-base text-justify mt-5 mb-12">
          Follow these steps to refer your friends directly from the waitlist
        </h3>
        <div className="flex flex-col items-center lg:flex-row justify-around">
          <div className="justify-self-end">
            <span class=" bg-numbers text-white text-4xl font-bold py-3 px-6 rounded-secondary">
              1
            </span>
          </div>
          <div className="lg:w-1/4 h-full">
            <div className="w-tenth h-card flex justify-center items-center shadow-trackinglistCard rounded-sm">
              <div className="w-tenth h-subcard flex justify-center items-center shadow-trackinglistCard rounded-sm">
                <div className="w-tenth py-6 h-subsubcard  shadow-trackinglistCard rounded-sm px-3 flex flex-col items-center">
                  <img src={check} alt="" />
                  <h2>Congratulations!</h2>
                  <p className="text-textash3 text-light text-sm">
                    Thank you for signing up on the waitlist, you will get early
                    access to the app once it goes live. Enjoy a special reward
                    of early signup, refer your friends, and earn free shares of
                    Spendyvest.{" "}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-textash2 text-base">
              Make sure you have signed up on the waitlist.
            </p>
          </div>
          <div className="flex flex-col">
            <span class=" bg-numbers self-end text-white text-4xl font-bold py-3 px-6 rounded-secondary">
              2
            </span>
            <img src={path} alt="" />
          </div>
          <div className="lg:w-1/4 shadow-trackinglistCard rounded-sm">
            <div className="w-tenth h-card flex justify-center items-center shadow-trackinglistCard rounded-sm">
              <div className="w-tenth h-subcard flex justify-center items-center shadow-trackinglistCard rounded-sm">
                <div className="w-tenth py-6 h-subsubcard  shadow-trackinglistCard rounded-sm px-3 flex flex-col justify-center items-center">
                  <div className="flex justify-center">
                    <h2 className="text-textash3 w-sixteenth break-all text-center border border-textash3 rounded-lg my-3 px-2 py-4">
                      cbsdfcoishdxpok’qwk
                    </h2>
                  </div>
                  <div className="relative">
                    <button className="py-4 w-sixteenth rounded-lg bg-primary text-base text-white">
                      Copy referral code
                    </button>
                    <img className="absolute top-8 ml-14" src={hover} alt="" />
                  </div>
                  <img className="-mt-2 z-30" src={hand} alt="" />
                </div>
              </div>
            </div>
            <p className="text-textash3 text-light text-sm">
              Copy your referral code on the waitlist page or share directly to
              your contacts from the waitlist page.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <h1 className="text-3.5xl font-bold text-textshade">
            TO CHECK YOUR PROGRESS
          </h1>
          <p className="text-3xl mt-4 text-textash">
            Tap check standings to see if your position is increasing with your
            batch.
          </p>
          <h1 className="text-3.5xl mt-8 font-bold text-textshade">
            KEEP IN MIND
          </h1>
          <p className="text-3xl mt-4 text-textash">
            Your invites will need to successfully sign up and join the
            waitlist.
          </p>
        </div>
      </div>
    </div>
    <div className="flex w-full justify-center items-center bg-primary py-6 my-14">
      <div className="w-4/5 flex flex-col lg:flex-row  items-center justify-between">
        <h1 className="text-white text-5.1xl lg:w-eleventh font-extrabold text-center lg:text-left">
          GIFTS YOU CAN WIN REACHING A 100 INVITES
        </h1>
        <div className="grid grid-cols-2 lg:w-seventeenth gap-y-2">
          <img
            className=" border-4 border-white rounded-lg"
            src={guywithsneaks}
            alt=""
          />
          <img
            className=" border-4 border-white rounded-lg"
            src={ladyinsweater}
            alt=""
          />
          <img className=" border-4 border-white rounded-lg" src={ps5} alt="" />
          <img
            className=" border-4 border-white rounded-lg"
            src={headphones}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);

function Invite() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default Invite;
