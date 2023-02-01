import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const AddonItem = ({addon}) => {
    const {inputs,setInputs,setAddons,addons} = useContext(AppContext)
    
    const {id,name,description,price,selected} = addon;

    const {typeBilling,addonsAdded} = inputs;

    const handleCheckbox = ({target}) =>{
        const newAddons = addons.map(a =>{
            if(a.id == target.dataset.id){
                a.selected = !a.selected;
            }
            return a;
        })
        setAddons(newAddons);
        const addonsChanged = addons.filter(a => a.selected)
        console.log(addonsAdded)
        setInputs({
            ...inputs,
            addonsAdded:addonsChanged
        })
    }

    return (
      <div className={selected ? "addons-div addon-selected" : "addons-div"}>
          <input className="addon-checkbox" type="checkbox" onChange={handleCheckbox} data-id={id} checked={selected}/>
          <div className="addon-content">
              <p className="addon-title">{name}</p>
              <p className="addon-description">{description}</p>
          </div>
          <p className="addon-price">+${price}/{typeBilling}</p>
      </div>
    )
}