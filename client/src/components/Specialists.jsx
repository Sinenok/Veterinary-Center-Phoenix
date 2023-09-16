import React, { useState, useEffect } from "react";
import "./../styles/main.css";
// import specialistOrlova from "./../img/main-page/specialists/Orlova.png";
import specialistOrlova from "./../img/main-page/specialists/Orlova.png";
import specialistMager from "./../img/main-page/specialists/Mager.png";
import specialistOrlov from "./../img/main-page/specialists/Orlov.png";
import specialistMikhailova from "./../img/main-page/specialists/Mikhailova.png";
import specialistKhusnutdinova from "./../img/main-page/specialists/Khusnutdinova.png";
import iconPaw from "./../img/main-page/specialists/paw.svg";
import { useNavigate } from "react-router-dom";

const Specialists = ({ counted }) => {
  const [specialists, setSpecialists] = useState(null);

  useEffect(() => {
    fetch("https://new.vetfenix.ru/api/specialists")
      .then((response) => response.json())
      .then((jsonData) => {
        // console.log(jsonData);
        setSpecialists(jsonData);
      })
      .catch((error) => console.error("Ошибка при запросе:", error));
  }, []);
  // console.log(counted);
  // const specialistsList = [
  //   {
  //     id: 1,
  //     name: "Орлова Мария Николаевна",
  //     photo: specialistOrlova,
  //     description:
  //       "Главный ветеринарный врач Центра, репродуктолог- неонатолог, специалист ультразвуковой диагностики",
  //   },
  //   {
  //     id: 2,
  //     name: "Магер Алиса",
  //     photo: specialistMager,
  //     description: "Анестезиолог",
  //   },
  //   {
  //     id: 3,
  //     name: "Орлов Павел Георгиевич",
  //     photo: specialistOrlov,
  //     description:
  //       "Ветеринарный врач-кардиолог, хирург, ортопед, специалист ультразвуковой диагностики, генеральный директор",
  //   },
  //   {
  //     id: 4,
  //     name: "Михайлова Светлана",
  //     photo: specialistMikhailova,
  //     description: "Грумер",
  //   },
  //   {
  //     id: 5,
  //     name: "Хуснутдинова Диана Маратовна",
  //     photo: specialistKhusnutdinova,
  //     description: "Ветеринарный врач-терапевт, неонатолог",
  //   },
  // ];

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
            {specialists === null
              ? null
              : specialists.slice(0, counted).map((specialist) => (
                  <div
                    key={specialist.id}
                    className="specialists-cards__wrapper"
                  >
                    <div className="specialists-cards__photo photo">
                      <img
                        className="photo-img"
                        alt=""
                        src={specialist.photo}
                      />
                    </div>
                    <div className="specialists-cards__info">
                      <div className="specialists-cards__title">
                        {specialist.name}
                      </div>
                      <div className="specialists-cards__desctription">
                        {specialist.description}
                      </div>
                    </div>
                  </div>
                ))}
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
