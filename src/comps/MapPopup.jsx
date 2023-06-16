import downArrow from '../icons/down_arrow.png'
import {useState} from 'react'

function MapPopup({obj}) {
  const [showDetails, setShowDetails] = useState(false)
  const dropDown= (e)=>{
    if(showDetails){
      e.nativeEvent.originalTarget.classList.toggle('rotate')
      setShowDetails(false)
    }else{
      e.nativeEvent.originalTarget.classList.toggle('rotate')
      setShowDetails(true)
    }
  }

  return ( <div className="map_popup">
    <div className="name">
      <div className="text"><b>{obj.name}</b></div>
      <img src={downArrow} alt="drop down" className="drop_down"onClick={dropDown}/>
    </div>
    {showDetails && <div className="details">
      {obj.address && <div className="address"><b>Address:</b> {obj.address}</div>}
      {obj.registrationDate && <div className="dor"><b>Date of Registration:</b> {obj.registrationDate}</div>}
      {obj.areaOfOp && <div className="aop"><b>Area of Operation:</b> {obj.areaOfOp}</div>}
      {obj.sector && <div className="sector"><b>Sector type:</b> {obj.sector}</div>}
      <div className="location"><b>Location: </b>
        {obj.district&&obj.district+','} {obj.state}</div>
    </div>}
  </div> );
}

export default MapPopup;