import { useContext, useState } from 'react';
import './App.scss';
import Content from './comps/Content';
import Footer from './comps/Footer';
import Header from './comps/Header';
import Topbar from './comps/Topbar';
import ShowContextProvider from './context/ShowContext';
import TooltipContextProvider from './context/TooltipContext';
import { DeviceContext } from './context/DeviceContext';



function App() {
  const [showWarn, setShowWarn] = useState(true)
  const {isMobile} = useContext(DeviceContext)

  const ignoreWarn = () =>{
    setShowWarn(false)
  }
  return (
    <div className="App" data-tip=''>
      {(isMobile && showWarn) && <div className='warn'>
        This site isn't optimised for mobiles yet, please use wide-screen devices such as desktops
        <button onClick={ignoreWarn}>Ignore this warning!</button>
      </div>}
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
