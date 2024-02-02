import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 250 },
  { name: "Group C", value: 370 },
  { name: "Group D", value: 450 },
  { name: "Group E", value: 520 },
];

const COLORS = ["green", "yellow", "red", "orange", "gray"];

const PieChartComponents = () => {
  return (
    <div className="w-80 h-80 mx-auto min-h-screen flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          //   cx={200}
          //   cy={200}
          innerRadius={120}
          outerRadius={200}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponents;
