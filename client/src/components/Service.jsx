import React, { useEffect,useState } from 'react';
import "./../styles/oleg.css";
import HeaderBanner from "./HeaderBanner"
import EnrollComponent from './EnrollComponent';
import cat from "./../img/service/Rectangle55.png";
import moreIcon from "./../img/main-page/more.svg";
const Service = () => {
 

      return (
    <div className='Service'>
      <HeaderBanner headTitle={"Услуги"}></HeaderBanner>

      <div className='wrapperServiceblock'>
            <div className="block_service">
                    <div class="advantages-cards__title">Эндоскопия</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service blockdisplay" >
                <img src={cat} alt="cat"  className="photo2" />
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Эндоскопия</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Репродукция</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Неонатология</div>
                    <div class="advantages-cards__desctription">Мы даем подробную консультацию по уходу за новорождёнными животными, а также профессиональную помощь в выхаживании щенков и котят, которые по каким-либо причинам не могут полноценно развиваться сами.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Хирургия</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service blockFake" >
               
            </div>

            <div className="block_service">
                    <div class="advantages-cards__title">Кардиология</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Операции на голове</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Ортопедия и травматология</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Пластическая хирургия</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service blockFake" >  
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Стоматология</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Анестезия и интенсивная терапия</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Стационар</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Вакцинация и чипирование</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service blockFake" >  
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Неврология</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Груминг и стрижка</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Лабораторная диагностика</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Узи</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service blockFake" >  
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Дерматология</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Онкология</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Кастрация, стерилизация</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service">
                    <div class="advantages-cards__title">Уход за новорожденными</div>
                    <div class="advantages-cards__desctription">Мы предлагаем широкий спектр услуг ортопедии, включая диагностику, консервативное лечение, хирургические вмешательства и послеоперационную реабилитацию.</div>
                    <div class="advantages-cards__more more">
                        <a class="more__text-link" href="">ПОДРОБНЕЕ</a>
                        <a class="more__img-link" href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
            </div>
            <div className="block_service blockFake" >  
            </div>
            <div className="block_service blockFake" >  
            </div>
         
      </div>



      <EnrollComponent></EnrollComponent>
    </div>
  );
};
  
  export default Service;