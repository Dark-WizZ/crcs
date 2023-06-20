import './App.scss';
import Content from './comps/Content';
import Footer from './comps/Footer';
import Header from './comps/Header';
import Topbar from './comps/Topbar';
import ShowContextProvider from './context/ShowContext';

function App() {
  return (
    <div className="App">
      <Header />
      <Topbar />
      <ShowContextProvider>
      <Content />
      </ShowContextProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
