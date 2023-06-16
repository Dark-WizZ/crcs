import './App.scss';
import Content from './comps/Content';
import Header from './comps/Header';
import Topbar from './comps/Topbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Topbar />
      <Content />
    </div>
  );
}

export default App;
