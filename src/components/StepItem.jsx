import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
export const StepItem = React.memo(({step,active}) => { 
    const {number,title} = step;
  return (
    <div className="step">
            <div className={`${active ? "step-circle step-active" : "step-circle"}`}>
                <p>{number}</p>
            </div>
            <div className="step-info">
                <p className="step-number">Step {number}</p>
                <p className="step-name">{title}</p>
            </div>
    </div>
  )
})
