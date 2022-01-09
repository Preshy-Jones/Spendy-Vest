import React from "react";
import "./FAQ.scss";
import pic4 from "../../assets/pic4.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FAQ = () => {
  const [showFAQ, setShowFAQ] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  const Body = () => (
    <div id="home-container3" className="font-mukta">
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
      <div className="flex w-full justify-center mt-24">
        <div className="w-4/5">
          <div className="w-full shadow-trackinglistCard mb-4 ">
            <div
              onClick={() => setShowFAQ({ ...showFAQ, one: !showFAQ["one"] })}
              className="flex w-full items-center justify-between py-3 px-2 border-b border-divider rounded-third"
            >
              <h6 className="text-2.1xl  font-bold text-textshade">
                What is SpendyVest App?
              </h6>
              <i
                className={`fas ${
                  showFAQ.one ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </div>
            {showFAQ.one && (
              <motion.p
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                className="mt-1 py-3 px-2 rounded-third"
              >
                SpendyVest app helps you save in bits, whenever you spend by
                rounding up your daily spendings and investing it.
              </motion.p>
            )}
          </div>
          <div className="w-full shadow-trackinglistCard mb-4 ">
            <div
              onClick={() => setShowFAQ({ ...showFAQ, two: !showFAQ["two"] })}
              className="flex w-full items-center justify-between py-3 px-2 border-b border-divider rounded-third"
            >
              <h6 className="text-2.1xl  font-bold text-textshade">
                How does it work?
              </h6>
              <i
                className={`fas ${
                  showFAQ.two ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </div>
            {showFAQ.two && (
              <motion.p
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                className="mt-1 py-3 px-2 rounded-third"
              >
                You download the app to link your existing bank account(s), you
                set preferred roundups ( either to the nearest tenth or
                hundredth) for whenever you spend and an asset to invest the
                roundups. When you spend from your bank account, the app gets
                debits confirmations and rounds it up to your roundup setting,
                deducting it and investing it in your chosen asset.<br></br> An
                example: <br></br>
                You bought Airtime from your bank for #400. The app detects your
                spending of #400 with your debit confirmation and immediately
                Rounds it off to your preferred roundup setting, assuming the
                nearest hundredth, which is #500. It substracts the Roundup
                amount #500 from your actual spending for the airtime which is
                #400 = #100. Checks your bank balance to see if you have #100
                spare, if yes, you have, it deducts it and invests in your
                chosen dollar asset.
              </motion.p>
            )}
          </div>
          <div className="w-full shadow-trackinglistCard mb-4 ">
            <div
              onClick={() =>
                setShowFAQ({ ...showFAQ, three: !showFAQ["three"] })
              }
              className="flex w-full items-center justify-between py-3 px-2 border-b border-divider rounded-third"
            >
              <h6 className="text-2.1xl  font-bold text-textshade">
                What is Lock Roundups and how does it work?
              </h6>
              <i
                className={`fas ${
                  showFAQ.three ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </div>
            {showFAQ.three && (
              <motion.p
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                className="mt-1 py-3 px-2 rounded-third"
              >
                {" "}
                Lock roundups allow you to grow your savings account for some
                time without touching your money, and it can be for 30days,
                90days, or 120days and you will earn extra money each month you
                lock your funds to grow.
              </motion.p>
            )}
          </div>

          <div className="w-full shadow-trackinglistCard mb-4 ">
            <div
              onClick={() => setShowFAQ({ ...showFAQ, four: !showFAQ["four"] })}
              className="flex w-full items-center justify-between py-3 px-2 border-b border-divider rounded-third"
            >
              <h6 className="text-2.1xl  font-bold text-textshade">
                How do I withdraw my funds even when it's locked?
              </h6>
              <i
                className={`fas ${
                  showFAQ.four ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </div>
            {showFAQ.four && (
              <motion.p
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                className="mt-1 py-3 px-2 rounded-third"
              >
                You can best withdraw your funds with interests once it reaches
                the lock time you set. In case you want to withdraw it before
                then you will be charged a fee for breaking the lock.
              </motion.p>
            )}
          </div>
          <div className="w-full shadow-trackinglistCard mb-4 ">
            <div
              onClick={() => setShowFAQ({ ...showFAQ, five: !showFAQ["five"] })}
              className="flex w-full items-center justify-between py-3 px-2 border-b border-divider rounded-third"
            >
              <h6 className="text-2.1xl  font-bold text-textshade">
                Can I withdraw my money anytime?
              </h6>
              <i
                className={`fas ${
                  showFAQ.five ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </div>
            {showFAQ.five && (
              <motion.p
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                className="mt-1 py-3 px-2 rounded-third"
              >
                Yes, you can withdraw your Roundups with your interests earned
                at any time. With the lock, you can only withdraw after the lock
                time is over, or you will be charged a fee to break the lock and
                access the funds
              </motion.p>
            )}
          </div>
          <div className="w-full shadow-trackinglistCard mb-4 ">
            <div
              onClick={() => setShowFAQ({ ...showFAQ, six: !showFAQ["six"] })}
              className="flex w-full items-center justify-between py-3 px-2 border-b border-divider rounded-third"
            >
              <h6 className="text-2.1xl  font-bold text-textshade">
                Is money safe in Spendyvest?
              </h6>
              <i
                className={`fas ${
                  showFAQ.six ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </div>
            {showFAQ.six && (
              <motion.p
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                className="mt-1 py-3 px-2 rounded-third"
              >
                Yes. We operate in partnership with a fully established asset
                management partner who handles all our funds. They are fully
                registered and licensed by the Securities and Exchange
                Commission (SEC). So yes, your money is safe with us
                <span className="font-medium">
                  So yes, your money is safe with us{" "}
                </span>
              </motion.p>
            )}
          </div>
          <div className="w-full shadow-trackinglistCard mb-4 ">
            <div
              onClick={() =>
                setShowFAQ({ ...showFAQ, seven: !showFAQ["seven"] })
              }
              className="flex w-full items-center justify-between py-3 px-2 border-b border-divider rounded-third"
            >
              <h6 className="text-2.1xl  font-bold text-textshade">
                How many bank accounts can I link with the app?
              </h6>
              <i
                className={`fas ${
                  showFAQ.seven ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </div>
            {showFAQ.seven && (
              <motion.p
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                className="mt-1 py-3 px-2 rounded-third"
              >
                As many banks account as you would love to and it's free(no
                charges).
                <span className="font-medium">
                  Connecting my bank account(s) to the app does SpendyVest have
                  access to my banking information and my money?
                </span>
                SpendyVest does not store or keep your bank detaíls. The app
                only works with your daily debits confirmations from your bank
                to deduct and save on your spendings.
              </motion.p>
            )}
          </div>
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
};

export default FAQ;
