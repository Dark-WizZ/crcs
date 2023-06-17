import { createContext, useState } from "react";

export const ShowContext = createContext()

function ShowContextProvider({children}) {
  const [showFilter, setShowFilter] = useState(false)
  const [showItem, setShowItems] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  return ( <ShowContext.Provider value={{showFilter, setShowFilter,
  showDetails, setShowDetails, showItem, setShowItems}}>
    {children}
  </ShowContext.Provider> );
}

export default ShowContextProvider;
