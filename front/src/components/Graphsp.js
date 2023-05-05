import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  LineChart,
  Line,
} from "recharts";
import "../styles/index.css";

function Graphsp({ scores, displayUser }) {
  const pieData = scores.map((score) => ({
    name: score.user.email,
    TotalScore: score.user.total_score,
  }));

  const targetUser = displayUser || (scores.length > 0 ? scores[0].user.email : null);

  const targetUserScore = scores.find((score) => score.user.email === targetUser);

  const barData = targetUserScore
    ? [
        {
          name: targetUserScore.user.email,
          Score: targetUserScore.score,
        },
      ]
    : [];

  const lineData = scores.map((score) => ({
    name: score.user.email,
    Score: score.score,
    Time: score.timestamp,
  }));

  return (
    <section id="Graph">
      <div style={{ textAlign: "center" }}>
        <h2>Graphs</h2>
        {scores.length > 0 ? (
          <div className="graphs">
            {/* <PieChart width={400} height={400}>
              <Pie
                dataKey="TotalScore"
                isAnimationActive={false}
                data={pieData}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#72b840"
                label
              />
              <Tooltip />
            </PieChart> */}
            <BarChart
              width={400}
              height={400}
              data={barData}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="Score" fill="#72b840" background={{ fill: "#eee" }} />
            </BarChart>
            <LineChart
              width={400}
              height={400}
              data={lineData}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Score" stroke="#72b840" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
}

Graphsp.defaultProps = {
  scores: [],
  displayUser: null,
};

export default Graphsp;
