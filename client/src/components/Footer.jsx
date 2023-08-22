import React from "react";
import "./../styles/main.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__wrapper">
        <ul className="footer__links f-links">
          <li className="f-links__item">
            <a href="#">О нас</a>
          </li>
          <li className="f-links__item">
            <a href="">Специалисты</a>
          </li>
          <li className="f-links__item">
            <a href="">Услуги</a>
          </li>
          <li className="f-links__item">
            <a href="">Цены</a>
          </li>
          <li className="f-links__item">
            <a href="">Контакты</a>
          </li>
        </ul>
        <div className="footer__privacy-policy">
          <a href="#">Политика конфиденциальности</a>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
