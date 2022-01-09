import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Fragment } from "react";
import telephone from "../assets/telephone.svg";
import { useState } from "react";

const Contact = () => {
  const Body = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    };
    return (
      <div className="font-mukta">
        <div className="flex justify-end">
          <div className="flex flex-col-reverse lg:flex-row items-center w-fourteenth">
            <div>
              <h1 className="font-extrabold text-5.1xl text-textshade text-left">
                SAY HI AND CHECK ON USE SOMETIMES
              </h1>
              <h1>{description}</h1>
              <p className=" text-textash text-base text-justify mt-6">
                We are always available to help you resolve your problems ones
                it reaches our desk.
              </p>
            </div>
            <img src={telephone} alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/5 flex justify-between">
            <div className="w-eight">
              <h1 className="text-4.5xl font-extrabold text-textshade text-justify">
                FOR MORE INFORMATION AND ENQUIRIES
              </h1>
              <div className="flex items-center mb-6 mt-8">
                <i class="far fa-envelope mr-6"></i>
                <h2 className="text-xl text-textshade font-bold">
                  Info@spendyvest.com
                </h2>
              </div>
              <div className="flex items-center">
                <i class="fas fa-phone mr-6"></i>
                <h2 className="text-xl text-textshade font-bold">
                  09126457929
                </h2>
              </div>
              <div className="flex mt-6">
                <i class="fab text-4xl text-primary fa-twitter-square mr-4"></i>
                <i class="fab text-4xl text-primary fa-whatsapp-square mr-4"></i>
                <i class="fab text-4xl text-primary fa-facebook-square mr-4"></i>
              </div>
            </div>
            <div className="w-eight">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex mb-6">
                  <input
                    className="h-12 w-full rounded-md border border-fourth mr-2 px-2 "
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    className="h-12 w-full rounded-md border border-fourth px-2"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <input
                  className="h-12 w-full mb-6 rounded-md border border-fourth px-2"
                  type="text"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  className="w-full rounded-md border border-fourth px-2"
                  placeholder="Description"
                  cols="30"
                  rows="7"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary rounded-md text-white mt-6 py-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
};

export default Contact;
