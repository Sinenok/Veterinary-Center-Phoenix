import React from "react";
import "./../styles/main.css";
import MainForm from "./MainForm";

const EnrollComponent = () => {
  return (
    <div id="record-form" className="record">
      <div className="record__wrapper">
        <div className="record__main-title main-title">
          <div className="record__button buttons-category">
            <button className="buttons-category__enroll">Записаться</button>
          </div>
          <div className="record-title-device-wrapper">
            <div className="record__title-device body-titles">
              Ваш питомец заслуживает{" "}
              <span className="title-span">самого лучшего</span>
            </div>
            <div className="record__subtitle-device">
              Запишитесь на профессиональную консультацию прямо сейчас
            </div>
          </div>
          <MainForm />
        </div>
      </div>
    </div>
  );
};

export default EnrollComponent;
