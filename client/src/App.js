import React from "react";
import "./styles/main.css";
import mainBanner from "./img/main-page/banner-headr.png";
import Header from "./components/Header";
import ContactPage from './components/ContactPage'

function App() {
  return (
    <div className="App">
      <Header />
        <ContactPage/>      
    </div>
  );
}

export default App;
