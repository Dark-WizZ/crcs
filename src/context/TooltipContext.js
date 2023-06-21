import { createContext, useState } from "react";
import Tooltip from 'react-tooltip'

export const TooltipContext = createContext()

function TooltipContextProvider({children}) {
  const [tooltipCont, setTooltipCont] = useState('')

  return ( <TooltipContext.Provider value={{ setTooltipCont}}>
    <Tooltip>
      {tooltipCont}
    </Tooltip>
    {children}
  </TooltipContext.Provider> );
}

export default TooltipContextProvider;