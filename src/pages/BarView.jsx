import stateWiseRegData from "../data/stateWiseReg"
import{Chart, CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend}from 'chart.js'
import { Bar } from "react-chartjs-2"
import back from '../icons/left.png'
import { useNavigate } from "react-router-dom"
import {switchPath} from '../context/nav'
import {distClr as colorCodes} from "../data/color"
import { useContext, useEffect, useState } from "react"
import {DeviceContext} from "../context/DeviceContext"
import { PathContext } from "../context/PathContext"

Chart.register(
  CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend
)

const optionsMob = {
  maintainAspectRatio:false,
  scales:{
    y:{
      ticks:{
        mirror:true,
        color:'black',
        z:1,
        min:10,
        stepSize:1
      }
    }
  },
  responsive: true,
  indexAxis: 'y',
  plugins: {
    legend: {
      display:false,
      position: 'bottom'
    },
  }
}

const optionDesk = {
  maintainAspectRatio:false,
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'bottom'
    },
  }
}

const optionDeskHome = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'bottom'
    },
  }
}


const labels = Object.keys(stateWiseRegData)

const lightColorCode = colorCodes.map(c => c+'F1')

const data = {
  labels,
  datasets: [
    {
      label: 'Number of Registered Societies',
      data: Object.values(stateWiseRegData),
      backgroundColor: lightColorCode,
      borderColor: colorCodes,
      borderWidth:2
    }
  ]
}

function Barview() {
  const nav = useNavigate();
  const {isMobile} = useContext(DeviceContext)
  const {isHome} = useContext(PathContext)
  const [options, setOptions] = useState(optionDeskHome)

  useEffect(()=>{
    if(isMobile) setOptions(optionsMob)
    else if (isHome) setOptions(optionDeskHome)
    else setOptions(optionDesk)
  })

  return ( <div className="bar_view">
      <div className="title">State Wise Registration
        <img src={back} alt="dashboard" onClick={()=>switchPath('barview', nav)}/>
      </div>
    <div className="bar_container">
      <Bar options={options} data={data}/>
    </div>
  </div> );
}

export default Barview;