import React, {useState} from "react";
import { useEffect } from "react";

function Input(props){

    const [value, setValue] = useState(props.value || "")

    useEffect(()=>{
        setValue(props.value || "")
    },[props.value])

    useEffect(()=>{
        // console.log(props.name,value)
        props.onChangeValue && props.onChangeValue(props.name, value)
    },[value])

    return(
        <div className="row mt-2">
        <div className="col-6">
          <label className="form-label">{props.label}</label>
        </div>
        <div className="col-6">
          <input autoComplete={"off"} type={props.type ||"text"} className="form-control" onChange={(e)=>{setValue(e.target.value)}} value={value}/>
        </div>
      </div>
    )
}

export default Input;