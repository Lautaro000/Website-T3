import React, { useState } from "react";
import "../styles/login.css";
import API from "../utils/API";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";



function SignUpV  ()  {
  const [msg, setMsg] = useState("");
  
  const [data, setData] = useState({
    total_score: 1,
    average_score: 1,
    last_login: new Date().toISOString(),
  });
  const navigate = useNavigate();

  const onChangeValue = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onSubmit = () => {
    console.log(data);
    setMsg("");

    API.call(
      "users/",
      (response) => {
        console.log(response);
        window.location.href = "/login";
      },
      (response) => {
        console.log(response);
        // Log the error response data
        response.json().then((errorData) => {
          console.log("Error data:", errorData);
        });
        setMsg(response.error);
      },
      {
        method: "post",
        body: JSON.stringify(data),
      }

      
      
    );

    
      
    

  };

  const sign = () => {
    navigate("/LogIn");
  };

  return (
    <div className="cover">
      <h1>Sign Up</h1>
      {/* <Input name="username" onChangeValue={onChangeValue} label="Username" /> */}
      <Input name="email" onChangeValue={onChangeValue} label="Email" />
      <Input name="first_name" onChangeValue={onChangeValue} label="First Name" />
      <Input
        name="password"
        type={"password"}
        onChangeValue={onChangeValue}
        label="Password"
      />
      <Input
        name="password_confirm"
        type={"password"}
        onChangeValue={onChangeValue}
        label="Confirm Password"
      />
      <div className="text-danger">{msg}</div>
      <Button onClick={onSubmit} type="primary">
        Sign Up
      </Button>
      <div id="signinlink">
        <p>Have an Account?</p>{" "}
        <Button onClick={sign} type="primary">
          Log In
        </Button>
      </div>
    </div>
  );
};

export default SignUpV;
