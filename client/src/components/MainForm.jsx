import React from "react";
import formCat from "./../img/main-page/formCat.png";
import "./../styles/main.css";

const MainForm = () => {
  return (
    <>
      <form className="main-form">
        <div className="record__form">
          <div className="main-form__cat">
            <img className="main-form-img" alt="" src={formCat} />
          </div>
          <div className="record__title">
            Ваш питомец заслуживает
            <br />
            самого лучшего
          </div>
          <div className="record__subtitle">
            Запишитесь на профессиональную консультацию прямо сейчас
          </div>
          <div className="record__inputs">
            <div className="record__input-group">
              <input
                autoComplete="off"
                placeholder=" "
                className="record-input"
                required
                name="recordName"
                type="text"
              />
              <label className="record-label">Ваше имя</label>
            </div>
            <div className="record__input-group">
              <input
                autoComplete="off"
                placeholder=" "
                className="record-input"
                required
                name="recordPhone"
                type="tel"
                pattern="\+7\d{10}"
              />
              <label className="record-label">Номер телефона</label>
            </div>
          </div>
          <div className="record__button-form">
            <button className="record__button-submit">
              Записаться на консультацию
            </button>
          </div>
          <div className="record__checkbox">
            <label>
              <input
                required
                className="record__checbox-agreement-real"
                type="checkbox"
                name="recordCheckbox"
              />
              <span className="record__checbox-agreement-custom"></span>
              Даю согласие на обработку данных
            </label>
          </div>
        </div>
      </form>
    </>
  );
};

export default MainForm;
