
import { useContext, useState } from "react"
import { AppContext } from "../context/AppContext"
import { StepLayout } from "../layout/StepLayout"
import { Buttons } from "./Buttons"


export const PersonalInfo = () => {
    const {stepActive,setStepActive,inputs,setInputs} = useContext(AppContext)
    const [isIncorrect, setIsIncorrect] = useState({
        name:false,
        email:false,
        phone:false,
    });
    const {name,email,phone} = inputs;
    
    const handleChange = ({target}) =>{
        setInputs({
            ...inputs,
            [target.name]: target.value
        })
    }
    const validate = () => {
        if(name.trim() == ""){
            setIsIncorrect({
                ...setIsIncorrect,
                name:true,
            })
            return;
        }
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())){
            setIsIncorrect({
                ...setIsIncorrect,
                email:true,
            })
            return;
        }
        if(phone.trim() == ""){
            setIsIncorrect({
                ...setIsIncorrect,
                phone:true,
            })
            return;
        }
        setStepActive(stepActive + 1)
    }
    return (
        <>
        <StepLayout title="Personal Info" description="Please provide your name,email address, and phone number.">
            <div className="info-div">
                <div className="info-labels">
                    <label htmlFor="name">Name</label>
                    {
                        isIncorrect.name 
                        ?
                        <label htmlFor="" className="info-error">This field is required</label> : null
                    }
                </div>
                
                <input id="name" className={isIncorrect.name ? "info-input info-input-error" : "info-input"} type="text" name="name" onChange={handleChange} placeholder="e.g Stephen King" value={name}/>
            </div>
            
            <div className="info-div">
                <div className="info-labels">
                    <label htmlFor="email">Email</label>
                    {
                        isIncorrect.email
                        ?
                        <label htmlFor="email" className="info-error">You need to enter a valid email</label> : null
                    }
                </div>
                <input id="email" className={isIncorrect.email ? "info-input info-input-error" : "info-input"} type="email" name="email" onChange={handleChange} placeholder="e.g stephenking@lorem.com" value={email}/>
            </div>

            <div className="info-div">
                <div className="info-labels">
                    <label htmlFor="phone">Phone</label>
                    {
                        isIncorrect.phone
                        &&
                        <label htmlFor="" className="info-error">This field is required</label>
                    }
                </div>
                <input id="phone" className={isIncorrect.phone ? "info-input info-input-error" : "info-input"} type="text" name="phone" onChange={handleChange} placeholder="e.g +1 234 567 890" value={phone}/>
            </div>
        </StepLayout>
        <div className="buttons">
            <div></div>
            <button className="buttons-next" onClick={validate}>
                Next Step
            </button>
        </div> 
        </>
    )
}
