import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Addons } from "./Addons"
import { FinishSection } from "./FinishSection"
import { PersonalInfo } from "./PersonalInfo"
import {PlanSection} from './PlanSection'
import { ThanksSection } from "./ThanksSection"


export const ActualSection = () => {
  const {stepActive,isPaying} = useContext(AppContext)
  if(!isPaying){
    switch(stepActive){
      case 1:
        return <PersonalInfo/>;
      case 2:
        return <PlanSection/>;
      case 3:
        return <Addons/>;
      case 4:
        return <FinishSection/>;
    }
  }else{
    return <ThanksSection/>
  }
  
}
