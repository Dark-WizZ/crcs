import {
  Chart, CategoryScale, LinearScale, PointElement,
  LineElement,Title, Tooltip, Legend
} from'chart.js'
import { Line } from 'react-chartjs-2'
import yearWiseRegData from '../data/yearWiseReg'

Chart.register(
  CategoryScale, LinearScale, PointElement,
  LineElement, PointElement, LineElement,Title,
  Tooltip, Legend
)

const options = {
  responsive: true,
  plugins:{
    legend:{
      position: 'top',
    },
    title:{
      display: true,
      text: 'Registraton Trends'
    }
  }
}

const labels = Object.keys(yearWiseRegData)

const data = {
  labels,
  datasets: [
    {
      label: 'Number of Registered Society',
      data: Object.values(yearWiseRegData),
      borderColor:'#ff7f0e',
      backgroundColor: '#ff7f0e33'
    }
  ]
}

function TrendView() {
  return ( <div className="trend_view">
    <div className="trend_container">
      <Line options={options} data={data} />
    </div>
  </div> );
}

export default TrendView;