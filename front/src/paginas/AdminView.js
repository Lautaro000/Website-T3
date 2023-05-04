import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import API from "../utils/API";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Navbar from "../components/Navigation";
import { Link } from "react-router-dom";
import Graphs from "../components/Graphs";
import Footer from "../components/Footer";

function AdminView() {
  // Sample data, replace with actual API call to fetch the data
  const [employees, setEmployees] = useState([
    { id: 0, name: "John Doe", score: 0, gamesPlayed: 0 },
  ]);

  // Define table headers
  const headers = [
    { title: "EmployeeID", key: "id" },
    { title: "EmployeeName", key: "name" },
    { title: "Score", key: "score" },
    { title: "Games played", key: "gamesPlayed" },
  ];

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

  return (
    <div>
      <Navbar className="navbar" />

      <main className="container">
        <section id="dashboard">
          <h2>Dashboard Engine Escape</h2>

          
            <Table headers={headers} data={employees} />
        </section>

        <section id="dashboard2">
        <Table headers = {[
            {title: "User", key:"user.email"},
            {title: "Score", key: "score"},
            {title: "Average score", key: "user.average_score"},
            {title: "Total score", key: "user.total_score"},
            {title:"", key:"id", render: (value)=>{ return (<Link to={`/scores/${value}`}> Ver perfil</Link>)}}
        ]} data = {scoreList}/>
        </section>
        

        <Graphs className="graphs"></Graphs>
      </main>
      <Footer/>
    </div>
  );
}

export default AdminView;
