import React, { useState } from "react";
import "../styles/login.css";
import API from "../utils/API";
import Button from "../components/Button";
import Input from "../components/Input";

function SignUpV  ()  {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({});

  const onChangeValue = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onSubmit = () => {
    console.log(data);
    setMsg("");

    API.call(
      "users/register/", // Change the endpoint to the one used for user registration
      (response) => {
        console.log(response);
        window.location.href = "/";
      },
      (response) => {
        console.log(response);
        setMsg(response.error);
      },
      {
        method: "post",
        body: JSON.stringify(data),
      }
    );
  };

  return (
    <div className="cover">
      <h1>Sign Up</h1>
      <Input name="username" onChangeValue={onChangeValue} label="Username" />
      <Input name="email" onChangeValue={onChangeValue} label="Email" />
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
    </div>
  );
};

export default SignUpV;
