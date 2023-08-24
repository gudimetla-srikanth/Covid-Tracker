import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
export default function LeafLet() {
  const [requiredata, setRequiredata] = useState([])
  const iconMarker = L.icon({
    iconUrl: require("../location.png"),
    iconSize: [35, 45]
  })
  useEffect(() => {
    const data = async () => {
      const data = await fetch('https://disease.sh/v3/covid-19/countries').then((res) => res.json());
      setRequiredata(data)
    }
    data();
  }, [])
  const ZOOM_LEVEL = 9;
  const position = [20, 77]
  return (
    <div>
      <MapContainer center={position} zoom={ZOOM_LEVEL} >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=TrRdIR0ZSIiTF8D0zDL3"
        />
        {requiredata.map((data) => {
          const center = [data.countryInfo.lat, data.countryInfo.long]
          return <Marker position={center} icon={iconMarker}>
            <Popup>
              {data.country} <br /> No of Active Cases:{data.active} <br /> No of Active Recoverd Cases:{data.recovered} <br /> No of Active Deaths:{data.deaths}
            </Popup>
          </Marker>
        })}

      </MapContainer>
    </div>
  )
}
