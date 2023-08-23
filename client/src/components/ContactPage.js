import React from "react";
import "./../styles/oleg.css";
import vk from "./../img/contacts/vk.png";
import dog from './../img/contacts/Rectangle80.png'
import HeaderBanner from "./HeaderBanner"

function ContactPage() {
  const about = "Контакты";
  return (
    <div className="ContactPage" >
        <HeaderBanner headTitle={about} />
        <div class="containerCon">
            <div class="flex-container">
                <div className="block" id="block1">
                    <div className="text">
                        <p>г. Санкт-Петербург, пр. Обуховской Обороны, д.195</p>
                        <p>Клиника: +7 (812) 965-34-50</p>
                        <p>e-mail: <span>fenix@vetfenix.ru</span></p>
                        <p>с 10-00 до 22-00 каждый день</p>
                    </div>
                    <img src={vk} alt="Logo" className="logo_vk" />
                </div>
                <div className="block" id="block2">
                <img src={dog} alt="Dog" className="photo" />
                </div>
                <div className="block" id="block4">
                    <h1>Вставить таблицу</h1>
                </div>
            </div>
            <div className="block" id="block3">
                
            </div>
        </div>
        
        

    </div>
  );
}

export default ContactPage;
