import secData from "../data/sectorPro";
import {Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement,Tooltip, Legend)

const colorCodes = [
  '#1f77b4',  // Blue
  '#ff7f0e',  // Orange
  '#2ca02c',  // Green
  '#d62728',  // Red
  '#9467bd',  // Purple
  '#8c564b',  // Brown
  '#e377c2',  // Pink
  '#7f7f7f',  // Gray
  '#bcbd22',  // Olive
  '#17becf',  // Teal
  '#9edae5',  // Light Blue
  '#1f77b4',  // Blue
  '#ff7f0e',  // Orange
  '#d62728'   // Red
];
const lightColorCode = colorCodes.map(c => c+'F1')


const options = {
  responsive: true,
  plugins:{
    legend:{
      position: 'top',
    },
    title:{
      display: true,
      text: 'Type Wise Registraton'
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
    <div className="pie_container">
      <Pie data={data} options={options}></Pie>
    </div>
  </div> );
}

export default PiewView;