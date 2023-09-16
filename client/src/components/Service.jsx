import React, { useEffect, useState } from "react";
import "./../styles/oleg.css";
import HeaderBanner from "./HeaderBanner";
import EnrollComponent from "./EnrollComponent";
import cat from "./../img/service/Rectangle55.png";
import dog from "./../img/service/027af143-ede5-4e8e-8bf8-189f1490eac5.jpg"
import moreIcon from "./../img/main-page/more.svg";
import { Link } from "react-router-dom";

const Service = () => {
  const windowStartScrol = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="Service">
      <HeaderBanner headTitle={"Услуги"}></HeaderBanner>

      <div className="wrapperServiceblock">
        <div className="block_service">
          <div class="advantages-cards__title">Эндоскопия</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-endoscopy-and-endosurgery"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-endoscopy-and-endosurgery"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service blockdisplay">
          <img src={cat} alt="cat" className="photo2" />
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Амбулаторные процедуры</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-doctor-visit"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-doctor-visit"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Репродукция</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-reproduction"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-reproduction"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Неонатология</div>
          <div class="advantages-cards__desctription">
            Мы даем подробную консультацию по уходу за новорождёнными животными,
            а также профессиональную помощь в выхаживании щенков и котят,
            которые по каким-либо причинам не могут полноценно развиваться сами.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-maternity-and-neonatology"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-maternity-and-neonatology"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Хирургия</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-surgical-procedures"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-surgical-procedures"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service blockFake"></div>

        <div className="block_service">
          <div class="advantages-cards__title">!!!Кардиология!!!</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-surgical-procedures"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-surgical-procedures"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Операции на голове</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-operations-on-the-head"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-operations-on-the-head"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Ортопедия и травматология</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-traumatology-and-orthopedics"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-traumatology-and-orthopedics"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Пластическая хирургия</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-plastic-surgery"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-plastic-surgery"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service blockFake"></div>
        <div className="block_service">
          <div class="advantages-cards__title">Стоматология</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-dentistry"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-dentistry"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">
            Анестезия и интенсивная терапия
          </div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-anesthesia"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-anesthesia"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Стационар</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-hospital"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-hospital"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">
            !!!Вакцинация и чипирование!!!
          </div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-hospital"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-hospital"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service blockFake"></div>
        <div className="block_service">
          <div class="advantages-cards__title">Неврология</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-spinal-surgery-and-neurology"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-spinal-surgery-and-neurology"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Груминг и стрижка</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-grooming"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-grooming"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Лабораторная диагностика</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-laboratory-diagnostics"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-laboratory-diagnostics"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Узи</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-ultrasonography"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-ultrasonography"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service blockFake"></div>
        <div className="block_service">
          <div class="advantages-cards__title">Дерматология</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-dermatology"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-dermatology"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Онкология</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-oncology"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-oncology"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Кастрация, стерилизация</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-castration"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-castration"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">!!!Уход за новорожденными!!!</div>
          <div class="advantages-cards__desctription">
            Мы предлагаем широкий спектр услуг ортопедии, включая диагностику,
            консервативное лечение, хирургические вмешательства и
            послеоперационную реабилитацию.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-castration"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-castration"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service blockFake"></div>
        <div className="block_service blockFake"></div>
      </div>

      <EnrollComponent></EnrollComponent>
    </div>
  );
};

export default Service;
