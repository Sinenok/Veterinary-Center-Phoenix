import React from "react";
import "./../styles/main.css";
import mainBanner from "./../img/main-page/banner-headr.png";
import moreIcon from "./../img/main-page/more.svg";
import aboutUsCircle from "./../img/main-page/Ellipse.png";
import specialistOrlova from "./../img/main-page/specialists/Orlova.png";
import specialistMager from "./../img/main-page/specialists/Mager.png";
import specialistOrlov from "./../img/main-page/specialists/Orlov.png";
import specialistMikhailova from "./../img/main-page/specialists/Mikhailova.png";
import specialistKhusnutdinova from "./../img/main-page/specialists/Khusnutdinova.png";
import iconPaw from "./../img/main-page/specialists/paw.svg";
import coment1 from "./../img/main-page/reviews/comment1.png";
import coment2 from "./../img/main-page/reviews/comment2.png";
import coment3 from "./../img/main-page/reviews/comment3.png";
import coment4 from "./../img/main-page/reviews/comment4.png";
import coment8 from "./../img/main-page/reviews/5HLWqjv-PY4.jpg";
import coment7 from "./../img/main-page/reviews/pcJhdKLNaqo.jpg";
import coment6 from "./../img/main-page/reviews/-91w_yzpsCsJ-cDFLUDVGR5r_n52iuPAOfxETeYuYUPYOx_XoYT1G33ZCQbpkpv2_F3yAWUHY-zwPDYz8-eQym9K.jpg";
import coment5 from "./../img/main-page/reviews/qwMS8N3slgU.png";
import iconPaw2 from "./../img/main-page/reviews/paw2.svg";
import prepCircle from "./../img/main-page/preparation-for-the-reception/prepCircle.svg";
import stepUp from "./../img/main-page/preparation-for-the-reception/stepUp.svg";
import stepDown from "./../img/main-page/preparation-for-the-reception/stepDown.svg";
import formCat from "./../img/main-page/formCat.png";
import mainMap from "./../img/main-page/map-contact.png";
import birdLogo from "./../img/main-page/birdLogo.svg";
import textLogo from "./../img/main-page/text-logo.svg";
import vkIcon from "./../img/main-page/vk-icon.svg";
import devCat1 from "./../img/main-page/device card-services/devCat1.png";
import devCat2 from "./../img/main-page/device card-services/devCat2.png";
import devCat3 from "./../img/main-page/device card-services/devCat3.png";
import { useNavigate } from "react-router-dom";
import MainForm from "../components/MainForm";
import EnrollComponent from "../components/EnrollComponent";
import Specialists from "../components/Specialists";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import mapIcon from "./../img/main-page/mapIcon.png";
import MapClinic from "../components/MapClinic";

