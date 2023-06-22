import {
  Chart, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import back from '../icons/left.png'
import yearWiseRegData from '../data/yearWiseReg'
import { useNavigate } from 'react-router-dom'
import { switchPath } from '../context/nav'
import { useContext, useEffect, useState } from "react"
import {DeviceContext} from "../context/DeviceContext"
import { PathContext } from "../context/PathContext"

Chart.register(
  CategoryScale, LinearScale, PointElement,
  LineElement, PointElement, LineElement,Title,
  Tooltip, Legend
)

const optionsMob = { 
  maintainAspectRatio:false,
  responsive: true,
  plugins:{
    legend:{
      position: 'bottom',
      labels:{
        usePointStyle:true,
        PointStyle:'circle'
      }
    },
  }
}
const optionDeskHome = {
  responsive: true,
  plugins:{
    legend:{
      position: 'bottom',
      labels:{
        usePointStyle:true,
        PointStyle:'circle'
      }
    },
  }
}
const optionDesk = {
  maintainAspectRatio:false,
  responsive: true,
  plugins:{
    legend:{
      position: 'bottom',
      labels:{
        usePointStyle:true,
        PointStyle:'circle'
      }
    },
  }
}

const labels = Object.keys(yearWiseRegData)

const data = {
  labels,
  datasets: [
    {
      label: 'Number of Registered Societies',
      data: Object.values(yearWiseRegData),
      borderColor:'#ff7f0e',
      backgroundColor: '#ff7f0ecc'
    }
  ]
}

function TrendView() {
  const nav = useNavigate()
  const {isMobile} = useContext(DeviceContext)
  const {isHome} = useContext(PathContext)
  const [options, setOptions] = useState(optionDeskHome)

  useEffect(()=>{
    if(isMobile) setOptions(optionsMob)
    else if (isHome) setOptions(optionDeskHome)
    else setOptions(optionDesk)
  })

  return ( <div className="trend_view">
    <div className="title">Year Wise Registraton
      <img src={back} alt="dashboard" onClick={()=>switchPath('trendview',nav)}/>
    </div>
    <div className="trend_container">
      <Line options={options} data={data} />
    </div>
  </div> );
}

export default TrendView;