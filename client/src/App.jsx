import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import BodyMainPage from "./components/BodyMainPage";
import Footer from "./components/Footer";
import AboutClinicPage from "./pages/AboutClinicPage";
import ServicePage from "./components/ServicePage"
import PriseList from "./components/PriseList";
import PrivacyPolicy from "./components/PrivacyPolicy"
import ContactPage from "./components/ContactPage";


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
            <Route path="/ServicePage" element={<ServicePage about={"Прием врача и амбулаторные процедуры"}/>} />
            <Route path="/PriceList" element={<PriseList/>} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
            <Route path="/ContactPage" element={<ContactPage/>} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  );
}

export default App;
