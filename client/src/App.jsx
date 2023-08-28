import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import BodyMainPage from "./components/BodyMainPage";
import Footer from "./components/Footer";
import AboutClinicPage from "./pages/AboutClinicPage";
import ServicePage from "./components/ServicePage";
import PriseList from "./components/PriseList";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactPage from "./components/ContactPage";

import Service from "./components/Service";

import SpecialistsPage from "./pages/SpecialistsPage";


function App() {
  const [isRotated, setIsRotated] = useState(false);
  function handleClick(e) {
    // console.log(e.target);
    if (!e.target.closest(".link-down")) {
      handleMouseLeave();
    }
  }
  const handleMouseEnter = () => {
    setIsRotated(true);
  };

  const handleMouseLeave = () => {
    setIsRotated(false);
  };
  const handleMouseClick = () => {
    if (isRotated) {
      return setIsRotated(false);
    } else {
      return setIsRotated(true);
    }
  };
  // console.log(isRotated);
  return (
    <Router>
      <main className="main" onClick={handleClick}>
        <div className="main__container">
          <Header
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleMouseClick={handleMouseClick}
            isRotated={isRotated}
          />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutClinicPage />} />
            <Route path="/Service" element={<Service/>} />
            <Route
              path="/service-anesthesia"
              element={
                <ServicePage about={"Анестезия и интенсивная терапия"} />
              }
            />
            <Route
              path="/service-grooming"
              element={
                <ServicePage
                  about={
                    "Груминг животных, косметические манипуляции, окрашивание"
                  }
                />
              }
            />
            <Route
              path="/service-dermatology"
              element={<ServicePage about={"Дерматология"} />}
            />
            <Route
              path="/service-castration"
              element={<ServicePage about={"Кастрация и стерилизация"} />}
            />
            <Route
              path="/service-laboratory-diagnostics"
              element={<ServicePage about={"Лабораторная диагностика"} />}
            />
            <Route
              path="/service-surgery"
              element={<ServicePage about={"Общая хирургия"} />}
            />
            <Route
              path="/service-oncology"
              element={<ServicePage about={"Онкология"} />}
            />
            <Route
              path="/service-doctor-visit"
              element={
                <ServicePage about={"Прием врача и амбулаторные процедуры"} />
              }
            />
            <Route
              path="/service-reproduction"
              element={<ServicePage about={"Репродукция"} />}
            />
            <Route
              path="/service-maternity-and-neonatology"
              element={
                <ServicePage
                  about={"Родильное отделение и отделение неонатологии"}
                />
              }
            />
            <Route
              path="/service-hospital"
              element={<ServicePage about={"Стационар"} />}
            />
            <Route
              path="/service-dentistry"
              element={<ServicePage about={"Стоматология"} />}
            />
            <Route
              path="/service-traumatology-and-orthopedics"
              element={<ServicePage about={"Травматология и ортопедия"} />}
            />
            <Route
              path="/service-urology-gynecology"
              element={<ServicePage about={"Урология, гинекология"} />}
            />
            <Route
              path="/service-surgical-procedures"
              element={<ServicePage about={"Хирургические процедуры"} />}
            />
            <Route
              path="/service-euthanasia-and-funeral"
              element={<ServicePage about={"Эутаназия и ритуальные услуги"} />}
            />
            {/* <Route
              path="/ServicePage"
              element={
                <ServicePage about={"Прием врача и амбулаторные процедуры"} />
              }
            /> */}

            <Route path="/PriceList" element={<PriseList />} />
            <Route path="/specialists" element={<SpecialistsPage />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
