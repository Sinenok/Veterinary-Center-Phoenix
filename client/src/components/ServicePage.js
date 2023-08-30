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
      return (
        <div className='ServicePage'>
            <HeaderBanner headTitle={about} />
                <div className='ServiceBlock'>
                    <div className='LeftSection'>
                        <p className='LeftTitle'>Первый прием</p>
                        <p className='LeftSubTitle'>врача-терапевта</p>
                    </div>

                    <div className='CenterSection'>
                        <div className='CenterBlock'>
                            <p>
                            Врач - терапевт - это, как правило, первый врач, с которым Вы столкнетесь, придя на прием с заболевшим животным. Врач задаст Вам несколько вопросов, касающихся начала, характера развития болезни, клинических признаков и прочего, что поможет в постановке диагноза. Старайтесь отвечать на его вопросы как можно более полно и правдиво (особенно это касается режима кормления), по возможности расскажите и обо всех ранее перенесенных заболеваниях и сданных анализах. 
                            </p>
                            <p>
                            Даже ранее посещенные вместе с животным страны и континенты могут оказаться решающим фактором в постановке диагноза. Это позволит точно оценить состояние животного, что вкупе в тщательным осмотром в ряде случаев позволит поставить диагноз и назначить правильное лечение сразу на приеме с минимальными дополнительными исследованиями. Наши питомцы не могут нам сказать, где, что у них болит, давно ли началось, каков характер и сила боли, что их беспокоит... Поэтому первый разговор с врачом так важен.
                            </p>
                        </div>
                        <div className='CenterBlock CenterFill'>
                            <p>А часто ли при наличии внешне здорового животного мы идем с ним в ветеринарную клинику?</p>
                            <p>Ответ очевиден: нечасто.</p>
                        </div>
                        <div className='CenterBlock'>
                            <p>
                            Врач - терапевт - это, как правило, первый врач, с которым Вы столкнетесь, придя на прием с заболевшим животным. Врач задаст Вам несколько вопросов, касающихся начала, характера развития болезни, клинических признаков и прочего, что поможет в постановке диагноза. Старайтесь отвечать на его вопросы как можно более полно и правдиво (особенно это касается режима кормления), по возможности расскажите и обо всех ранее перенесенных заболеваниях и сданных анализах. 
                            </p>
                            <p>
                            Даже ранее посещенные вместе с животным страны и континенты могут оказаться решающим фактором в постановке диагноза. Это позволит точно оценить состояние животного, что вкупе в тщательным осмотром в ряде случаев позволит поставить диагноз и назначить правильное лечение сразу на приеме с минимальными дополнительными исследованиями. Наши питомцы не могут нам сказать, где, что у них болит, давно ли началось, каков характер и сила боли, что их беспокоит... Поэтому первый разговор с врачом так важен.
                            </p>
                        </div>
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