import { createContext, useState, useEffect } from "react";

export const DeviceContext = createContext()

function DeviceContextProvider({children}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth<=768)

  const handle = () => {
    const res = window.innerWidth;
    setIsMobile(res<=768)
  }
  useEffect(()=>{
    window.addEventListener('resize',handle)
    return ()=>window.removeEventListener('resize',handle)
  },[])

  return <DeviceContext.Provider value={{isMobile}}>
    {children}
  </DeviceContext.Provider>;
}

export default DeviceContextProvider;