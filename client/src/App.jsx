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
  const servicesRoutes = [
    { path: "/service-anesthesia", about: "Анестезия и интенсивная терапия" },
    {
      path: "/service-grooming",
      about: "Груминг животных, косметические манипуляции, окрашивание",
    },
    {
      path: "/service-dermatology",
      about: "Дерматология",
    },
    {
      path: "/service-castration",
      about: "Кастрация и стерилизация",
    },
    {
      path: "/service-laboratory-diagnostics",
      about: "Лабораторная диагностика",
    },
    {
      path: "/service-surgery",
      about: "Общая хирургия",
    },
    {
      path: "/service-oncology",
      about: "Онкология",
    },
    {
      path: "/service-doctor-visit",
      about: "Прием врача и амбулаторные процедуры",
    },
    {
      path: "/service-reproduction",
      about: "Репродукция",
    },
    {
      path: "/service-maternity-and-neonatology",
      about: "Родильное отделение и отделение неонатологии",
    },
    { path: "/service-hospital", about: "Стационар" },
    { path: "/service-dentistry", about: "Стоматология" },
    {
      path: "/service-traumatology-and-orthopedics",
      about: "Травматология и ортопедия",
    },
    { path: "/service-urology-gynecology", about: "Урология, гинекология" },
    { path: "/service-surgical-procedures", about: "Хирургические процедуры" },
    {
      path: "/service-euthanasia-and-funeral",
      about: "Эутаназия и ритуальные услуги",
    },
    // ----------------------------------------------------------------------------------------------------------
    {
      path: "/service-ultrasonography",
      about: "Ультразвуковое исследование",
    },
    {
      path: "/service-endoscopy-and-endosurgery",
      about: "Эндоскопия и эндохирургия",
    },
    {
      path: "/service-spinal-surgery-and-neurology",
      about: "Операции на позвоночнике и неврология",
    },
    {
      path: "/service-plastic-surgery",
      about: "Пластические операции",
    },
    {
      path: "/service-operations-on-the-head",
      about: "Операции на голове",
    },
  ];
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
            <Route path="/Service" element={<Service />} />

            {servicesRoutes.map((service) => (
              <Route
                key={service.path}
                path={service.path}
                element={<ServicePage about={service.about} />}
              />
            ))}

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
