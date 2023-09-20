import React, { useState } from "react";
import "./../styles/main.css";
import mainLogo from "./../img/main-page/logo.svg";
import mainIcon from "./../img/main-page/Icon.svg";
import mainIconMedia from "./../img/main-page/Icon-media.svg";
import hamburgerMenu from "./../img/main-page/hamburger-menu.svg";
import closeBurger from "./../img/main-page/closeBurger.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({
  setButtonClick,
  handleMouseEnter,
  handleMouseLeave,
  handleMouseClick,
  isRotated,
}) => {
  const screenWidth = window.innerWidth;
  const toggleBurger = () => {
    const nav = document.querySelector("#nav");
    const navBtn = document.querySelector("#navBtn");
    const navBtnImg = document.querySelector("#navBtnImg");
    const body = document.querySelector(".body");
    if (nav.classList.toggle("open")) {
      body.classList.toggle("open");
      navBtn.classList.toggle("close");
      navBtnImg.src = closeBurger;
    } else {
      body.classList.toggle("open");
      navBtn.classList.toggle("close");
      navBtnImg.src = hamburgerMenu;
    }
  };
  const searchBurgerState = () => {
    const nav = document.querySelector("#nav");
    const navBtn = document.querySelector("#navBtn");
    const navBtnImg = document.querySelector("#navBtnImg");
    const body = document.querySelector(".body");
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      body.classList.toggle("open");
      navBtn.classList.toggle("close");
      navBtnImg.src = hamburgerMenu;
    }
  };
  const toggleBurgerLinks = () => {
    window.scroll(0, 0);
    searchBurgerState();
  };

  const navigate = useNavigate();
  const aboutHandleClick = (value) => {
    // navigate(`/${value}`);
    searchBurgerState();
    setTimeout(() => {
      const privNode = document.querySelector(".ContentPrivacy");
      if (privNode !== null) {
        setButtonClick(true);
        navigate(`/${value}`);
      } else {
        const element = document.getElementById("record-form");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 0);
  };
  return (
    <div className="Header">
      <nav id="nav" className="nav">
        <div className="container">
          <div className="nav__row">
            <div className="nav__logo logo">
              <Link onClick={toggleBurgerLinks} to="/">
                <img className="logo__img" alt="" src={mainLogo} />
              </Link>
            </div>
            <ul className="nav__list-links list">
              <li className="list__item">
                <Link
                  onClick={toggleBurgerLinks}
                  to="/about"
                  // onClick={() => window.scroll(0, 0)}
                >
                  Наш Центр
                </Link>
              </li>
              <li className="list__item">
                <Link to="/specialists" onClick={toggleBurgerLinks}>
                  Специалисты
                </Link>
              </li>
              <li
                className="list__item-dropdown list__item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseClick}
              >
                <ul className="list-services">
                  <Link
                    onClick={toggleBurgerLinks}
                    className="link-down"
                    to={screenWidth > 1230 ? "/Service" : "/Service"}
                  >
                    <li className="list-services__item">Услуги</li>
                    <li className="li-icon-nav list-services__item">
                      <picture>
                        <source
                          media="(max-width: 1230px)"
                          srcSet={mainIconMedia}
                        />
                        <img
                          className={`list-services__item-icon ${
                            isRotated ? "rotated" : ""
                          }`}
                          alt=""
                          src={mainIcon}
                        />
                      </picture>
                    </li>
                  </Link>
                </ul>
                {isRotated && (
                  <div
                    className="dropdown-wrapper"
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <ul className="dropdown-list">
                      <li className="dropdown-list__item">
                        <Link to="/service-anesthesia">
                          Анестезия и интенсивная терапия
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-grooming">
                          Груминг животных, косметические манипуляции,
                          окрашивание
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-dermatology">Дерматология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-castration">
                          Кастрация и стерилизация
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-laboratory-diagnostics">
                          Лабораторная диагностика
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-surgery">Общая хирургия</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-oncology">Онкология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-doctor-visit">
                          Прием врача и амбулаторные процедуры
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-reproduction">Репродукция</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-maternity-and-neonatology">
                          Родильное отделение и отделение неонатологии
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-hospital">Стационар</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-dentistry">Стоматология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-traumatology-and-orthopedics">
                          Травматология и ортопедия
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-urology-gynecology">
                          Урология, гинекология
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-surgical-procedures">
                          Хирургические процедуры
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-euthanasia-and-funeral">
                          Эутаназия и ритуальные услуги
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-ultrasonography">
                          Ультразвуковое исследование
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-endoscopy-and-endosurgery">
                          Эндоскопия и эндохирургия
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-spinal-surgery-and-neurology">
                          Операции на позвоночнике и неврология
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-plastic-surgery">
                          Пластические операции
                        </Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/service-operations-on-the-head">
                          Операции на голове
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="list__item">
                <Link to="/PriceList" onClick={toggleBurgerLinks}>
                  Цены
                </Link>
              </li>
              <li className="list__item">
                <Link to="/ContactPage" onClick={toggleBurgerLinks}>
                  Контакты
                </Link>
              </li>
            </ul>
            <ul className="nav__list-info list">
              <li className="list__item-info">
                <ul className="list-contacts">
                  <li className="list-contacts__number">
                    +7 &#40;812&#41;965-34-50
                  </li>
                  <li className="list-contacts__address">
                    пр. Обуховской Обороны, д.195
                  </li>
                </ul>
              </li>
            </ul>
            <div className="nav-button">
              <button
                onClick={() => aboutHandleClick("")}
                className="nuv-button__entry"
              >
                Записаться
              </button>
            </div>
          </div>
        </div>
        <div className="nav__row-deice">
          <div className="device-nav__logo logo">
            <Link to="/">
              <img className="device-logo__img" alt="" src={mainLogo} />
            </Link>
          </div>
          <ul className="device-list-contacts">
            <li className="device-list-contacts__number">
              +7 &#40;812&#41;965-34-50
            </li>
            <li className="device-list-contacts__address">
              пр. Обуховской Обороны, д.195
            </li>
          </ul>
        </div>
        <button id="navBtn" className="burger-menu-btn" onClick={toggleBurger}>
          <img id="navBtnImg" src={hamburgerMenu} alt="" />
        </button>
      </nav>
    </div>
  );
};

export default Header;
