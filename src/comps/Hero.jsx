import map from '../icons/map.png'
import pie from '../icons/pie.png'
import trend from '../icons/trend.png'
import dataTable from '../icons/table.png'
import bar from '../icons/bar.png'
import {useNavigate, useLocation} from 'react-router-dom'
import { useRef, useEffect } from 'react'

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

  return ( <div className="hero">
    <section>
      <div className="bar view_card" onClick={e => nav('/barview')} ref={barRef}>
        <img src={bar} alt="bar view" />
        <div className="text">REGISTRATION CHART<br /><span>State wise</span></div>
      </div>
      <div className="trend view_card" onClick={e => nav('/trendview')} ref={trendRef}>
        <img src={trend} alt="trend view" />
        <div className="text">REGISTRATION TRENDS<br /><span>Year wise</span></div>
      </div>
      <div className="pie view_card" onClick={e => nav('/pieview')} ref={pieRef}>
        <img src={pie} alt="pie view" />
        <div className="text">SECTOR PROPORTION
        {/* <br /><span>#Sectors: {Object.keys(sectorData).length}</span> */}
        </div>
      </div>
      <div className="map view_card" onClick={e => nav('/mapview')} ref={mapRef}>
        <img src={map} alt="map view" />
        <div className="text">GEOGRAPHIC INSIGHT
        {/* <br /><span>#States: {Object.keys(stateData).length}</span> */}
        </div>
      </div>
      <div className="data_table view_card" onClick={e => nav('/tableview')} ref={tableRef}>
        <img src={dataTable} alt="data table view" />
        <div className="text">INFORMATION TABLE
        {/* <br /><span>#Societies: {dummyData.length}</span> */}
        </div>
      </div>
    </section>
  </div> );
}

export default Hero;