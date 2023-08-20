import React from "react";
import "./styles/main.css";
import mainBanner from "./img/main-page/banner-headr.png";
import Header from "./components/Header";
import ContactPage from './components/ContactPage'
import PriseList from "./components/PriseList";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <PriseList></PriseList>   
      {/* <ContactPage></ContactPage> */}
      {/* <PrivacyPolicy></PrivacyPolicy> */}
    </div>
  );
}

export default App;
