import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import API from "../utils/API";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Navbar from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ScoreListView() {
  const [scoreList, setScoreList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userScoreList, setUserScoreList] = useState([]);
  const [currentScoreList, setCurrentScoreList] = useState([]);
  const [specificUserEmail, setSpecificUserEmail] = useState("a00835462@tec.mx");


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
  }, []);

  return (
    <div>
      <Navbar className="navbar" />
      <main className="container">
        <section>
          <h2>Scores of user</h2>
          {isLoading ? (
            <Spinner msg="Loading..." />
          ) : (
            <Table
              headers={[
                { title: "User", key: "user.email" },
                { title: "Score", key: "score" },
                { title: "Average score", key: "user.average_score" },
                { title: "Total score", key: "user.total_score" },
              ]}
              data={currentScoreList}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default ScoreListView;
