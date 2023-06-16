import stateWiseRegData from "../data/stateWiseReg"
import{Chart, CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend}from 'chart.js'
import { Bar } from "react-chartjs-2"

Chart.register(
  CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'State Wise Registration'
    }
  }
}

const labels = Object.keys(stateWiseRegData)

const data = {
  labels,
  datasets: [
    {
      label: 'Number of Registered Societies',
      data: Object.values(stateWiseRegData),
      backgroundColor: '#0052CC'
    }
  ]
}

function Barview() {
  return ( <div className="bar_view">
    <div className="bar_container">
      <Bar options={options} data={data} />
    </div>
  </div> );
}

export default Barview;