import secData from "../data/sectorPro";
import {Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from "react-chartjs-2";
import back from '../icons/left.png'
import { useNavigate } from "react-router-dom";
import { switchPath } from "../context/nav";
import {distClr as colorCodes} from "../data/color";

Chart.register(ArcElement,Tooltip, Legend)

// const colorCodes = Object.values(sectorClr)
const lightColorCode = colorCodes.map(c => c+'F1')


const options = {
  responsive: true,
  plugins:{
    legend:{
      position: 'bottom',
      labels:{
        // usePointStyle:true,
        // PointStyle:'cirrightcle'
      }
    }
  }
}

const data = {
  labels: Object.keys(secData),
  datasets:[
    {
      data: Object.values(secData),
      backgroundColor: lightColorCode,
      borderColor: colorCodes,
      borderWidth:2
    }
  ]
}

function PiewView() {
  const nav = useNavigate();

  const expandClk=()=>{
    let parts= window.location.href.split('/')
    let loc = parts[parts.length-1]
    if(loc=='pieview') nav('../')
    else nav('../pieview')
  }
  return ( <div className="pie_view">
      <div className="title">Sector Wise Registraton
        <img src={back} alt="dashboard" onClick={()=>switchPath('pieview',nav)}/>
      </div>
    <div className="pie_container">
      <Pie data={data} options={options}></Pie>
    </div>
  </div> );
}

export default PiewView;