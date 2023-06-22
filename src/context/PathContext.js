import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const PathContext = createContext()

function PathContextProvider({children}) {
  const location = useLocation()
  const [isHome, setIsHome] = useState(location.pathname=='/')
  useEffect(()=>{
    setIsHome(location.pathname=='/')
    console.log(location.pathname,isHome)
  },[location.pathname])

  return ( <PathContext.Provider value={{isHome}}>
    {children}
  </PathContext.Provider> );
}

export default PathContextProvider;