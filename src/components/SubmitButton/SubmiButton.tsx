import React from "react"
import "./SubmitButton.module.css"

const SubmitButton = ()=>{
    return(
    <div className="flex items-center w-full justify-center" >
        <button className="w-9/12 rounded text-white text-base h-[38px] font-medium" >Submit</button>
    </div>
    )
}

export default SubmitButton;