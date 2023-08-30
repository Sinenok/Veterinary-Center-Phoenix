import React from "react";
import "./../styles/main.css";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import mapIcon from "./../img/main-page/mapIcon.png";

function MapClinic() {
  return (
    <>
      <YMaps>
        <Map
          className="main-map-item"
          defaultState={{
            center: [59.86892, 30.459687],
            zoom: 15,
            controls: ["zoomControl"],
          }}
          modules={["control.ZoomControl"]}
        >
          <Placemark
            defaultGeometry={[59.86892, 30.459687]}
            modules={["geoObject.addon.balloon"]}
            properties={{
              balloonContentHeader: 'Ветеринарный Центр "Феникс"',
              balloonContentBody:
                "г. Санкт-Петербург, пр.Обуховской Обороны, д.195",
              balloonContentFooter: "Ежедневно с 10-22",
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: mapIcon,
              iconImageSize: [50, 50],
              iconImageOffset: [-18, -40],
              // iconSize: [336, 267],
              // iconColor: "islands#blueAirportIcon",
            }}
          />
        </Map>
      </YMaps>
    </>
  );
}

export default MapClinic;
