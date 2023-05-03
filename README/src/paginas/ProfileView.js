import React, { useEffect, useState} from "react";
import Table from "../components/Table";
import API from "../utils/API";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Navbar from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/scoreboard.css";
import { Link } from "react-router-dom";
import Graphs from "../components/Graphs";
import Footer from "../components/Footer";
function ProfileView(){

    const[profileList, setProfileList] = useState([])
    const[isLoading, setLoading] = useState(false)
    const[message, setMessage] = useState("")

    const loadData = () =>{
        setLoading(true)
        setMessage("")
        API.call(
            "profile/current_profile/",
            (response)=>{
            console.log(response)
            setProfileList(response)
            setLoading(false)
        },
        (error)=>{
            setMessage("Error en el sistema")
            console.log(error)
            setLoading(false)
        }
        )
    }

    useEffect(()=> {
        loadData()
    },[])

    const logout = () => {
        localStorage.clear();
        window.location.href = "/login"
      }

      return (<div>
        
        <Navbar className="navbar" />
        <main className="container">
        {/* <Button onClick={loadData} type="primary">Refresh</Button>
    <Button onClick={logout} type="danger">Logout</Button>
    {message}
    {isLoading ? 
        <Spinner msg = "Loading..."/>:  */}
       
      
      <section id="dashboard">
        <h2>Profile</h2>
        <Table headers = {[
            {title:"", key:"image", render: (value)=>{ return (<> <img className="rounded-circle" height={50} src={value}/></>)} },
            {title:"Email", key:"user.email"},
            {title:"First Name", key:"user.first_name"},
            {title:"Total score", key:"user.total_score"},
            {title:"Average score", key:"user.average_score"},
            {title:"Last login", key:"user.last_login"},


        ]} data = {profileList}/>
      </section>

      <Graphs/>

      </main>
      <Footer/>
      </div>
    );
    // return(<div>
    // <Navbar className="navbar"/>
    // <h1>Lista de perfiles</h1>
    // {/* <Button onClick={loadData} type="primary">Refresh</Button>
    // <Button onClick={logout} type="danger">Logout</Button>
    // {message}
    // {isLoading ? 
    //     <Spinner msg = "Loading..."/>:  */}
    //     <Table headers = {[
    //         {title:"", key:"image", render: (value)=>{ return (<> <img className="rounded-circle" height={50} src={value}/></>)} },
    //         {title:"Email", key:"user.email"},
    //         {title:"First Name", key:"user.first_name"},
    //         {title:"Total score", key:"user.total_score"},
    //         {title:"Average score", key:"user.average_score"},
    //         {title:"Last login", key:"user.last_login"},


    //     ]} data = {profileList}/>
    //     {/* } */}
    // </div>)
}

export default ProfileView;