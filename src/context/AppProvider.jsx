import { useMemo, useState } from "react"
import { AppContext } from "./AppContext"

export const AppProvider = ({children}) => {
  const [stepActive,setStepActive] = useState(1);
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    phone:"",
    plan: "Arcade",
    typeBilling:"mo",
    addonsAdded:[],
    price: 9
  })
  const [addons, setAddons] = useState([
    {
    id:1,
    name:"Online Service",
    description:"Access to multiplayer games",
    price:1,
    selected:false,
  },
  {
    id:2,
    name:"Larger Storage",
    description:"Extra 1TB of cloud save",
    price:2,
    selected:false,
  },
  {
    id:3,
    name:"Customizable Profile",
    description:"Access to multiplayer games",
    price:2,
    selected:false,
  },
])
  const [isPaying, setIsPaying] = useState(false);
  return (
    <AppContext.Provider value={{stepActive,setStepActive,inputs,setInputs,addons,setAddons,isPaying,setIsPaying}}>
      {children}
    </AppContext.Provider>
  )
}
