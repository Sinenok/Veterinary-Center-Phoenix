import React from "react";
import "./../styles/main.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__wrapper">
        <ul className="footer__links f-links">
          <li className="f-links__item">
            <Link to="/about" onClick={() => window.scroll(0, 0)}>
              О нас
            </Link>
          </li>
          <li className="f-links__item">
            <Link to="/specialists" onClick={() => window.scroll(0, 0)}>
              Специалисты
            </Link>
          </li>
          <li className="f-links__item">
            <Link to="/Service" onClick={() => window.scroll(0, 0)}>
              Услуги
            </Link>
          </li>
          <li className="f-links__item">
            <Link to="/PriceList" onClick={() => window.scroll(0, 0)}>
              Цены
            </Link>
          </li>
          <li className="f-links__item">
            <Link to="/ContactPage" onClick={() => window.scroll(0, 0)}>
              Контакты
            </Link>
          </li>
        </ul>
        <div className="footer__privacy-policy">
          <Link to="/PrivacyPolicy" onClick={() => window.scroll(0, 0)}>
            Политика конфиденциальности
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
