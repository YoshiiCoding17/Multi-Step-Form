
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { StepLayout } from "../layout/StepLayout"
import { Buttons } from "./Buttons"
import arcade from "../images/icon-arcade.svg"
import advanced from "../images/icon-advanced.svg"
import pro from "../images/icon-pro.svg"

export const PlanSection = () => {
  const {inputs,setInputs} = useContext(AppContext)
  const {typeBilling,addonsAdded} = inputs;
  console.log("ME RENDERICE PLAN SECTION")
  useEffect(() => {
    const price = document.querySelector(".selected").querySelector(".billing-price").textContent.match(/\d+/).join("");
    setInputs({
      ...inputs,
      price: Number(price),
    })
  },[typeBilling])

  const handleChange = ({target}) =>{
    const newAddons = addonsAdded.map(e =>{
        e.price = target.checked ? e.price * 10 : e.price / 10;
        return e;
    })
    setInputs({
      ...inputs,
      typeBilling: target.checked ? "yr" : "mo",
      addonsAdded:newAddons
    })
  }
  const updateBilling = ({target}) =>{
    document.querySelector(".selected")?.classList.remove("selected");
    target.classList.add("selected");
    const price = target.querySelector(".billing-price").textContent.match(/\d+/).join("");
    setInputs({
      ...inputs,
      price : Number(price),
    })
  }
  return (
    <>
        <StepLayout title="Select your plan" description="You have the option of monthly or yearly billing">

          <div className="billing">
            <div className="billing-div selected" onClick={updateBilling}>
              <div>
                <img src={arcade} alt="arcade" />
              </div>
              <div className="billing-description">
                <p className="billing-title">Arcade</p>
                <p className="billing-price">${typeBilling == "mo" ? 9 : 9 * 10}/{typeBilling}</p>
                {typeBilling == "yr" && <p className="billing-offer">2 months free</p>}
              </div>
            </div>
            <div  className="billing-div" onClick={updateBilling}>
              <div>
                <img src={advanced} alt="" />
              </div>
              <div className="billing-description">
                <p className="billing-title">Advanced</p>
                <p className="billing-price">${typeBilling == "mo" ? 12 : 12 * 10}/{typeBilling}</p>
                {typeBilling == "yr" && <p className="billing-offer">2 months free</p>}
              </div>
            </div>
            <div  className="billing-div" onClick={updateBilling}>
              <div>
                  <img src={pro} alt="" />
              </div>
              <div className="billing-description">
                <p className="billing-title">Pro</p>
                <p className="billing-price">${typeBilling == "mo" ? 15 : 15 * 10}/{typeBilling}</p>
                {typeBilling == "yr" && <p className="billing-offer">2 months free</p>}
              </div>
            </div>
          </div>

          <div className="billing-type">
            <p className="monthly">Monthly</p>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={typeBilling == "yr"}/>
                <span className="slider round"></span>
            </label>
            <p className="yearly">Yearly</p>
          </div>

        </StepLayout>
        <div className="buttons">
            <Buttons/>
        </div> 
    </>
  )
}
