import React from "react";
import "./../styles/main.css";
import mainLogo from "./../img/main-page/logo.svg";
import mainIcon from "./../img/main-page/Icon.svg";

function Header() {
  return (
    <div className="Header">
      <nav className="nav">
        <div className="container">
          <div className="nav__row">
            <div className="nav__logo logo">
              <img className="logo__img" alt="" src={mainLogo} />
            </div>
            <ul className="nav__list-links list">
              <li className="list__item">О нас</li>
              <li className="list__item">Специалисты</li>
              <li className="list__item">
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
              </li>
              <li className="list__item">
                <ul className="list-services">
                  <li className="list-services__item">Услуги</li>
                  <li className="list-services__item">
                    <img
                      className="list-services__item-icon"
                      alt=""
                      src={mainIcon}
                    />
                  </li>
                </ul>
              </li>
              <li className="list__item">Цены</li>
              <li className="list__item">Контакты</li>
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
      </nav>
    </div>
  );
}

export default Header;
