import './App.scss';
import Header from './comps/Header';
import Hero from './comps/Hero';
import MapView from './comps/MapView';
import PiewView from './comps/PieView';
import Topbar from './comps/Topbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Topbar />
      <Hero />
      {/* <MapView /> */}
      <PiewView />
    </div>
  );
}

export default App;
