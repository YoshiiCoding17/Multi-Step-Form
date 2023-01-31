import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext";

import { StepItem } from "./StepItem";


export const Steps = () => {
  const {stepActive} = useContext(AppContext)
  const [steps] = useState([
    {
      number: 1,
      title: "Your info",
    },
    {
      number: 2,
      title: "Select plan",
    },
    {
      number: 3,
      title: "Add-ons",
    },
    {
      number: 4,
      title: "Summary",
    }
  ])
  return (
    <div className="steps">
        {
          steps.map(step =>{
            return <StepItem key={step.number} step = {step} active={stepActive == step.number}/>
          })
        }
    </div>
  )
}
