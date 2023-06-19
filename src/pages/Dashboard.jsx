import Barview from "./BarView";
import MapView from "./MapView";
import PiewView from "./PieView";
import TrendView from "./TrendView";

function Dashboard() {
  return ( <div className="dashboard">
    <Barview />
    <TrendView />
    <PiewView />
    <div className="map_view"></div>
  </div> );
}

export default Dashboard;