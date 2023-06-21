import './App.scss';
import Content from './comps/Content';
import Footer from './comps/Footer';
import Header from './comps/Header';
import Topbar from './comps/Topbar';
import ShowContextProvider from './context/ShowContext';
import TooltipContextProvider from './context/TooltipContext';



function App() {
  return (
    <div className="App" data-tip=''>
      <TooltipContextProvider>
      <Header />
      <Topbar />
      <ShowContextProvider>
      <Content />
      </ShowContextProvider>
      {/* <Footer /> */}
      </TooltipContextProvider>
    </div>
  );
}

export default App;
