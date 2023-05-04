import React, { useEffect, useState} from "react";
import Table from "../components/Table";
import API from "../utils/API";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Navbar from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/scoreboard.css";
import { useParams } from "react-router-dom";

function UserScoreListView(){
    const params = useParams()
    const[scoreList, setScoreList] = useState([])
    const[isLoading, setLoading] = useState(false)
    const[message, setMessage] = useState("")

    const loadData = () =>{
        setLoading(true)
        setMessage("")
        API.call(
            `scores/${params.id}`,
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
    <h1>Lista de puntajes</h1>
    <Button onClick={loadData} type="primary">Refresh</Button>
    <Button onClick={logout} type="danger">Logout</Button>
    {message}
    {isLoading ? 
        <Spinner msg = "Loading..."/>: 
        <Table headers = {[
            {title: "User", key:"user.email"},
            {title: "First Name", key:"user.first_name"},
            {title: "Score", key: "score"},
            {title: "Average score", key: "user.average_score"},
            {title: "Total score", key: "user.total_score"},
            {title: "Last login", key: "user.last_login"}
        ]} data = {scoreList}/>}
    </div>)
}

export default UserScoreListView;