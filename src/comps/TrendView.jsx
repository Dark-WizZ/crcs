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
      text: 'Year wise Registraton'
    }
  }
}

const labels = Object.keys(yearWiseRegData)

const data = {
  labels,
  datasets: [
    {
      label: 'Number of Registered Societies',
      data: Object.values(yearWiseRegData),
      borderColor:'#34A853',
      backgroundColor: '#34A853cc'
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