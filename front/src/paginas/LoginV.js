import React, { useState } from "react";
import "../styles/login.css";
import API from "../utils/API";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const LoginV = () => {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onChangeValue = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onSubmit = () => {
    console.log(data);
    setMsg("");

    API.call(
      "users/login/",
      (response) => {
        console.log(response);
        localStorage.setItem("admin",response.admin);
        localStorage.setItem("token", response.token);
        localStorage.setItem("dataKey", JSON.stringify({ email: data.email }));
        window.location.href = "/profile";
      },
      (response) => {
        console.log(response);
        setMsg(response.error);
        alert("The username or password is incorrect")
      },
      {
        method: "post",
        body: JSON.stringify(data),
      }
    );
  };

  const sign = () => {
    navigate("/SignUp");
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <Input name="email" onChangeValue={onChangeValue} label="Email" />
      <Input
        name="password"
        type={"password"}
        onChangeValue={onChangeValue}
        label="Password"
      />
      <div className="text-danger">{msg}</div>
      <Button onClick={onSubmit} type="primary">
        Login
      </Button>
      <div id="signinlink">
        <p> Dont Have an Account?</p>{" "}
        <Button onClick={sign} type="primary">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default LoginV;
