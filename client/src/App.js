import React from "react";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="container">
          <div className="nav__row">
            <div className="nav__logo logo">
              <img className="logo__img" alt=""></img>
            </div>
            <div className="nav__links">
              <div className="link">О нас</div>
              <div className="link">Специалисты</div>
              <div className="link-clients link">
                <li>Клиентам</li>
                <li></li>
              </div>
              <div className="link-services link">Услуги</div>
              <div className="link">Цены</div>
              <div className="link">Контакты</div>
            </div>
          </div>
        </div>
      </nav>
      <header className="header"></header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
