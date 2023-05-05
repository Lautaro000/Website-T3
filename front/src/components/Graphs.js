// import React from "react";
// import {PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar} from "recharts";
// import "../styles/index.css";
// function Graphs(){
//     const data = [
//         { name: "A00123456", AvgScore: 2000 },
//         { name: "A00123457", AvgScore: 1500 },
//         { name: "A00123458", AvgScore: 1000 },
//         { name: "A00123459", AvgScore: 5000 },
//       ];
//     return(
//         <section id="Graph">
//       <div style={{ textAlign: "center" }}>
//       <h2>Graphs</h2>
//       <div className="graphs">
//         <PieChart width={400} height={400}>
//           <Pie
//             dataKey="AvgScore"
//             isAnimationActive={false}
//             data={data}
//             cx={200}
//             cy={200}
//             outerRadius={80}
//             fill="#72b840"
//             label
//           />
//           <Tooltip />
//         </PieChart>
//         <BarChart
//           width={400}
//           height={400}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 80,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis
//             dataKey="name"
//             scale="point"
//             padding={{ left: 10, right: 10 }}
//           />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="AvgScore" fill="#72b840" background={{ fill: "#eee" }} />
//         </BarChart>
//       </div>
//     </div>

//         </section>
//     )
// };

// export default Graphs;

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
} from "recharts";
import "../styles/index.css";

function Graphs({ scores }) {
  const tasksCompleted = scores
    .filter((score) => score.completed)
    .reduce((accumulator, score) => accumulator + score.tasks, 0);

  const totalTime = scores.reduce(
    (accumulator, score) => accumulator + score.time,
    0
  );

  const pieData = [
    { name: "Tasks Completed", value: tasksCompleted },
    { name: "Total Time (min)", value: totalTime },
  ];

  const barData = scores.map((score) => ({
    name: score.user.email,
    Tasks: score.tasks,
    Time: score.time,
  }));

  return (
    <section id="Graph">
      <div style={{ textAlign: "center" }}>
        <h2>Graphs</h2>
        {scores.length > 0 ? (
          <div className="graphs">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={pieData}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#72b840"
                label
              />
              <Tooltip />
            </PieChart>
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
              <Bar dataKey="Tasks" fill="#72b840" />
              <Bar dataKey="Time" fill="#8884d8" />
            </BarChart>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
}

Graphs.defaultProps = {
  scores: [],
};

export default Graphs;