const MainPage = () => {
  const reviews = [
    {
      id: 1,
      name: "Наталия Яковлева",
      photo: coment1,
      coment:
        "Очень люблю эту клинику! У нас много животных и мы бывали во многих местах, но только в клинике Феникс я всегда чувствую, что моих хвостикам помогут и сделают все профессионально и по адекватным ценам. Спасибо Павел Георгиевич и всей команде!!!",
    },
    {
      id: 2,
      name: "Наталья Родная",
      photo: coment2,
      coment:
        "Большое спасибо Павлу Георгиевичу за проведенную операцию моей маленькой шпицуле Кнопке! А также всем кто работал с ней в день операции - 23.10.2022 г. Нам 7 месяцев:)))",
    },
    {
      id: 3,
      name: "Юлия Федотова",
      photo: coment3,
      coment:
        "Долго я шла к этому решению, но стерелизации было не избежать🥺У нас четвёртую течку подрят были ложные беремености с выдуманными щенками и молоком в молочных железах. И не кормили по три дня и мозг тренировками забивали , проходит быстро,за пару дней, без гормональных таблеток и лактостопов🤨Но в сл течку через 3 месяца все повторялось.Дабы избежать проблем со здоровьем и гормональных сбоев ,было принято решение о стерелизации✂️Клинику я искала долго и тщательно👌Абы кому свою крошку бы не доверила💌ВЕТЕРИНАЛЬНЫЙ ЦЕНТР «Феникс»🔥огромное Спасибо Павлу Георгиевичу🙏🏻 Моя девочка была в надежных руках этого замечательного хирурга💪🏻Мы в ответе за тех, кого приручили🦮🐶",
    },
    {
      id: 4,
      name: "Ирка Халиф",
      photo: coment4,
      coment:
        "Хотим сказать большое спасибо клинике Феникс за проведенную нашей кошечке Милке стерилизацию, операцию перенесли легко, с наименьшим стрессом, счастливые прыгаем-бегаем дома) ",
    },
    {
      id: 5,
      name: "Лариса Ларина",
      photo: coment5,
      coment:
        "Очень хочу поблагодарить клинку и хирурга Маргариту Олеговну (надеюсь, не ошиблась с именем) за прекрасную операцию по стерилизации нашей девочки. Очень переживали и волновались, но всё прошло хорошо. Доктор побеседовала до операции, всё рассказала как будет происходить, и потом после общалась со мной, т.к. я очень сильно переживала.Наблюдаемся в клинике уже третий год и очень довольны. Приятно видеть теплое и участливое отношение к нашим питомцам. Удачи и процветания!",
    },
    {
      id: 6,
      name: "Наталья Васильева",
      photo: coment6,
      coment:
        "Спасибо за быстрый прием и ренген моего мопса,кнопку мы нашли.хорошо что она ее не проглотила.",
    },
    {
      id: 7,
      name: "Ирка Халиф",
      photo: coment7,
      coment:
        "Хотим сказать большое спасибо клинике 'Феникс' за проведенную нашей кошечке Милке стерилизацию, операцию перенесли легко, с наименьшим стрессом, счастливые прыгаем-бегаем дома)",
    },
    {
      id: 8,
      name: "Ольга Трофимова",
      photo: coment8,
      coment:
        "Выражаю огромную благодарность нашему лечащему врачу,- Никитиной Инге Александровне☺️ Мы с мужем и кошками просто счастливы, что нам так повезло попасть именно к ней. Я вообще не думала, что бывают такие ветеринары, без шуток, мы много где побывали.",
    },
  ];

  const shuffledReviews = reviews.sort(() => 0.5 - Math.random());

  const randomReviews = shuffledReviews.slice(0, 4);

  const navigate = useNavigate();
  const aboutHandleClick = (value) => {
    window.scroll(0, 0);
    navigate(`/${value}`);
  };

  return (
    <div className="main-page-body">
      <div className="main__banner">
        <img className="main__banner-img" alt="" src={mainBanner} />
      </div>
      <div className="header__title">
        <p className="title-text">
          Лечебно-диагностический
          <br />
          центр здоровья и репродукции
          <br />
          животных «Феникс»
        </p>
      </div>
      <div className="header__sub-title">
        <p className="sub-title-text">
          Вы доверяете нам самое ценное. <br />
          Мы знаем об этом!
        </p>
      </div>
      <div className="card-services-device-header device-header">
        <div className="device-header-title">
          <div className="device-header__button">
            <button className="buttons-device__services-btn">Услуги</button>
          </div>
          <div className="device-header-title__text">
            У нас широкий спектр услуг
            <br />
            для лечения питомцев
          </div>
        </div>
      </div>
      <div className="card-services">
        <div className="card-services__wrapper">
          <div className="card-services__title">Эндоскопия</div>
          <div className="card-services__desctription">
            Процедура, которая позволяет нам обследовать и визуализировать
            внутренние органы и полости вашего питомца.
          </div>
          <div className="card-services__more more">
            <a className="more__text-link" href="">
              ПОДРОБНЕЕ
            </a>
            <a className="more__img-link" href="">
              <img src={moreIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="card-services__img-wrap">
          <img className="card-services-img" src={devCat1} alt="" />
        </div>
        <div className="card-services__wrapper">
          <div className="card-services__title">Ортопедия</div>
          <div className="card-services__desctription">
            Мы предлагаем широкий спектр услуг ортопедии,
            <br />
            включая диагностику, консервативное лечение, хирургические
            вмешательства и<br />
            послеоперационную реабилитацию.
          </div>
          <div className="card-services__more more">
            <a className="more__text-link" href="">
              ПОДРОБНЕЕ
            </a>
            <a className="more__img-link" href="">
              <img src={moreIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="card-services__wrapper">
          <div className="card-services__title">УЗИ</div>
          <div className="card-services__desctription">
            Позволяет получить информацию о состоянии
            <br />
            органов, определить наличие патологий, оценить структуру тканей,
            обнаружить опухоли или аномалии.
          </div>
          <div className="card-services__more more">
            <a className="more__text-link" href="">
              ПОДРОБНЕЕ
            </a>
            <a className="more__img-link" href="">
              <img src={moreIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="card-services__wrapper">
          <div className="card-services__title">Репродукция</div>
          <div className="card-services__desctription">
            Оценка репродуктивной способности,
            <br />
            планирование паров, искусственное осеменение, ультразвуковое
            исследование беременности,
            <br />
            помощь при окоте, диагностику и многое другое.
          </div>
          <div className="card-services__more more">
            <a className="more__text-link" href="">
              ПОДРОБНЕЕ
            </a>
            <a className="more__img-link" href="">
              <img src={moreIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="card-services__img-wrap">
          <img className="card-services-img" src={devCat2} alt="" />
        </div>
        <div className="card-services__wrapper">
          <div className="card-services__title">Неонатология</div>
          <div className="card-services__desctription">
            Наши ветеринарные специалисты имеют глубокие
            <br />
            знания и опыт в области раннего развития и здоровья маленьких
            животных, и они работают в тесном сотрудничестве с владельцами,
            чтобы обеспечить оптимальные условия и уход для малышей.
          </div>
          <div className="card-services__more more">
            <a className="more__text-link" href="">
              ПОДРОБНЕЕ
            </a>
            <a className="more__img-link" href="">
              <img src={moreIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="card-services__img-wrap">
          <img className="card-services-img" src={devCat3} alt="" />
        </div>
        <div className="card-services__wrapper">
          <div className="card-services__title">Терапия</div>
          <div className="card-services__desctription">
            Мы используем современные медицинские
            <br />
            протоколы и техники, чтобы обеспечить
            <br />
            эффективное и безопасное лечение.
          </div>
          <div className="card-services__more more">
            <a className="more__text-link" href="">
              ПОДРОБНЕЕ
            </a>
            <a className="more__img-link" href="">
              <img src={moreIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="in-safe-hands__all-specialists-btn device-active">
        <button className="all-specialists-btn">Смотреть все услуги</button>
        <img className="all-specialists-icon" alt="" src={iconPaw} />
      </div>
      <div className="love-animal">
        <div className="love-animal__wrapper">
          <div className="love-animal__main-title main-title">
            <div className="love-animal__button buttons-category">
              <button
                onClick={() => aboutHandleClick("about")}
                className="buttons-category__about-us"
              >
                О нас
              </button>
            </div>
            <div className="love-animal__title body-titles">
              Мы любим <span className="title-span">животных</span>
              <br />и свою работу
            </div>
          </div>
          <div className="about-us-circle">
            <div className="about-us-circle__background">
              <div className="about-us-circle__first-circle">
                <div className="about-us-circle__second-circle">
                  <img className="img-circle" src={aboutUsCircle} alt="" />
                </div>
              </div>
            </div>
            <div className="about-us-circle__wrapper">
              <div className="advantages-pharmacy advantages">
                <div className="advantages-title">Аптека и зоомагазин</div>
                <div className="advantages-text">
                  Наша аптека специализируется на предоставлении широкого выбора
                  качественных и безопасных медикаментов, диетического питания,
                  витаминов и других средств, необходимых для лечения и
                  поддержания здоровья вашего питомца.
                </div>
              </div>
              <div className="grooming-and-clinic-container">
                <div className="advantages-grooming advantages">
                  <div className="advantages-title">ГРУМИНГ</div>
                  <div className="advantages-text">
                    Наши грумеры имеют большой опыт работы со всеми породами
                    собак и кошек и обладают глубокими знаниями о требованиях
                    каждой породы в отношении ухода за шерстью.
                  </div>
                </div>
                <div className="advantages-clinic advantages">
                  <div className="advantages-title">Клиника</div>
                  <div className="advantages-text">
                    Мы гордимся представить вам самые передовые технологии и
                    оборудование, которые позволяют нам обеспечивать
                    высококачественную диагностику и лечение ваших дорогих
                    питомцев, а также аппарат ингаляционного наркоза для
                    безопасной анестезии Вашего питомца.
                  </div>
                </div>
              </div>
            </div>
            <div className="about-us-circle__wrapper-device">
              <div className="advantages-device">
                <div className="advantages-title-device">
                  Аптека и зоомагазин
                </div>
                <div className="advantages-text-device">
                  Наша аптека специализируется на предоставлении широкого выбора
                  качественных и безопасных медикаментов, диетического питания,
                  витаминов и других средств, необходимых для лечения и
                  поддержания здоровья вашего питомца.
                </div>
              </div>
              <div className="advantages-device">
                <div className="advantages-title-device">ГРУМИНГ</div>
                <div className="advantages-text-device">
                  Наши грумеры имеют большой опыт работы со всеми породами собак
                  и кошек и обладают глубокими знаниями о требованиях каждой
                  породы в отношении ухода за шерстью.
                </div>
              </div>
              <div className="advantages-device">
                <div className="advantages-title-device">Клиника</div>
                <div className="advantages-text-device">
                  Мы гордимся представить вам самые передовые технологии и
                  оборудование, которые позволяют нам обеспечивать
                  высококачественную диагностику и лечение ваших дорогих
                  питомцев, а также аппарат ингаляционного наркоза для
                  безопасной анестезии Вашего питомца.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-for-health">
        <div className="all-for-health__wrapper">
          <div className="all-for-healt__main-title main-title">
            <div className="all-for-healt__button buttons-category">
              <button className="buttons-category__advantages">
                Преимущества
              </button>
            </div>
            <div className="all-for-healt__title body-titles">
              Все для <span className="title-span">здоровья</span>
              <br />
              <span className="spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              ваших любимцев
            </div>
          </div>
          <div className="advantages-cards">
            <div className="advantages-cards__wrapper">
              <div className="advantages-cards__title">
                Широкий спектр услуг
              </div>
              <div className="advantages-cards__desctription">
                Это позволяет нам предоставлять комплексный уход и лечение вашим
                питомцам на разных этапах их жизни.
              </div>
              <div className="advantages-cards__more more">
                <a className="more__text-link" href="">
                  ПОДРОБНЕЕ
                </a>
                <a className="more__img-link" href="">
                  <img src={moreIcon} alt="" />
                </a>
              </div>
            </div>
            <div className="advantages-cards__wrapper">
              <div className="advantages-cards__title">Опытные врачи</div>
              <div className="advantages-cards__desctription">
                Наша команда имеет широкий опыт работы и постоянно
                совершенствуется, чтобы предоставлять высококачественную и
                комплексную медицинскую помощь вашим питомцам.
              </div>
              <div className="advantages-cards__more more">
                <a className="more__text-link" href="">
                  ПОДРОБНЕЕ
                </a>
                <a className="more__img-link" href="">
                  <img src={moreIcon} alt="" />
                </a>
              </div>
            </div>
            <div className="advantages-cards__wrapper">
              <div className="advantages-cards__title">
                индивидуальный подход и забота
              </div>
              <div className="advantages-cards__desctription">
                Мы всегда слушаем владельцев и стараемся понять все особенности
                и потребности питомца, чтобы предоставить наиболее эффективное и
                заботливое лечение.
              </div>
              <div className="advantages-cards__more more">
                <a className="more__text-link" href="">
                  ПОДРОБНЕЕ
                </a>
                <a className="more__img-link" href="">
                  <img src={moreIcon} alt="" />
                </a>
              </div>
            </div>
            <div className="advantages-cards__wrapper">
              <div className="advantages-cards__title">
                Современное оборудование
              </div>
              <div className="advantages-cards__desctription">
                Мы обладаем самым современным оборудованием для диагностики и
                лечения, что позволяет нам проводить точные и надежные
                исследования, а также применять передовые методы лечения.
              </div>
              <div className="advantages-cards__more more">
                <a className="more__text-link" href="">
                  ПОДРОБНЕЕ
                </a>
                <a className="more__img-link" href="">
                  <img src={moreIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Specialists />
      <div className="your-trust">
        <div className="your-trust__wrapper">
          <div className="your-trust__main-title main-title">
            <div className="your-trust__button buttons-category">
              <button className="buttons-category__reviews">Отзывы</button>
            </div>
            <div className="your-trust__title body-titles">
              Ваше <span className="title-span">доверие</span> -<br />
              <span className="spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              наша <span className="title-span">гордость</span>
            </div>
          </div>
          {/* <div className="arrows">
                <button className="arrow-left__btn">
                  <img
                    className="arrow-left__img"
                    alt=""
                    src={specialistOrlova}
                  />
                </button>
              </div> */}
          <div className="card-reviews">
            {randomReviews.map((coment) => (
              <div key={coment.id} className="card-reviews__wrapper">
                <div className="card-reviews__info">
                  <div className="card-reviews__photo photo-reviews">
                    <img
                      className="photo-reviews-img"
                      alt=""
                      src={coment.photo}
                    />
                  </div>
                  <div className="card-reviews__title">{coment.name}</div>
                </div>
                <div className="card-reviews__desctription">
                  {coment.coment}
                </div>
              </div>
            ))}
          </div>
          {/* <div className="arrows">
                <button className="arrow-right__btn">
                  <img
                    className="arrow-right__img"
                    alt=""
                    src={specialistOrlova}
                  />
                </button>
              </div> */}
          <div className="your-trust__buttons">
            <div className="button__vkreviews reviews-btns">
              <a
                href="https://vk.com/fenixvetgroup?w=app6326142_-167831658"
                className="reviews-btns__vkreviews"
              >
                Читать все отзывы в соц сети Vk.com
              </a>
              <img className="reviews-btns__icon" alt="" src={iconPaw} />
            </div>
            <div className="button__yandexreviews reviews-btns">
              <a
                // Исправить ссылку на отзывы яндекса
                href="https://yandex.ru/maps/org/feniks/83872204934/reviews/?ll=30.459946%2C59.868911&z=18"
                className="reviews-btns__yandexreviews"
              >
                Читать все отзывы на Яндекс
              </a>
              <img className="reviews-btns__icon" alt="" src={iconPaw2} />
            </div>
          </div>
        </div>
      </div>
      <div className="how-to-prepare">
        <div className="how-to-prepare__wrapper">
          <div className="how-to-prepare__main-title main-title">
            <div className="how-to-prepare__button buttons-category">
              <button className="buttons-category__preparation">
                Подготовка
              </button>
            </div>
            <div className="how-to-prepare__title body-titles">
              Как <span className="title-span">подготовиться</span>
              <br />к приему ветеринарного врача
            </div>
          </div>
          <div className="preparation-steps">
            <div className="preparation-steps__wrapper">
              <div className="grid-item1 steps-grid">
                <div className="grid-prep-info-top grid-prep-info">
                  <div className="grid-title">Для безопасности</div>
                  <div className="grid-text">
                    Возьмите с собой намордник и поводок или переноску для
                    <br />
                    небольших животных.
                  </div>
                </div>
              </div>
              <div className="grid-item2 steps-grid"></div>
              <div className="grid-item3 steps-grid">
                <div className="grid-prep-info-top grid-prep-info">
                  <div className="grid-title">
                    Не кормите животное
                    <br />
                    перед приемом
                  </div>
                  <div className="grid-text">
                    Это поможет сократить количество
                    <br />
                    визитов к ветеринару, т.к. позволит сразу
                    <br />
                    сдать анализы и провести обследование
                  </div>
                </div>
              </div>

              <div className="grid-item4 steps-grid"></div>
              <div className="grid-item5 steps-grid"></div>
              <div className="grid-item6 steps-grid">
                <div className="grid-circle">2</div>
              </div>
              <div className="grid-item7 steps-grid"></div>
              <div className="grid-item8 steps-grid"></div>
              <div className="grid-item9 steps-grid"></div>
              <div className="grid-item10 steps-grid">
                <div className="grid-circle">4</div>
              </div>
              <div className="grid-item11 steps-grid"></div>
              <div className="grid-item12 steps-grid"></div>

              <div className="grid-item13 steps-grid"></div>
              <div className="grid-item14 steps-grid">
                <div className="grid-move-up grid-move">
                  <img className="grid-move__img" alt="" src={stepUp} />
                </div>
              </div>
              <div className="grid-item15 steps-grid"></div>
              <div className="grid-item16 steps-grid">
                <div className="grid-move-down grid-move">
                  <img className="grid-move__img" alt="" src={stepDown} />
                </div>
              </div>
              <div className="grid-item17 steps-grid"></div>
              <div className="grid-item18 steps-grid">
                <div className="grid-move-up grid-move">
                  <img className="grid-move__img" alt="" src={stepUp} />
                </div>
              </div>
              <div className="grid-item19 steps-grid"></div>
              <div className="grid-item20 steps-grid">
                <div className="grid-move-down grid-move">
                  <img className="grid-move__img" alt="" src={stepDown} />
                </div>
              </div>
              <div className="grid-item21 steps-grid"></div>

              <div className="grid-item22 steps-grid">
                <div className="grid-circle">1</div>
              </div>
              <div className="grid-item23 steps-grid"></div>
              <div className="grid-item24 steps-grid"></div>
              <div className="grid-item25 steps-grid"></div>
              <div className="grid-item26 steps-grid">
                <div className="grid-circle">3</div>
              </div>
              <div className="grid-item27 steps-grid"></div>
              <div className="grid-item28 steps-grid"></div>
              <div className="grid-item29 steps-grid"></div>
              <div className="grid-item30 steps-grid">
                <div className="grid-circle">5</div>
              </div>

              <div className="grid-item31 steps-grid">
                <div className="grid-prep-info-bottom grid-prep-info">
                  <div className="grid-title">Соберите документы</div>
                  <div className="grid-text">
                    Возьмите свой паспорт и ветпаспорт животного &#40;при
                    наличии&#41;
                  </div>
                </div>
              </div>
              <div className="grid-item32 steps-grid">
                <div className="grid-prep-info-bottom grid-prep-info">
                  <div className="grid-title">
                    Заранее подготовьте ответы
                    <br />
                    на стандартные вопросы
                  </div>
                  <div className="grid-text">
                    Особенно если питомца отведет
                    <br />к ветеринару доверенное лицо,
                    <br />а не вы лично
                  </div>
                </div>
              </div>
              <div className="grid-item33 steps-grid">
                <div className="grid-prep-info-bottom grid-prep-info">
                  <div className="grid-title">Не бойтесь говорить правду</div>
                  <div className="grid-text">
                    Даже если вы где-то недоглядели за
                    <br />
                    питомцем или совершили ошибку.
                    <br />
                    Иначе диагноз может быть поставлен
                    <br />
                    неверно и лечение не сработает
                  </div>
                </div>
              </div>
            </div>
            <div className="preparation-steps__wrapper-device">
              <div className="preparation-steps__item-device">
                <div className="number-device">1</div>
                <div className="preparation-steps__info-device">
                  <div className="preparation-steps__title-device">
                    Соберите документы
                  </div>
                  <div className="preparation-steps__subtitle-device">
                    Возьмите свой паспорт и ветпаспорт животного &#40;при
                    наличии&#41;
                  </div>
                </div>
              </div>
              <div className="preparation-steps__item-device">
                <div className="number-device">2</div>
                <div className="preparation-steps__info-device">
                  <div className="preparation-steps__title-device">
                    Для безопасности
                  </div>
                  <div className="preparation-steps__subtitle-device">
                    Возьмите с собой намордник и поводок или переноску для
                    небольших животных.
                  </div>
                </div>
              </div>
              <div className="preparation-steps__item-device">
                <div className="number-device">3</div>
                <div className="preparation-steps__info-device">
                  <div className="preparation-steps__title-device">
                    Заранее подготовьте ответы
                    <br /> на стандартные вопросы
                  </div>
                  <div className="preparation-steps__subtitle-device">
                    Особенно если питомца отведет к ветеринару доверенное лицо,
                    а не вы лично.
                  </div>
                </div>
              </div>
              <div className="preparation-steps__item-device">
                <div className="number-device">4</div>
                <div className="preparation-steps__info-device">
                  <div className="preparation-steps__title-device">
                    Не кормите животное перед приемом
                  </div>
                  <div className="preparation-steps__subtitle-device">
                    Возьмите с собой намордник и поводок или переноску для
                    небольших животных.
                  </div>
                </div>
              </div>
              <div className="preparation-steps__item-device">
                <div className="number-device">5</div>
                <div className="preparation-steps__info-device">
                  <div className="preparation-steps__title-device">
                    Не кормите животное перед приемом
                  </div>
                  <div className="preparation-steps__subtitle-device">
                    Возьмите с собой намордник и поводок или переноску для
                    небольших животных.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EnrollComponent />
      <div className="map-contacts">
        <div className="map-contacts__wrapper">
          <div className="map-contacts__main-title main-title">
            <div className="map-contacts__button buttons-category">
              <button
                onClick={() => aboutHandleClick("ContactPage")}
                className="buttons-category__contacts"
              >
                Контакты
              </button>
            </div>
            <div className="map-contacts__map main-map">
              <div className="main-map__wrapper">
                <MapClinic />
                <div className="map-info-card">
                  <div className="map-info-card__icon">
                    <div className="map-info-card__icon-bird">
                      <img
                        className="map-info-card__icon-bird-img"
                        alt=""
                        src={birdLogo}
                      />
                    </div>
                    <div className="map-info-card__icon-text">
                      <img
                        className="map-info-card__icon-text-img"
                        alt=""
                        src={textLogo}
                      />
                    </div>
                  </div>
                  <div className="map-info-card__body">
                    <div className="map-info-card__text">
                      +7 &#40;812&#41; 965-34-50 <br />
                      <br />
                      fenix@vetfenix.ru <br />
                      <br />
                      г. Санкт-Петербург,
                      <br /> пр.Обуховской Обороны, д.195 <br />
                      <br />
                      Ежедневно с 10-22 <br />
                      <br />
                    </div>
                    <div className="map-info-card__vk">
                      <a href="https://vk.com/fenixvetgroup">
                        <img
                          className="map-info-card__vk-img"
                          alt=""
                          src={vkIcon}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
