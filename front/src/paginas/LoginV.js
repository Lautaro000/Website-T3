import React, {useState} from "react";
import "../styles/login.css";
import API from "../utils/API";
import Button from "../components/Button";
import Input from "../components/Input";

const LoginV = () => {
    const [msg, setMsg] = useState("")
    const [data, setData] = useState({})
  
    const onChangeValue = (name, value) => {
      setData({...data, [name]:value})
    }
  
    const onSubmit = () => {
      console.log(data)
      setMsg("")
  
      API.call(
        'users/login/',
        (response) => {
          console.log(response)
          localStorage.setItem("token", response.token)
          localStorage.setItem('dataKey', JSON.stringify({email: data.email}));
          window.location.href = "/profile"
        }, 
        (response) => {
          console.log(response)
          setMsg(response.error)
        },
        {
          method: "post",
          body: JSON.stringify(data)
        }
      )
    }
    
    return (
        <div className="cover">
            <h1>Login</h1>
            <Input name="email" onChangeValue= {onChangeValue} label="Email"/>
            <Input name="password" type= {"password"} onChangeValue= {onChangeValue} label="Password"/>
            <div className="text-danger">{msg}</div>
            <Button onClick={onSubmit}type = "primary">Login</Button>
        </div>
    )
}

export default LoginV;