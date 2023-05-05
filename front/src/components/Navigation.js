import React from "react";
import logo from '../logo.png';
import { useParams } from "react-router-dom";
import LoginV from "../paginas/LoginV";

const Navbar = () => {
  const params = useParams()

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login"
  }
  
  var Admin = localStorage.getItem("admin");

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="/scores">
    //   <img src={logo} alt="Logo" />
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavDropdown"
    //     aria-controls="navbarNavDropdown"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //     <ul className="navbar-nav">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="/scores">
    //           Scoreboard
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/game">
    //           Game
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="/profile">
    //           Profile
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar">
        <a href="/"><img src={logo} alt="Logo" /></a>
        <ul>
          <li><a href="/">Home</a></li>
          {/* <li><a href="#about">About</a></li>
          <li><a href="#dashboard">Dashboard</a></li> */}
          <li><a href="/profile">Profile</a></li>
          {Admin === "true" ? (<li><a href="/admin">Admin</a></li>): (<div></div>)}
          <li><a href="/game">Game</a></li>
          
          {/* <li><a href="/scores">Scoreboard</a></li> */}
        </ul>
        {localStorage.getItem("token") ? <button onClick={logout} id="login">LogOut</button>:<button onClick={logout} id="login">Login</button>}

        {/* <button onClick={logout} id="login">LogOut</button> */}
      </nav>
    
  );
};

export default Navbar;