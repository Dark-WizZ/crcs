import Barview from "./BarView";
import MapView from "./MapView2";
import PiewView from "./PieView";
import TrendView from "./TrendView";

function Dashboard() {
  return ( <div className="dashboard">
    <Barview />
    <TrendView />
    <PiewView />
    <MapView />
  </div> );
}

export default Dashboard;