import React, { useEffect,useState } from 'react';
import "./../styles/oleg.css";
import plus from "./../img/price/plus.png"
import minus from './../img/price/minus-sign.png'

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
    console.log(expanded);
    console.log(services);
    if (!expanded) {
      return null;
    }
    return (
      <table className="price-table">
      {/* <thead>
        <tr>
          <th>Услуги</th>
          <th>Единица измерения</th>
          <th>Стоимость</th>
        </tr>
      </thead> */}
      <tbody>
        {services[0].map((service, index) => (
          <tr key={index}>
            <td>{service}</td>
            <td>{services[1][index]}</td>
            <td>{services[2][index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  };
  
  const PriseList = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/price_list') 
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData); 
                setData(jsonData); 
            })
            .catch(error => console.error('Ошибка при запросе:', error));
    }, []);

    

    const services = [
        {
          title: 'Педиатрия',
          services: [
            { name: 'Услуга 1.1', unit: 'шт', price: '100 руб' },
            { name: 'Услуга 1.2', unit: 'шт', price: '200 руб' },
            { name: 'Услуга 1.3', unit: 'шт', price: '150 руб' },
          ],
          expanded: false,
        },
        {
          title: 'Вакцинация',
          services: [
            { name: 'Услуга 2.1', unit: 'шт', price: '50 руб' },
            { name: 'Услуга 2.2', unit: 'шт', price: '75 руб' },
            { name: 'Услуга 2.3', unit: 'шт', price: '120 руб' },
          ],
          expanded: false,
        },
        {
          title: 'Стационар',
          services: [
            { name: 'Услуга 3.1', unit: 'сутки', price: '1000 руб' },
            { name: 'Услуга 3.2', unit: 'сутки', price: '1500 руб' },
            { name: 'Услуга 3.3', unit: 'сутки', price: '2000 руб' },
          ],
          expanded: false, 
        },
      ];
  
      return (
    //     <div>
    //   {services.map((service, index) => (
    //     <div key={index} className='wrapper-services'>
    //       <ServiceBlock
    //         title={service.title}
    //         services={service.services}
    //         index={index}
    //       />
    //       {service.expanded && service.services.length > 0 && (
    //         <PriceTable services={service.services}  />
    //       )}
    //     </div>
    //   ))}
    // </div>
    <div>
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
  );
};
  
  export default PriseList;