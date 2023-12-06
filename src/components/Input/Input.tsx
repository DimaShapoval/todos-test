import { useState } from "react"


const Input = () => {
    const [valueOfInput, setValueOfInput] = useState("");
    const changeValue = (e:any)=>{
        const newValue:string = e.target.value;
        setValueOfInput(newValue)
    }
    return (
        <div className="w-full flex" >
            <input type="text" placeholder="Enter todo here" value={valueOfInput} onChange={changeValue} className="w-full  rounded indent-1.5 outline-none h-[38px]" />
        </div>
    )
}

export default Input;