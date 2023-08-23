import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import BodyMainPage from "./components/BodyMainPage";
import Footer from "./components/Footer";
import PriseList from "./components/PriseList";
import ServicePage from "./components/ServicePage";


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
            <Route path="/price" element={<PriseList></PriseList>} />
            <Route path="/priceAnalisys" element={<ServicePage/>} />
            <Route path="/" element={<MainPage />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  );
}

export default App;
