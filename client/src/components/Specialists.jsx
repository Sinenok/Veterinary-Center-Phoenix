import React from "react";
import "./../styles/main.css";
// import specialistOrlova from "./../img/main-page/specialists/Orlova.png";
import specialistOrlova from "./../img/main-page/specialists/Orlova.png";
import specialistMager from "./../img/main-page/specialists/Mager.png";
import specialistOrlov from "./../img/main-page/specialists/Orlov.png";
import specialistMikhailova from "./../img/main-page/specialists/Mikhailova.png";
import specialistKhusnutdinova from "./../img/main-page/specialists/Khusnutdinova.png";
import iconPaw from "./../img/main-page/specialists/paw.svg";
import { useNavigate } from "react-router-dom";

const Specialists = () => {
  const navigate = useNavigate();
  const aboutHandleClick = (value) => {
    window.scroll(0, 0);
    navigate(`/${value}`);
  };
  return (
    <>
      <div className="in-safe-hands">
        <div className="in-safe-hands__wrapper">
          <div className="in-safe-hand__main-title main-title">
            <div className="in-safe-hand__button buttons-category">
              <button
                onClick={() => aboutHandleClick("specialists")}
                className="buttons-category__specialists"
              >
                Специалисты
              </button>
            </div>
            <div className="in-safe-hand__title body-titles">
              Ваш питомец
              <br />в <span className="title-span">надежных</span> руках
            </div>
          </div>
          <div className="specialists-cards">
            <div className="specialists-cards__wrapper">
              <div className="specialists-cards__photo photo">
                <img className="photo-img" alt="" src={specialistOrlova} />
              </div>
              <div className="specialists-cards__info">
                <div className="specialists-cards__title">
                  Орлова Мария Николаевна
                </div>
                <div className="specialists-cards__desctription">
                  Главный ветеринарный врач Центра, репродуктолог- неонатолог,
                  специалист ультразвуковой диагностики
                </div>
              </div>
            </div>
            <div className="specialists-cards__wrapper">
              <div className="specialists-cards__photo photo">
                <img className="photo-img" alt="" src={specialistMager} />
              </div>
              <div className="specialists-cards__info">
                <div className="specialists-cards__title">Магер Алиса</div>
                <div className="specialists-cards__desctription">
                  Анестезиолог
                </div>
              </div>
            </div>
            <div className="specialists-cards__wrapper">
              <div className="specialists-cards__photo photo">
                <img className="photo-img" alt="" src={specialistOrlov} />
              </div>
              <div className="specialists-cards__info">
                <div className="specialists-cards__title">
                  Орлов Павел Георгиевич
                </div>
                <div className="specialists-cards__desctription">
                  Ветеринарный врач-кардиолог, хирург, ортопед, специалист
                  ультразвуковой диагностики, генеральный директор
                </div>
              </div>
            </div>
            <div className="specialists-cards__wrapper">
              <div className="specialists-cards__photo photo">
                <img className="photo-img" alt="" src={specialistMikhailova} />
              </div>
              <div className="specialists-cards__info">
                <div className="specialists-cards__title">
                  Михайлова Светлана
                </div>
                <div className="specialists-cards__desctription">Грумер</div>
              </div>
            </div>
            <div className="specialists-cards__wrapper">
              <div className="specialists-cards__photo photo">
                <img
                  className="photo-img"
                  alt=""
                  src={specialistKhusnutdinova}
                />
              </div>
              <div className="specialists-cards__info">
                <div className="specialists-cards__title">
                  Хуснутдинова Диана Маратовна
                </div>
                <div className="specialists-cards__desctription">
                  Ветеринарный врач-терапевт, неонатолог
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="in-safe-hands__all-specialists-btn">
          <button
            onClick={() => aboutHandleClick("specialists")}
            className="all-specialists-btn"
          >
            Смотреть всех специалистов
          </button>
          <img className="all-specialists-icon" alt="" src={iconPaw} />
        </div>
      </div>
    </>
  );
};

export default Specialists;
