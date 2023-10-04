import React from "react";
import "./../styles/main.css";
import HeaderBanner from "../components/HeaderBanner";
import photo11 from "./../img/about page/about 11.png";
import photo12 from "./../img/about page/about 12.png";
import photo13 from "./../img/about page/about 13.png";
import photo21 from "./../img/about page/about 21.png";
import photo22 from "./../img/about page/about 22.png";
import photo23 from "./../img/about page/about 23.png";
import photo31 from "./../img/about page/about 31.png";
import EnrollComponent from "../components/EnrollComponent";
import { useNavigate } from "react-router-dom";
import { windowStartScrol } from "../components/Service";

const AboutClinicPage = () => {
  const about = "Наш Центр";
  const navigate = useNavigate();
  const aboutHandleClick = (value) => {
    // window.scroll(0, 0);
    navigate(`/${value}`);
    windowStartScrol();
  };
  return (
    <div className="AboutClinicPage">
      <div className="AboutClinicPage-wrapper">
        <HeaderBanner headTitle={about} />
        <div className="about-body">
          <div className="about-body__wraper">
            <div className="about-body__titles">
              <span className="spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              Мы - <span className="title-span"> многопрофильный </span>
              <br className="about-br" />
              <span className="spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              лечебно-диагностический
              <br className="about-br" />
              <span className="title-span"> центр здоровья</span> и репродукции
              животных
            </div>
            <div className="multidisciplinary about-body__content">
              <div className="multidisciplinary__item">
                <img className="multidisciplinary-img" src={photo11} alt="" />
              </div>
              <div className="multidisciplinary-text multidisciplinary__item about-clinic-text">
                Наша цель - обеспечить оптимальное здоровье и благополучие ваших
                питомцев. В нашем центре мы объединили несколько важных
                направлений, чтобы предоставить вам все необходимое в одном
                месте.
              </div>
              <div className="multidisciplinary__item">
                <img className="multidisciplinary-img" src={photo12} alt="" />
              </div>
              <div className="multidisciplinary__item">
                <img className="multidisciplinary-img" src={photo13} alt="" />
              </div>
            </div>
          </div>
          <div className="about-body__wraper">
            <div className="about-body__titles">
              В нашей клинике вы найдете команду
              <br className="about-br" />
              <span className="team-space spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span className="title-span"> высококвалифицированных </span>
              <br className="about-br" />
              <span className="spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              ветеринарных специалистов
            </div>
            <div className="team about-body__content">
              <div className="team-text-debice team__item about-clinic-text">
                Мы готовых предоставить медицинскую помощь вашим питомцам в
                различных областях, включая репродукцию, неонатологию,
                дерматологию, ортопедию, травматологию, неврологию и эндоскопию.
              </div>
              <div className="team__item">
                <img className="team-img" src={photo21} alt="" />
              </div>
              <div className="team-text team__item about-clinic-text">
                <p>
                  Мы готовых предоставить медицинскую помощь вашим питомцам в
                  различных областях, включая репродукцию, неонатологию,
                  дерматологию, ортопедию, травматологию, неврологию и
                  эндоскопию.
                </p>
                <p>
                  Мы оборудованы самым современным оборудованием для
                  диагностики, что позволяет нам проводить точные и надежные
                  исследования для постановки диагноза. Мы предлагаем
                  индивидуальный подход к каждому пациенту, учитывая его
                  уникальные потребности и особенности.
                </p>
              </div>
              <div className="team__item">
                <img className="team-img" src={photo22} alt="" />
              </div>
              <div className="team-text-debice team__item about-clinic-text">
                Мы готовых предоставить медицинскую помощь вашим питомцам в
                различных областях, включая репродукцию, неонатологию,
                дерматологию, ортопедию, травматологию, неврологию и эндоскопию.
              </div>
              <div className="team__item">
                <img className="team-img" src={photo23} alt="" />
              </div>
            </div>
          </div>
          <div className="about-body__wraper">
            <div className="about-body__titles">
              <span className="spaces">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              В зооаптеке и ветеринарном магазине
              <br className="about-br" />
              <span className="spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span className="title-span"> вы можете приобрести </span>
              <br className="about-br" />
              корма, витамины, различные препараты
            </div>
            <div className="purchase about-body__content">
              <div className="purchase__item about-clinic-text">
                В зооаптеке и ветеринарном магазине вы найдете широкий
                ассортимент качественных продуктов для здоровья и благополучия
                ваших питомцев. У нас вы можете приобрести корма, витамины,
                препараты для обработки и защиты от паразитов, а также различные
                аксессуары и средства для ухода. Мы тщательно подбираем
                продукты, уделяя особое внимание их качеству и безопасности.
              </div>
              <div className="purchase__item about-clinic-text">
                В магазине Вы можете приобрести корма супер-премиум класса,
                такие как "Royal Canin", "Hill`s", "ProPlan". У нас представлена
                широкая линейка как повседневных кормов, так и лечебных
                ветеринарных диет. Также в нашем магазине представлены различные
                товары для ухода за животными, лакомства, ошейники, игрушки и
                многое другое. По вопросам наличия того или иного товара, Вы
                можете позвонить по единому телефону нашего Центра:
                &#40;812&#41; 965-34-50
              </div>
            </div>
          </div>
          <div className="about-body__wraper">
            <div className="about-body__titles">
              <span className="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              Мы предлагаем услуги <span className="title-span"> груминга</span>
              ,
              <br className="about-br" />
              чтобы ваш питомец выглядел
              <br className="about-br" />
              <span className="spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              и чувствовал себя превосходно
            </div>
            <div className="felt about-body__content">
              <div className="row-first felt-row">
                <div className="felt__item about-clinic-text">
                  Аккуратно и красиво постриженная шерсть это залог не только
                  красоты, но и прекрасного самочувствия Вашего любимца.
                  Сбившаяся в колтуны шерсть не только портит внешний вид , но и
                  доставляет животному сильный дискомфорт. Кожа под спутанной
                  шерстью очень плохо вентилируется и преет, собака может
                  повредить кожу, яростно пытаясь избавиться от колтунов . Так
                  же правильно подобранная стрижка поможет скрыть анатомические
                  недостатки и подчеркнуть достоинства Вашего любимца.
                </div>
                <div className="felt__item">
                  <img className="felt-img" src={photo21} alt="" />
                  <p className="about-clinic-text">
                    Уход за шерстью Вашего питомца лучше доверить профессионалу.
                    Мы рады предложить Вам широкий спектр услуг: гигиеническая,
                    модельная стрижка, стрижка под машинку, тримминг, мытье,
                    вычесывание колтунов, уход за когтями и ушками. Наши мастера
                    используют только профессиональную косметику и инструменты,
                    у нас Вы сможете получить консультации по подбору косметики
                    для домашнего использования.
                  </p>
                </div>
              </div>
              <div className="row-second felt-row">
                <div className="felt-button felt__item">
                  <button
                    onClick={() => aboutHandleClick("service-grooming")}
                    className="felt-grooming-btn"
                  >
                    перейти на страницу Груминг
                  </button>
                </div>
                <div className="felt__item about-clinic-text">
                  <p>
                    Уход за шерстью Вашего питомца лучше доверить профессионалу.
                    Мы рады предложить Вам широкий спектр услуг: гигиеническая,
                    модельная стрижка, стрижка под машинку, тримминг, мытье,
                    вычесывание колтунов, уход за когтями и ушками. Наши мастера
                    используют только профессиональную косметику и инструменты,
                    у нас Вы сможете получить консультации по подбору косметики
                    для домашнего использования.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-body__wraper">
            <div className="about-body__titles">
              Мы создаем <span className="title-span"> доверительные </span>
              <br className="about-br" />
              <span className="spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              отношения с вами, предоставляя&nbsp;
              <br className="about-br" />
              <span className="spaces">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              четкую информацию,
              <br className="about-br" />
              разъяснения и подробные планы лечения
            </div>
            <div className="trusting-relationship about-body__content">
              <div className="trusting-relationship__title about-clinic-text">
                Мы всегда готовы ответить на ваши вопросы и обсудить любые
                <br />
                аспекты здоровья и благополучия вашего питомца.
              </div>
            </div>
          </div>
          <EnrollComponent />
        </div>
      </div>
    </div>
  );
};

export default AboutClinicPage;
