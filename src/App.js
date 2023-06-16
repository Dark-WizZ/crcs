import './App.scss';
import Header from './comps/Header';
import Hero from './comps/Hero';
import MapView from './comps/MapView';
import PiewView from './comps/PieView';
import Topbar from './comps/Topbar';
import TrendView from './comps/TrendView';

function App() {
  return (
    <div className="App">
      <Header />
      <Topbar />
      <Hero />
      {/* <MapView /> */}
      {/* <PiewView /> */}
      <TrendView />
    </div>
  );
}

export default App;
