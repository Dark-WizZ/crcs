import Hero from './Hero';
import MapView from './MapView';
import PieView from './PieView';
import TrendView from './TrendView';
import BarView from './BarView';
import TableView from './TableView';
import {HashRouter, Routes, Route} from 'react-router-dom'

function Content() {
  return ( <div className="content">
    <HashRouter>
    <Hero />
    <Routes >
    <Route path='/' element={<MapView />} />
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