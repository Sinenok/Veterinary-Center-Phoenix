import React, { useEffect, useState } from "react";
import "./../styles/oleg.css";
import HeaderBanner from "./HeaderBanner";
import EnrollComponent from "./EnrollComponent";
import cat from "./../img/service/Rectangle55.png";
import dog from "./../img/service/027af143-ede5-4e8e-8bf8-189f1490eac5.jpg";
import moreIcon from "./../img/main-page/more.svg";
import { Link } from "react-router-dom";

export const windowStartScrol = () => {
  setTimeout(() => window.scroll(0, 0), 100);
};
const Service = () => {
  return (
    <div className="Service">
      <HeaderBanner headTitle={"Услуги"}></HeaderBanner>

      <div className="wrapperServiceblock">
        <div className="block_service">
          <div class="advantages-cards__title">Эндоскопия</div>
          <div class="advantages-cards__desctription">
            С появлением эндоскопии значительно расширились диагностические возможности, так как при помощи данной процедуры можно тщательно осмотреть исследуемый орган, а также взять ткани (биопсию) на исследование для постановки более точного диагноза.
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
          В нашем Центре наши специалисты быстро и качественно проведут различные процедуры Вашему питомцу. Например, поставят капельницу или сделают перевязку.
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
          Мы занимаемся репродукцией мелких домашних животных более 10 лет. Определение времени вязки, лечение бесплодия сук и кобелей, спермограмма, искусственное осеменение и другие процедуры предлагаем Вашим питомцам.
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
          Огромный спектр оказываемых услуг в области хирургии – отличительная черта нашего Центра. От кастраций, стерилизаций до сложных операций на позвоночнике и суставах.
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
          <div class="advantages-cards__title">Кардиология</div>
          <div class="advantages-cards__desctription">
          Кардиологические проблемы, к сожалению – не редкость у собак и кошек. У кошек самая распространенная патология – гипертрофическая кардиомиопатия, у собак – эндокардиоз митрального клапана и дилятационная кардиомиопатия.
          </div>
          <div class="advantages-cards__more more">
            <Link
              onClick={windowStartScrol}
              to="/service-cardio"
              class="more__text-link"
            >
              ПОДРОБНЕЕ
            </Link>
            <Link
              onClick={windowStartScrol}
              to="/service-cardio"
              class="more__img-link"
            >
              <img src={moreIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="block_service">
          <div class="advantages-cards__title">Операции на голове</div>
          <div class="advantages-cards__desctription">
            Пластика мягкого неба, ноздрей, слухового прохода, блефаропластика, вправление и операции при переломах челюстей и не только.
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
          Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.          </div>
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
          Мы проводим множество операций в области пластической хирургии собак и кошек. Например, закрытие обширных кожных дефектов, перенос кожных лоскутов, пластика мочки носа, коррекция хвоста.
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
          Санация ротовой полости – самая распространенная процедура в нашем Центре. Мы проводим комплексную санацию ротовой полости ультразвуком с обязательной полировкой зубной эмали специальными пастами.
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
          В нашем центре операции проводятся под ингаляционной анестезией под постоянным кардиомониторингом и наблюдением высококвалифицированного анестезиолога. Для купирования сложных состояний проводится интенсивная терапия.
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
          Для наблюдения и проведения интенсивной терапии животное помещается в стационар, где наши специалисты проводят необходимые процедуры. Также стационар требуется и после проведения сложных операций.
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
          Профилактика вирусных заболеваний собак и кошек – обязательная и неотъемлемая часть услуг ветеринарной клиники. У нас Вы можете привить своего питомца импортной поливалентной вакциной, а также сделать чипирование.
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
          Неврологические нарушения – частая патология собак и кошек. Мы занимаемся лечением судорог и эпилепсии, различных нарушений центральной и периферической нервной систем, проводим неврологические операции. 
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
          В нашем Центре работает высококвалифицированный грумер Светлана, которая сделает из Вашей собаки первоклассного красавчика! Также мы проводим гигиеническую стрижку котов и кошек под седацией.
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
          Наверное, сложно представить современную медицину без проведения анализов! Ветеринарная медицина здесь – не исключение. Мы предлагаем широкий спектр лабораторной диагностики, включая исследования на инфекционные, паразитарные и генетические заболевания!
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
          В нашем Центре мы проводим ультразвуковые исследования на современном аппарате УЗИ высокого класса! Своевременная ультразвуковая диагностика способна выявить множество патологий внутренних органов, зачастую, до появления клинических симптомов.
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
          Болезни ушей, зуд, расчесы, различные заболевания кожи, аллергические реакции – со всеми этими проблемами помогает справиться врач-дерматолог. 
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
          Проблемы онкологии, к сожалению, не обходят стороной и братьев наших меньших. Мы помогаем диагностировать, типировать новообразование, а также проводим операции по удалению новообразований с возможностью проведения послеоперационной химиотерапии.
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
          В нашем Центре мы проводим эндоскопическую стерилизацию собак и кошек, после которой нет необходимости в послеоперационном уходе, ношении попон, обработки швов! Также мы проводим эндоскопическую кастрацию крипторхов.
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
          <div class="advantages-cards__title">
            !!!Уход за новорожденными!!!
          </div>
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
