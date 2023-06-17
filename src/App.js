import './App.scss';
import Content from './comps/Content';
import Footer from './comps/Footer';
import Header from './comps/Header';
import Topbar from './comps/Topbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
