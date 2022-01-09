import React from "react";
import { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Body = () => (
  <div className="w-4/5 font-mukta">
    <div className="w-full">
      <h1 className="text-4.5xl font-semibold w-full text-left">
        REFERRAL TRACK LIST
      </h1>
      <div className="flex justify-end w-full relative">
        <div>
          <div className="absolute flex items-center ml-2 h-full">
            <svg
              className="w-4 h-4 fill-current text-primary-gray-dark"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search name here"
            className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          <div className="grid grid-cols-5 w-full">
            <th className="text-xs sm:text-xl font-bold text-textshade">
              POSITION
            </th>
            <th className="text-xs sm:text-xl font-bold text-textshade">
              NAME
            </th>
            <th className="text-xs sm:text-xl font-bold text-textshade">
              NUMBER OF REFERRALS
            </th>
            <th className="text-xs sm:text-xl font-bold text-textshade">
              SHARES COLLECTED
            </th>
            <th className="text-xs sm:text-xl font-bold text-textshade">
              RANKING
            </th>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm ">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
          <div className="grid grid-cols-5 w-full bg-white h-trackinglist mb-4 shadow-trackinglistCard rounded-sm">
            <h2 className="py-7 text-sm font-medium text-fifth">01</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">John Doe</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">5000</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">4567342</h2>
            <h2 className="py-7 text-sm font-medium text-fifth">1</h2>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3.5xl font-bold text-center my-3">
          Great! You’re on the waitlist
        </h1>
        <h2 className="text-xl text-textash2 text-center my-3">
          We are currently in closed alpha and onboarding early users daily!
        </h2>
        <div className="flex justify-center">
          <div className="bg-primary px-8 py-2 rounded-md text-white text-xl mr-6">
            <h2>People ahead of you</h2>
            <h2>5000</h2>
          </div>
          <div className="bg-primary px-8 py-2 rounded-md text-white text-xl mr-6">
            <h2>Shares collected</h2>
            <h2>0</h2>
          </div>
          <div className="bg-primary px-8 py-2 rounded-md text-white text-xl">
            <h2>Friends referred</h2>
            <h2>0</h2>
          </div>
        </div>
        <h1 className="text-3.5xl font-bold text-center mt-3">
          Want to move up the list and get more shares with a special gift?
        </h1>
        <h2 className="text-xl text-textash2 text-center my-3">
          Skip ahead by referring your friends!The more friends you invite, the
          more shares you earn and a chance to get a special gift
        </h2>
        <h1 className="text-xl">YOUR UNIQUE REFERENCE LINK</h1>
        <div>
          <div className="flex justify-center">
            <h2 className="text-textash3 w-fifteenth text-center border border-textash3 rounded-sm my-3 py-2">
              cbsdfcoishdxpok’qwkdpxohciub kjwdbc uih
            </h2>
          </div>
          <button className="py-2 w-fifteenth rounded-sm bg-primary text-base text-white">
            Copy referral code
          </button>
        </div>
        <h1 className="text-xl text-textash2 text-center mt-7 mb-3">
          Share on{" "}
        </h1>
        <div className="flex justify-center">
          <i class="fab text-3xl fa-twitter-square mr-4"></i>
          <i class="fab text-3xl fa-whatsapp-square mr-4"></i>
          <i class="fab text-3xl fa-facebook-square mr-4"></i>
          <i class="fab text-3xl fa-linkedin"></i>
        </div>
        <p className="text-xl text-textash2 text-center mt-7">
          Read more on our Invite and Earn Program{" "}
          <a className="text-textshade font-bold" href="">
            here
          </a>
        </p>
        <p className="text-xl text-textash2 text-center mt-7">
          You can always find your Referral link in your mail
        </p>
      </div>
    </div>
  </div>
);

function Tracklist() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default Tracklist;
