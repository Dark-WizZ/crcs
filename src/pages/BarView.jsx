import stateWiseRegData from "../data/stateWiseReg"
import{Chart, CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend}from 'chart.js'
import { Bar } from "react-chartjs-2"
import back from '../icons/left.png'
import { useNavigate } from "react-router-dom"
import {switchPath} from '../context/nav'

Chart.register(
  CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'bottom'
    },
  }
}

const labels = Object.keys(stateWiseRegData)

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

  return ( <div className="bar_view">
      <div className="title">State Wise Registration
        <img src={back} alt="dashboard" onClick={()=>switchPath('barview', nav)}/>
      </div>
    <div className="bar_container">
      <Bar options={options} data={data} />
    </div>
  </div> );
}

export default Barview;