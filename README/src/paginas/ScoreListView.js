import React, { useEffect, useState} from "react";
import Table from "../components/Table";
import API from "../utils/API";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Navbar from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
//import "../styles/scoreboard.css";
import { Link } from "react-router-dom";

function ScoreListView(){

    const[scoreList, setScoreList] = useState([])
    const[isLoading, setLoading] = useState(false)
    const[message, setMessage] = useState("")

    const loadData = () =>{
        setLoading(true)
        setMessage("")
        API.call(
            "scores/",
            (response)=>{
            console.log(response)
            setScoreList(response)
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

    return(<div>
    
    
    <Navbar className="navbar"/>
    <main className="container">
    <h1>Lista de puntajes</h1>
    {/* <Button onClick={loadData} type="primary">Refresh</Button>
    <Button onClick={logout} type="danger">Logout</Button>
    {message}
    {isLoading ? 
        <Spinner msg = "Loading..."/>:  */}
        <Table headers = {[
            {title: "User", key:"user.email"},
            {title: "Score", key: "score"},
            {title: "Average score", key: "user.average_score"},
            {title: "Total score", key: "user.total_score"},
            {title:"", key:"id", render: (value)=>{ return (<Link to={`/scores/${value}`}> Ver perfil</Link>)}}
        ]} data = {scoreList}/>
        
        {/* } */}
    </main>
    </div>
    )
}

export default ScoreListView;