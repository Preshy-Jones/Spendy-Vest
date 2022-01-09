import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import congratulations from "../assets/congratulations.svg";
import { Fragment } from "react";

function Signupsuccess() {
  const Body = () => (
    <div className="flex justify-center font-mukta">
      <div className="flex flex-col items-center text-mukta">
        <img src={congratulations} alt="" />
        <h1 className="text-textshade font-extrabold text-4.5xl">
          Congratulations!!
        </h1>
        <h3 className="text-3.5xl text-textash">You are on the waitlist</h3>
        <p className="text-textash text-3xl text-center mt-14">
          A share gift has been added to your account. <br /> Get more shares
          and win an amazing gift. Go to the tracklist page
        </p>
        <div className="flex justify-center mt-12">
          <div className="bg-numbers px-8 py-2 rounded-md text-textshade font-bold text-xl mr-6">
            <h2>Your Position on the Waitlist</h2>
            <h2>0</h2>
          </div>
          <div className="bg-numbers px-8 py-2 rounded-md text-textshade font-bold text-xl mr-6">
            <h2>People ahead of you</h2>
            <h2>5000</h2>
          </div>
          <div className="bg-numbers px-8 py-2 rounded-md text-textshade font-bold text-xl">
            <h2>Shares collected</h2>
            <h2>0</h2>
          </div>
        </div>
        <div className="mt-10 w-fifteenth">
          <a
            className="bg-primary w-full text-white px-10 py-4"
            href="/tracklist"
          >
            Waitlist Tracklist
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default Signupsuccess;
