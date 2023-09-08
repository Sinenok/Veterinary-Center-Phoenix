import React, { useEffect,useState } from 'react';
import "./../styles/oleg.css";
import HeaderBanner from "./HeaderBanner"
import EnrollComponent from './EnrollComponent';

const PriceTable = ({ services }) => {
     console.log(services);
    
    return (
    <div className='tableWrapperService'> 
        <table className="service-table">
        <tbody>
            {services[0].map((service, index) => (
            
            <tr key={index}>
                
                {(services[1][index] == "" && services[2][index] == "") ? 
                (
                    <td colSpan="3" className='subtitleth'>{service}</td>
                ):
                (
                    <>
                    <td>{service}</td>
                    <td>{services[1][index]}</td>
                    <td>{services[2][index]}</td>
                </>
                )
                }
                
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
  };
  
  const ServicePage = ({about}) => {

    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('https://steamget.ru/price_list') 
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData); 
                setData(jsonData); 
            })
            .catch(error => console.error('Ошибка при запросе:', error));
    }, []);

    function  RenderBlock() {
        if (about == "Анестезия и интенсивная терапия"){
            return(
            <>
            <div className='CenterBlock'>
                    <p>
                    В своей практике мы используем принципы доказательной медицины! Мы не лечим гомеопатией и не назначаем «фуфломицины», которые ничего, кроме финансовых потерь владельца, не несут. 
                    </p>
                    <p>
                    Врач - терапевт - это, как правило, первый врач, с которым Вы столкнетесь, придя на прием с заболевшим животным. Врач задаст Вам несколько вопросов, касающихся начала, характера развития болезни, клинических признаков и прочего, что поможет в постановке диагноза. Старайтесь отвечать на его вопросы как можно более полно и правдиво (особенно это касается режима кормления), по возможности расскажите и обо всех ранее перенесенных заболеваниях и сданных анализах.
                    </p>
                </div>
                {/* <div className='CenterBlock CenterFill'>
                    <p>А часто ли при наличии внешне здорового животного мы идем с ним в ветеринарную клинику?</p>
                    <p>Ответ очевиден: нечасто.</p>
                </div> */}
                <div className='CenterBlock'>
                    <p>
                    Даже ранее посещенные вместе с животным страны и континенты могут оказаться решающим фактором в постановке диагноза. Это позволит точно оценить состояние животного, что вкупе в тщательным осмотром в ряде случаев позволит поставить диагноз и назначить правильное лечение сразу на приеме с минимальными дополнительными исследованиями. Наши питомцы не могут нам сказать, где, что у них болит, давно ли началось, каков характер и сила боли, что их беспокоит... Поэтому первый разговор с врачом так важен.
                    </p>
                    <p>
                    При необходимости врач-терапевт назначит дополнительные исследования (анализы крови, мочи, кала и др.), проведение УЗИ, рентгена, КТ, МРТ и других исследований, которые помогут правильной постановке диагноза и назначению успешного лечения!
                    </p>
                </div>
                </>
            );
        }
        if (about == "Родильное отделение и отделение неонатологии"){
            return(
                <>
                <div className='CenterBlock'>
                        <p>
                        Специалисты нашего Центра одними из первых в России начали заниматься проблемами новорожденных собак и кошек. К настоящему времени накоплена большая база теоретических и практических знаний в области неонатологии животных.  
                        </p>
                    </div>
                    <div className='CenterBlock CenterFill'>
                        <p>В нашем Центре проводится интенсивная терапия новорожденных животных, имеющих проблемы с нормальным материнским вскармливанием. </p>
                        {/* <p>Ответ очевиден: нечасто.</p> */}
                    </div>
                    <div className='CenterBlock'>
                        <p>
                        Если малыш вялый, не сосет или плохо сосет маму, не прибавляет в весе, есть возможность привезти его к нам, в отделение неонатологии, где есть специальное оборудование для интенсивной терапии новорожденных (инкубаторы-брудеры) с поддержанием заданной влажности, температуры, ионизацией воздуха, оксигенотерапией. При помощи такого оборудования, а также знаний и умений, мы постараемся помочь малышу! 
                        </p>
                        <p>
                        Ряд признаков, когда необходимо обратиться к врачу-неонатологу:
                        </p>
                         <ul>
                            <li>1.	Постоянное скуление (более 20 мин)</li>
                            
                            <li>2.	Слизистые оболочки бледные, серые или синюшные.</li>
                            
                            <li>3.	Неспособность сосать молоко и оставаться с однопомётниками.</li>
                            <li>4.	Диарея.</li>
                            <li>5.	Вздутый или спавшийся животик.</li>
                            <li>6.	Потеря веса или неспособность набирать вес.</li>
                         </ul>
                    </div>
                    </>
            );
        }
    }
      return (
        <div className='ServicePage'>
            <HeaderBanner headTitle={about} />
                <div className='ServiceBlock'>
                    <div className='LeftSection'>
                        <p className='LeftTitle'>Описание раздела</p>
                        <p className='LeftSubTitle'>Какая то надпись</p>
                    </div>

                    <div className='CenterSection'>
                        {RenderBlock()}
                        
                        {(data) ? (
                        <PriceTable services = {data[about]} 
                        ></PriceTable>
                    
                    ):(
                    <p>loading..</p>
                    )}
                    
                    </div>
                </div>
                <div>
                    <EnrollComponent></EnrollComponent>
                </div>
        </div>
  );
};
  
  export default ServicePage;