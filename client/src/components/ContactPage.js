import React, { useState } from "react";
import "./../styles/oleg.css";
import vk from "./../img/contacts/vk.png";
import dog from "./../img/contacts/Rectangle80.png";
import HeaderBanner from "./HeaderBanner";
import mainMap from "./../img/main-page/map-contact.png";
import MapClinic from "./MapClinic";
import FormSubmit from "./FormSubmit";

function ContactPage() {
  const about = "Контакты";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    recordName: "",
    recordPhone: "",
    recordComent: "",
  });
  const formatPhoneNumber = (inputValue) => {
    const cleanedValue = inputValue.replace(/\D/g, "");

    let formattedValue = cleanedValue.startsWith("7")
      ? `+${cleanedValue}`
      : `+7${cleanedValue}`;

    if (formattedValue.length > 2) {
      formattedValue = `${formattedValue.substring(
        0,
        2
      )} ${formattedValue.substring(2)}`;
    }
    if (formattedValue.length > 6) {
      formattedValue = `${formattedValue.substring(
        0,
        6
      )} ${formattedValue.substring(6)}`;
    }
    if (formattedValue.length > 10) {
      formattedValue = `${formattedValue.substring(
        0,
        10
      )} ${formattedValue.substring(10)}`;
    }
    if (formattedValue.length > 15) {
      formattedValue = `${formattedValue.substring(
        0,
        15
      )} ${formattedValue.substring(15)}`;
    }

    return formattedValue;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/formback/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Данные успешно отправлены");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке данных", error);
      alert(
        "Произошла ошибка при отправке данных, попробуйте еще раз\n" + error
      );
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "recordPhone") {
      const formattedValue = formatPhoneNumber(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  return (
    <div className="ContactPage">
      <HeaderBanner headTitle={about} />
      <div class="containerCon">
        <div class="flex-container">
          <div className="block" id="block1">
            <div className="text">
              <p>г. Санкт-Петербург, пр. Обуховской Обороны, д.195</p>
              <p>Клиника: +7 (812) 965-34-50</p>
              <p>
                e-mail: <span>fenix@vetfenix.ru</span>
              </p>
              <p>с 10-00 до 22-00 каждый день</p>
            </div>
            <a href="https://vk.com/fenixvetgroup">
              <img className="logo_vk" alt="" src={vk} />
            </a>
          </div>
          <div className="block" id="block2">
            <img src={dog} alt="Dog" className="photo" />
          </div>
          <div className="block" id="block4">
            {/* <div className="main-map__wrapper">
              <MapClinic />
            </div> */}
          </div>
        </div>
        <div className="block" id="block3">
          {isSubmitted ? (
            <FormSubmit />
          ) : (
            <form className="main-form" onSubmit={handleSubmit}>
              <div className="record__form">
                <div className="record__title">У вас есть вопросы?</div>
                <div className="record__subtitle">
                  Мы всегда на связи и готовы помочь
                </div>
                <div className="record__inputs">
                  <div className="record__input-group">
                    <input
                      autoComplete="off"
                      placeholder=" "
                      className="record-input"
                      required
                      name="recordName"
                      type="text"
                      value={formData.recordName}
                      onChange={handleInputChange}
                    />
                    <label className="record-label">Ваше имя</label>
                  </div>
                  <div className="record__input-group">
                    <input
                      autoComplete="off"
                      placeholder=" "
                      className="record-input"
                      required
                      name="recordPhone"
                      type="tel"
                      // pattern="\+7\d{10}"
                      maxLength={15}
                      value={formData.recordPhone}
                      onChange={handleInputChange}
                    />
                    <label className="record-label">Номер телефона</label>
                  </div>
                  <div className="record__input-group">
                    <input
                      autoComplete="off"
                      placeholder=" "
                      className="record-input"
                      required
                      name="recordComent"
                      type="textarea "
                      value={formData.recordComent}
                      onChange={handleInputChange}
                    />
                    <label className="record-label">Комментарий</label>
                  </div>
                </div>
                <div className="record__button-form">
                  <button className="record__button-submit" type="submit">
                    Записаться на консультацию
                  </button>
                </div>
                <div className="record__checkbox">
                  <label>
                    <input
                      required
                      className="record__checbox-agreement-real"
                      type="checkbox"
                      name="recordCheckbox"
                    />
                    <span className="record__checbox-agreement-custom"></span>
                    Даю согласие на обработку данных
                  </label>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <div className="contact-map-conteiner">
        <div className="main-map__wrapper">
          <MapClinic />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
