import React, { useState } from 'react';
import formCat from "./../img/main-page/formCat.png";
import "./../styles/main.css";

const MainForm = () => {
    const [formData, setFormData] = useState({
        recordName: '',
        recordPhone: '',
      });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch('http://127.0.0.1:8000/api/formback/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            console.log('Данные успешно отправлены');
          } 
        } catch (error) {
          console.error('Произошла ошибка при отправке данных', error);
        }
      };
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  return (
    <>
      <form className="main-form" onSubmit={handleSubmit}>
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
                pattern="\+7\d{10}"
                onChange={handleInputChange}
              />
              <label className="record-label">Номер телефона</label>
            </div>
          </div>
          <div className="record__button-form">
            <button className="record__button-submit">
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
    </>
  );
};

export default MainForm;
