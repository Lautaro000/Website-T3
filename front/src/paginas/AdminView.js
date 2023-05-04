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



  const [scoreList, setScoreList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userScoreList, setUserScoreList] = useState([]);
  const [currentScoreList, setCurrentScoreList] = useState([]);
  const [specificUserEmail, setSpecificUserEmail] = useState("");
  const handleUserSelection = (email) => {
    setSpecificUserEmail(email);
  };


  const loadSpecificUserScores = () => {
    setLoading(true);
    setMessage("");
    API.call(
      `scores/specific_user_scores/?email=${specificUserEmail}`,
      (response) => {
        console.log(response);
        setCurrentScoreList(response);
        setLoading(false);
      },
      (error) => {
        setMessage("Error en el sistema");
        console.log(error);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    loadSpecificUserScores();
  }, [specificUserEmail]);

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


  return (
    <div>
      <Navbar className="navbar" />

      <main className="container">
        <section id="dashboard">
          <h2>User Scores</h2>

          
          <Table
              headers={[
                { title: "User", key: "user.email" },
                { title: "Score", key: "score" },
                { title: "Average score", key: "user.average_score" },
                { title: "Total score", key: "user.total_score" },
              ]}
              data={currentScoreList}
            />
        </section>

        <section id="dashboard2">
          <h2>Dashboard Engine Escape</h2>
          <Table headers = {[
              {title: "User", key:"user.email"},
              {title: "Score", key: "score"},
              {title: "Average score", key: "user.average_score"},
              {title: "Total score", key: "user.total_score"},
              {title: "",key: "user.email", render: (email) => {return ( <Link to="#" onClick={(e) => { e.preventDefault(); handleUserSelection(email); }}> Ver perfil </Link>);},},
            ]}
              data={scoreList}
            />
        </section>
        
        {/* <Graphs className="graphs"></Graphs> */}
        <Graphs scores={scoreList} />
      </main>
      <Footer/>
    </div>
  );
}

export default AdminView;
