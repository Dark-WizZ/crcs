import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import dummyData from '../data/dummyData'
import MapPopup from '../comps/MapPopup'
import {useState} from 'react'
import Filters from '../comps/Filters'

const defIcon = new L.icon({
  iconUrl: markerIcon
})
function MapView() {
  const [showFilter,setShowFilter] = useState(false)
  const [data, setData] = useState(dummyData)

  const fltrClk = (e) => {
    if(showFilter) setShowFilter(false)
    else setShowFilter(true)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return ( 
    <div className="map_view">
      <div className="title">
        <h1>GEOGRAPHIC OVERVIEW</h1>
      </div>
      <Filters data={data} setData={setData}/>
      <div className="map_container">
        <MapContainer center={[ 23.805450,78.398438]} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            data.map((obj,i)=>{
              return <Marker position={obj.latlng} icon={defIcon}>
                <Popup> <MapPopup obj={obj} /> </Popup>
            </Marker>
            })
          }
        </MapContainer>
      </div>
    </div>
   );
}

export default MapView;