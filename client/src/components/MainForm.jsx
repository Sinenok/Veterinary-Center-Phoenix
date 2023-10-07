import React, { useState } from "react";
import formCat from "./../img/main-page/formCatNew.png";
import "./../styles/main.css";
import FormSubmit from "./FormSubmit";

const MainForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isIncomplete, setisIncomplete] = useState(false);
  const [formData, setFormData] = useState({
    recordName: "",
    recordPhone: "",
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
    
    if (formData.recordPhone.length !== 15) {
        setisIncomplete(true); // Устанавливаем состояние для отображения предупреждения
        return;
      }
    try {
      const response = await fetch("https://new.vetfenix.ru/api/formback/", {
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
    <>
      {isSubmitted ? (
        <FormSubmit />
      ) : (
        <form id="record-form" className="main-form" onSubmit={handleSubmit}>
          <div className="record__form">
            <div className="main-form__cat">
              <img className="main-form-img" alt="" src={formCat} />
            </div>
            <div className="record__title">
              Ваш питомец заслуживает
              <br />
              самого лучшего
            </div>
            <div className="record__subtitle">
              Запишитесь на профессиональную консультацию прямо сейчас
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
                  maxLength={15}
                  value={formData.recordPhone}
                  onChange={handleInputChange}
                />
                <label className="record-label">Номер телефона</label>
                <div className="warning-message">
                    {isIncomplete && (
                        <p>Пожалуйста, введите полный номер телефона.</p>
                    )}
                </div>
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
    </>
  );
};

export default MainForm;
