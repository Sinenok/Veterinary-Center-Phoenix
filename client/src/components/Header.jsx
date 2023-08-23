import React, { useState } from "react";
import "./../styles/main.css";
import mainLogo from "./../img/main-page/logo.svg";
import mainIcon from "./../img/main-page/Icon.svg";
import mainIconMedia from "./../img/main-page/Icon-media.svg";
import hamburgerMenu from "./../img/main-page/hamburger-menu.svg";
import closeBurger from "./../img/main-page/closeBurger.svg";
import { Link } from "react-router-dom";

const Header = ({
  handleMouseEnter,
  handleMouseLeave,
  handleMouseClick,
  isRotated,
}) => {
  const getIconPath = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1230) {
      return mainIconMedia;
    } else {
      return mainIcon;
    }
  };
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
  const func = () => {
    console.log('dsadsada');
  }
  return (
    <div className="Header">
      <nav id="nav" className="nav">
        <div className="container">
          <div className="nav__row">
            <div className="nav__logo logo">
              <Link onClick={func} to="/">
                <img className="logo__img" alt="" src={mainLogo} />
              </Link>
            </div>
            <ul className="nav__list-links list">
              <li className="list__item">
                <Link to="/about">О наc</Link>
              </li>
              <li className="list__item">
                <a href="#">Специалисты</a>
              </li>
              {/* <li className="list__item">
                <ul className="list-clients">
                  <li className="list-clients__item">Клиентам</li>
                  <li className="list-clients__item">
                    <img
                      className="list-clients__item-icon"
                      alt=""
                      src={mainIcon}
                    />
                  </li>
                </ul>
              </li> */}
              <li
                className="list__item-dropdown list__item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseClick}
              >
                <ul className="list-services">
                  <a
                    className="link-down"
                    href={screenWidth > 1230 ? "#" : "#dsad"}
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
                  </a>
                </ul>
                {isRotated && (
                  <div
                    className="dropdown-wrapper"
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <ul className="dropdown-list">
                      <li className="dropdown-list__item">
                        <Link to="/">Эндоскопия</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/a">Репродукция</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Терапия</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Неонатология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Хирургия</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Кастрация, стерелизации</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Кардиология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Дерматология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Ортопедия и травмотология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Пластическая хирургия</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Операции на голове</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Стоматология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Анастезия и интенсивная терапия</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Стационар</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Онкология</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Вакцинация и чипирование</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Груминг и стрижка</Link>
                      </li>
                      <li className="dropdown-list__item">
                        <Link to="/">Лабораторная диагностика</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="list__item">
                <a href="#">Цены</a>
              </li>
              <li className="list__item">
                <a href="#">Контакты</a>
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
              <button className="nuv-button__entry">Записаться</button>
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
