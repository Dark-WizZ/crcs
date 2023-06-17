import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import dummyData from '../data/dummyData'
import MapPopup from './MapPopup'
import {useState} from 'react'
import searchIcon from '../icons/search_b.png'
import filterIcon from '../icons/filter.png'
import Filters from './Filters'

const defIcon = new L.icon({
  iconUrl: markerIcon
})
function MapView() {
  const [showFilter,setShowFilter] = useState(false)

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
      <Filters />
      {/* <div className="filters">
        <img src={filterIcon} alt="filter" onClick={fltrClk}/>
        {showFilter && <div className="wrapper">
          <form onSubmit={submitHandler}>
            <div className="name_ip">
              <label htmlFor="name_ip">Name: </label>
              <input type="text" placeholder='Enter Socity Name' id='name_ip'/>
            </div>
            <div className="state_ip">
              <label htmlFor="state_ip">State: </label>
              <input type="text" placeholder='Enter State' id='state_ip'/>
            </div>
            <div className="district_ip">
              <label htmlFor="district_ip">District</label>
              <input type="text" placeholder='Enter District' id='district_ip'/>
            </div>
            <div className="sector_ip">
              <label htmlFor="sector_ip">Sector: </label>
              <input type="text" placeholder='Enter Sector' id='sector_ip'/>
            </div>
            <div className="dor_ip">
              <div className="text">Date of Registration</div>
              <div className="from_ip">
                <label htmlFor="from_ip">From: </label>
                <input type="text" id='from_ip' placeholder='dd/mm/yyyy'/>
              </div>
              <div className="to_ip">
              <label htmlFor="to_ip">To: </label>
                <input type="text" id='from_ip' placeholder='dd/mm/yyyy' />
              </div>
            </div>
            <button type="submit">Search</button>
          </form>
        </div>}
      </div> */}
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