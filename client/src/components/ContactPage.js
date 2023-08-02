import React from "react";
import "./../styles/main.css";
import vk from "./../img/contacts/vk.png";
import dog from './../img/contacts/Rectangle80.png'

function ContactPage() {
  return (
    <div className="ContactPage" >
      <div className="block" id="block1">
      <div className="text">
        <p>г. Санкт-Петербург, пр. Обуховской Обороны, д.195</p>
        <p>Клиника: +7 (812) 965-34-50</p>
        <p>e-mail: fenix@vetfenix.ru</p>
        <p>с 10-00 до 22-00 каждый день</p>
      </div>
      <img src={vk} alt="Logo" className="logo_vk" />
    </div>
  
    <div className="block" id="block2">
      <img src={dog} alt="Dog" className="photo" />
    </div>
  
    <div className="block" id="block3">
      <h1>У вас есть вопросы?</h1>
      <h2>Мы всегда на связи и готовы помочь</h2>
      <form className="form">
        <input type="text" className="input" placeholder="Ваше имя" />
        <input type="text" className="input" placeholder="Номер телефона" />
        <input type="text" className="input" placeholder="Комментарий" />
      </form>
      <button className="button">Записаться на консультацию</button>
    </div>
    </div>
  );
}

export default ContactPage;
