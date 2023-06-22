import secData from "../data/sectorPro";
import {Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from "react-chartjs-2";
import back from '../icons/left.png'
import { useNavigate } from "react-router-dom";
import { switchPath } from "../context/nav";
import {distClr as colorCodes} from "../data/color";
import { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";

Chart.register(ArcElement,Tooltip, Legend)

// const colorCodes = Object.values(sectorClr)
const lightColorCode = colorCodes.map(c => c+'F1')


const optionsDes = {
  responsive: true,
  plugins:{
    legend:{
      position: 'right',
      labels:{
        // usePointStyle:true,
        // PointStyle:'cirrightcle'
      }
    }
  }
}
const optionsMob = {
  responsive: true,
  plugins:{
    legend:{
      position: 'bottom',
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
  const {isMobile} = useContext(DeviceContext)
  const options = (isMobile)? optionsMob: optionsDes

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