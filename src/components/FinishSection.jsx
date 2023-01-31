import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { StepLayout } from "../layout/StepLayout"

export const FinishSection = () => {
    const {inputs,stepActive,setStepActive,isPaying,setIsPaying} = useContext(AppContext);
    const {addonsAdded,price,plan,typeBilling} = inputs;
  return (
    <>
    
    <StepLayout title="Finishing up" description="Double check everything looks OK before confirming">
        <div className="finishing">
            <div className="finishing-service flex">
                <div>
                    <p className="finishing-plan bold">{plan} ({typeBilling == "mo" ? "Monthly" : "Yearly"})</p>
                    <button type="button" className="finishing-change" onClick={() => setStepActive(2)}>Change</button>
                </div>
                <p className="bold">${price + "/" + typeBilling}</p>
            </div>
            {
                addonsAdded.map(e =>{
                    return (
                        <div className="finishing-addons flex" key={e.id}>
                            <p className="finishing-addons-name">{e.name}</p>
                            <p className="finishing-addons-price">+${e.price}/{typeBilling}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className="final flex">
                <p className="final-text">Total (per {typeBilling == "mo" ? "month" : "year"})</p>
                <p className="final-price">${
                    addonsAdded.reduce((acc,add) => acc += add.price,price)
                    }/{typeBilling}</p>
        </div>
    </StepLayout>
    <div className="buttons ">
        <button className="buttons-back" onClick={() => setStepActive(stepActive - 1)}>
            Go Back
        </button>
        <button className="buttons-confirm" onClick={() => setIsPaying(true)}>
            Confirm
        </button>
    </div>
    
    </>
  )
}
