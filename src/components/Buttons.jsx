import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"


export const Buttons = React.memo(() => {
    const {stepActive,setStepActive} = useContext(AppContext);
  return (
    <>
        {
          stepActive > 1
          ? 
          <button className="buttons-back" onClick={() => setStepActive(stepActive - 1)}>
            Go Back
          </button>
          :
          null
        }
        <button className="buttons-next" onClick={() => setStepActive(stepActive + 1)}>
          Next Step
        </button>
    </>
    
  )
})

