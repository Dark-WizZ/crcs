import secData from "../data/sectorPro";
import {Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement,Tooltip, Legend)

const data = {
  labels: Object.keys(secData),
  datasets:[
    {
      data: Object.values(secData)
    }
  ]
}

function PiewView() {
  return ( <div className="pie_view">
    <div className="pie_container">
      <Pie data={data}></Pie>
    </div>
  </div> );
}

export default PiewView;