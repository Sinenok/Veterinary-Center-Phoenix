import React from "react";
import "./../styles/main.css";
import mainBanner from "./../img/main-page/banner-headr.png";

function BodyMainPage() {
  return (
    <div className="BodyMainPage">
      <header className="header">
        <div className="container">
          <div className="header__title"></div>
          <div className="header__sub-title"></div>
          <div className="header__main-banner">
            <img className="main-banner-img" alt="" src={mainBanner} />
          </div>
        </div>
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default BodyMainPage;
