import map from '../icons/map.png'
import pie from '../icons/pie.png'
import trend from '../icons/trend.png'
import dataTable from '../icons/table.png'
import dummyData from '../data/dummyData'
import bar from '../icons/bar.png'
import {useNavigate, useLocation} from 'react-router-dom'
import { useRef, useEffect } from 'react'
import stateData from '../data/stateWiseReg'
import sectorData from '../data/sectorPro'

function Hero() {
  const barRef = useRef()
  const pieRef = useRef()
  const mapRef = useRef()
  const trendRef = useRef()
  const tableRef = useRef()
  const nav = useNavigate()

  const location = useLocation()


  const refs = [
    barRef, pieRef, mapRef,trendRef,tableRef
  ]
  const clearSelc = () => {
    refs.forEach(e => {
      if(e.current.classList.contains('selected')){
        e.current.classList.remove('selected')
      }
    })
  }
  useEffect(()=>{
    clearSelc()
    switch (location.pathname) {
      case '/barview':
        barRef.current.classList.add('selected')
        break
      case '/pieview':
        pieRef.current.classList.add('selected')
        break
      case '/tableview':
        tableRef.current.classList.add('selected')
        break
      case '/trendview':
        trendRef.current.classList.add('selected')
        break
      case '/mapview':
        mapRef.current.classList.add('selected')
        break
      default:
        break;
    }
  },[location])




  const cardClk = (e, path) =>{
    // let self=false
    // if(e.target.classList.contains('selected')){
    //   path='/'
    //   self=true
    // }
    // refs.forEach(e => {
    //   if(e.current.classList.contains('selected')){
    //     e.current.classList.remove('selected')
    //   }
    // })
    // if(!self)
    // e.target.classList.add('selected')
    nav(path)
  }

  return ( <div className="hero">
    {/* <div className="top">
      <div className="total">Total Reistered Societies: {dummyData.length}</div>
      <div className="download">
        <div className="text">Download raw data: </div>
        <button>Get PDF</button>
      </div>
    </div> */}
    <section>
      <div className="bar view_card" onClick={e => cardClk(e,'/barview')} ref={barRef}>
        <img src={bar} alt="bar view" />
        <div className="text">REGISTRATION CHART<br /><span>State wise</span></div>
      </div>
      <div className="trend view_card" onClick={e => cardClk(e,'/trendview')} ref={trendRef}>
        <img src={trend} alt="trend view" />
        <div className="text">REGISTRATION TRENDS<br /><span>Year wise</span></div>
      </div>
      <div className="pie view_card" onClick={e => cardClk(e,'/pieview')} ref={pieRef}>
        <img src={pie} alt="pie view" />
        <div className="text">SECTOR PROPORTION
        {/* <br /><span>#Sectors: {Object.keys(sectorData).length}</span> */}
        </div>
      </div>
      <div className="map view_card" onClick={e => cardClk(e,'/mapview')} ref={mapRef}>
        <img src={map} alt="map view" />
        <div className="text">GEOGRAPHIC INSIGHT
        {/* <br /><span>#States: {Object.keys(stateData).length}</span> */}
        </div>
      </div>
      <div className="data_table view_card" onClick={e => cardClk(e,'/tableview')} ref={tableRef}>
        <img src={dataTable} alt="data table view" />
        <div className="text">INFORMATION TABLE
        {/* <br /><span>#Societies: {dummyData.length}</span> */}
        </div>
      </div>
    </section>
  </div> );
}

export default Hero;