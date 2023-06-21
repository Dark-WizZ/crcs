import secData from "../data/sectorPro";
import {Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from "react-chartjs-2";
import back from '../icons/left.png'

Chart.register(ArcElement,Tooltip, Legend)

const colorCodes = [
  '#1f77b4',  // Blue
  '#ff7f0e',  // Orange
  '#2ca02c',  // Green
  '#d62728',  // Red
  '#9467bd',  // Purple
  '#8c564b',  // Brown
  '#e377c2',  // Pink
  '#bcbd22',  // Olive
  '#17becf',  // Teal
  '#9edae5',  // Light Blue
  '#0066cc',  // dark blue
  '#cc6600',  // dark orange
  '#336633', // dark green
  '#7f7f7f',  // Gray
]
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
  return ( <div className="pie_view">
      <div className="title">Sector Wise Registraton
        <img src={back} alt="dashboard"/>
      </div>
    <div className="pie_container">
      <Pie data={data} options={options}></Pie>
    </div>
  </div> );
}

export default PiewView;