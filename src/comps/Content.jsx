import Hero from './Hero';
import MapView from '../pages/MapView';
import PieView from '../pages/PieView';
import TrendView from '../pages/TrendView';
import BarView from '../pages/BarView';
import TableView from '../pages/TableView';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard';

function Content() {
  return ( <div className="content">
    <HashRouter>
    <Hero />
    <Routes >
    <Route path='/' element={<Dashboard />} />
      <Route path='/barview' element={<BarView />} />
      <Route path='/pieview' element={<PieView />} />
      <Route path='/mapview' element={<MapView />} />
      <Route path='/trendview' element={<TrendView />} />
      <Route path='/tableview' element={<TableView />} />
    </Routes>
    </HashRouter>
  </div> );
}

export default Content;