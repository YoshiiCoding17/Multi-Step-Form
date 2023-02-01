import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { StepLayout } from "../layout/StepLayout"
import { AddonItem } from "./AddonItem"
import { Buttons } from "./Buttons"


export const Addons = () => {
  const {inputs,addons} = useContext(AppContext);
  return (
    <>
        <StepLayout title="Pick add-ons" description="Add-ons help enhance your gaming experience">
            <div className="addons">
              {
                addons.map(addon =>{
                  return <AddonItem key={addon.id} addon={addon}/>
                })
              }
            </div>
        </StepLayout>
        <div className="buttons">
            <Buttons/>
        </div>
        
    </>
  )
}
