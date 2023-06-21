import {useState, useEffect, useContext} from 'react'
import {ComposableMap, Geographies, Geography, Annotation,
  ZoomableGroup, Marker} from 'react-simple-maps'
import {scaleLinear} from 'd3-scale'
import stateData from '../data/stateWiseReg'
import data from '../data/dummyData'
import indiaMap from '../data/india.json'
import { TooltipContext } from '../context/TooltipContext'
import back from '../icons/left.png'


const colorScale = scaleLinear().domain([0,1]).range(['#1f77b4','#9467bd'])

function MapView() {
  const {setTooltipCont} = useContext(TooltipContext)
  const [showDetail, setShowDetail] = useState(false)
  const [detail, setDetail] = useState('')

  return ( <div className="map_view">
    <div className="title">Geographic Overview
      <img src={back} alt="dashboard"/>
    </div>
    <div className="map_container">
    <ComposableMap data-tip='' projection="geoMercator" width={150} height={150} projectionConfig={{ scale: 200 }}>
          <ZoomableGroup zoom={1} center={[80,22]}>
            <Geographies geography={indiaMap}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const obj = Object.keys(stateData).find(s => s.toLowerCase() == geo.properties.ST_NM.toLowerCase())
                  return <Geography  
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: obj? colorScale(stateData[obj]):'#808080',
                        outline: "none",
                        
                      },
                      hover: {
                        fill: obj? colorScale(stateData[obj]):'#808080',
                        outline: "#000",
                        stroke:'#ff7f0e',
                        strokeWidth: '0.4'
                      },
                      // pressed: {
                      //   fill: "#2E8B57",
                      //   outline: "none"
                      // }
                    }}
                    onMouseEnter={()=>{
                      setTooltipCont(
                        obj && <div>#{geo.properties.ST_NM}: {stateData[obj]}</div>
                      )
                    }}
                    onMouseLeave={()=>{
                      setTooltipCont('')
                    }}
                  />
                })
              }
            </Geographies>
            {Object.keys(stateData).map((s,i)=>{
              const obj = data.find(d=>d.state==s)
              return <Annotation key={i}
                subject={[obj.latlng[1],obj.latlng[0]]}
                dx={0}
                dy={0}
                connectorProps={{
                  stroke: "black",
                  strokeWidth: 0.1,
                }}
              >
                <text y="-2" textAnchor="middle" fontSize='2px' alignmentBaseline="middle" fill="black">
                  {s}
                </text>
              </Annotation>
            })}
            {data.map((d,i)=>{
              return <Marker key={i} coordinates={[d.latlng[1],d.latlng[0]] } 
                onMouseEnter={()=>{
                  setTooltipCont(
                    <div><b>{d.name}</b></div>
                  )
                }}
                onMouseLeave={()=>{
                  setTooltipCont('')
                }}
                onClick={()=>{
                  setDetail(d)
                  setShowDetail(true)
                }}
              >
                <circle r={1} fill="red" stroke='white' strokeWidth={0.3}></circle>
              </Marker>
            })}
            
          </ZoomableGroup>
        </ComposableMap>
    {showDetail && <div className="detail">
      <button onClick={()=>setShowDetail(false)}>X</button>
      {detail.name && <div className="name"><b>{detail.name}</b></div>}
      {detail.address && <div className="address"><b>Address: </b>{detail.address}</div>}
      {detail.state && <div className="state"><b>State: </b>{detail.state}</div>}
      {detail.district && <div className="district"><b>District: </b>{detail.district}</div>}
      {detail.registrationDate && <div className="dor"><b>Date of Registration: </b>{detail.registrationDate}</div>}
      {detail.areaOfOp && <div className="aoo"><b>Area of Operation: </b>{detail.areaOfOp}</div>}
      {detail.sector && <div className="sector"><b>Sector: </b>{detail.sector}</div>}
    </div>}
    </div>
  </div> );
}

export default MapView;