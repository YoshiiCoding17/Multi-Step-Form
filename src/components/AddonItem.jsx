import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const AddonItem = ({addon}) => {
    console.log("Me renderice Addon ITEM")
    const {inputs,setInputs,setAddons,addons} = useContext(AppContext)
    
    const {id,name,description,price,selected} = addon;

    const {typeBilling,addonsAdded} = inputs;

    const convertedPrice = typeBilling == "mo" ? price : price * 10;

    const handleCheckbox = ({target}) =>{
        const newAddons = addons.map(a =>{
            if(a.id == target.dataset.id){
                a.selected = !a.selected;
            }
            return a;
        })
        setAddons(newAddons);
        let addonsChanged;
        if(target.checked){
            addonsChanged = [...addonsAdded,{
                id,
                name,
                price:convertedPrice,
            }]
        }else{
            addonsChanged = addonsAdded.filter(a => a.id !== target.id)
        }
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
          <p className="addon-price">+${convertedPrice}/{typeBilling}</p>
      </div>
    )
}