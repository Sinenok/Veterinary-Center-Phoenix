import React from "react";
import HeaderBanner from "../components/HeaderBanner";
import photo11 from "./../img/about page/about 11.png";
import photo12 from "./../img/about page/about 12.png";
import photo13 from "./../img/about page/about 13.png";

const AboutClinicPage = () => {
  const about = "О нас";
  return (
    <div className="AboutClinicPage">
      <div className="AboutClinicPage-wrapper">
        <HeaderBanner headTitle={about} />
        <div className="about-body">
          <div className="about-body__wraper">
            <div className="about-body__titles">
              Мы - многопрофильный
              <br />
              лечебно-диагностический
              <br />
              центр здоровья и репродукции животных.
            </div>
            <div className="multidisciplinary about-body__content">
              <div className="multidisciplinary__item">
                <img className="multidisciplinary-img" src={photo11} alt="" />
              </div>
              <div className="multidisciplinary__item">
                Наша цель - обеспечить оптимальное здоровье и благополучие ваших
                питомцев. В нашем центре мы объединили несколько важных
                направлений, чтобы предоставить вам все необходимое в одном
                месте.
              </div>
              <div className="multidisciplinary__item">
                <img className="multidisciplinary-img" src={photo12} alt="" />
              </div>
              <div className="multidisciplinary__item">
                <img className="multidisciplinary-img" src={photo13} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClinicPage;
