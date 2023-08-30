import React, { useEffect,useState } from 'react';
import "./../styles/oleg.css";
import plus from "./../img/price/plus.png"
import minus from './../img/price/minus-sign.png'
import HeaderBanner from "./HeaderBanner"
import EnrollComponent from './EnrollComponent';

const ServiceBlock = ({ title, services, index }) => {
    const [isExpanded, setExpanded] = useState(false);
  
    const toggleExpand = () => {
      setExpanded(!isExpanded);
    };
  
    return (
      <div className="service-block" >
        <div className='service-name' onClick={toggleExpand}> 
            <div>
            <span>{`${index + 1}. `}</span>
            {title}
            </div>
            <div className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
                {isExpanded ? <img   src={minus} alt="-" /> : <img src={plus} alt="+" />}
            </div>
        </div>
        {isExpanded && (
          <div className="services-content">
            {services && services.length > 0 && <PriceTable services={services} expanded={isExpanded}  />}
          </div>
        )}
      </div>
    );
  };
  const PriceTable = ({ services, expanded }) => {
    // console.log(expanded);
    // console.log(services);
    if (!expanded) {
      return null;
    }
    return (
      <table className="price-table">
      
      {/* <tbody>
        {services[0].map((service, index) => (
          
          <tr key={index}>
            <td>{service}</td>
            <td>{services[1][index]}</td>
            <td>{services[2][index]}</td>
          </tr>
        ))}
      </tbody> */}
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
    );
  };
  
  const PriseList = () => {

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

      const about = "Цены";
      return (
    <div className='PriseList'>
        <HeaderBanner headTitle={about} />
        <div className='wrapperServices'>
            {data &&
                Object.entries(data).map(([category, serviceArray], index) => (
                
                <div key={index} className='wrapper-services'>
                    <ServiceBlock
                    title={category}
                    services={serviceArray}
                    index={index}
                    />
                    {serviceArray[2] && serviceArray[0].length > 0 && (
                    <PriceTable services={serviceArray[0]} />
                    )}
          </div>
        ))}
        </div>
        <EnrollComponent></EnrollComponent>
    </div>
  );
};
  
  export default PriseList;