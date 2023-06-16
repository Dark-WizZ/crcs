import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import dummyData from '../data/dummyData'
import MapPopup from './MapPopup'

const defIcon = new L.icon({
  iconUrl: markerIcon
})
function MapView() {
  return ( 
    <div className="map_view">
      <div className="map_search">

      </div>
      <div className="filters">

      </div>
      <div className="map_container">
        <MapContainer center={[ 23.805450,78.398438]} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            dummyData.map((obj,i)=>{
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