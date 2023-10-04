import React from "react";
import "./../styles/main.css";
import { Link } from "react-router-dom";
import { windowStartScrol } from "./Service";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__wrapper">
        <ul className="footer__links f-links">
          <li className="f-links__item">
            <Link to="/about" onClick={windowStartScrol}>
              Наш Центр
            </Link>
          </li>
          <li className="f-links__item">
            <Link to="/specialists" onClick={windowStartScrol}>
              Специалисты
            </Link>
          </li>
          <li className="f-links__item">
            <Link to="/Service" onClick={windowStartScrol}>
              Услуги
            </Link>
          </li>
          <li className="f-links__item">
            <Link to="/PriceList" onClick={windowStartScrol}>
              Цены
            </Link>
          </li>
          <li className="f-links__item">
            <Link to="/ContactPage" onClick={windowStartScrol}>
              Контакты
            </Link>
          </li>
        </ul>
        <div className="footer__privacy-policy">
          <Link to="/PrivacyPolicy" onClick={windowStartScrol}>
            Политика конфиденциальности
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
