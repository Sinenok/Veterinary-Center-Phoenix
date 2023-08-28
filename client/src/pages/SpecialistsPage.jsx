import React from "react";
import "./../styles/main.css";
// import specialistOrlova from "./../img/main-page/specialists/Orlova.png";
import specialistOrlova from "./../img/main-page/specialists/Orlova.png";
import specialistMager from "./../img/main-page/specialists/Mager.png";
import specialistOrlov from "./../img/main-page/specialists/Orlov.png";
import specialistMikhailova from "./../img/main-page/specialists/Mikhailova.png";
import specialistKhusnutdinova from "./../img/main-page/specialists/Khusnutdinova.png";
import iconPaw from "./../img/main-page/specialists/paw.svg";
import Specialists from "../components/Specialists";
import HeaderBanner from "../components/HeaderBanner";

const SpecialistsPage = () => {
  const specialists = "Специалисты";
  return (
    <div className="SpecialistsPage">
      <div className="SpecialistsPage-wrapper">
        <HeaderBanner headTitle={specialists} />
        <Specialists />
      </div>
    </div>
  );
};

export default SpecialistsPage;
