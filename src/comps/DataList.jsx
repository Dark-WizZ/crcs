import { ShowContext } from "../context/ShowContext";
import dummyData from "../data/dummyData";
import downArrow from '../icons/down_arrow.png'
import {useContext, useState} from 'react'

function DataList() {

  const {showDetails, setShowDetails,showItem, setShowItem} = useContext(ShowContext)
  const dropDown= (e)=>{
    if(showDetails){
      e.nativeEvent.originalTarget.classList.toggle('rotate')
      setShowDetails(false)
    }else{
      e.nativeEvent.originalTarget.classList.toggle('rotate')
      setShowDetails(true)
    }
  }
  return ( <div className="data_list">
    <div className="wrapper">
      {dummyData.map((obj, i)=>{
        return (showItem && <div className="item">
        <div className="name" data-index={i}>
          <div className="text"><b>{obj.name}</b></div>
          <img src={downArrow} alt="drop down" className="drop_down"onClick={dropDown}/>
        </div>
        {showDetails && <div className="details" data-index={i}>
          {obj.address && <div className="address"><b>Address:</b> {obj.address}</div>}
          {obj.registrationDate && <div className="dor"><b>Date of Registration:</b> {obj.registrationDate}</div>}
          {obj.areaOfOp && <div className="aop"><b>Area of Operation:</b> {obj.areaOfOp}</div>}
          {obj.sector && <div className="sector"><b>Sector type:</b> {obj.sector}</div>}
          <div className="location"><b>Location: </b>
            {obj.district&&obj.district+','} {obj.state}</div>
        </div>}
      </div> )
      })}
    </div>
  </div> );
}

export default DataList;