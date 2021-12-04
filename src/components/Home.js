import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.scss";

const Body = () => (
  <div className="main">
    <p className="topLefttext1">
      SAVE IN BITS <br />
      EVERY
      {/* <h1 style={{ backgroundColor: "#F2C438" }}> */}
      TIME YOU SPEND.
      <br /> EARN DOLLARS DAILY.
    </p>
    <div className="topRightDiv"></div>
  </div>
);

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
