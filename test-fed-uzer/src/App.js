import "./App.css";
import Chart from "react-google-charts";
import { useState } from "react";

function App() {
  const [valueX, setValueX] = useState({});
  const [valueY, setValueY] = useState({});
  const [visible, setVisible] = useState(false);
  let chartClasses = "chart ";

  function handleClick() {
    if (chartClasses !== "chart") {
      chartClasses = "chart--visible";
      console.log(visible);
      console.log(setVisible);
      console.log(chartClasses);
    }
  }

  return (
    <div>
      <div>
        <label>X</label>
        <input
          id="X"
          type="number"
          placeholder="ex : 7"
          required
          onChange={(e) => setValueX(e.target.value)}
        />
        <label>Y</label>
        <input
          id="Y"
          type="number"
          placeholder="ex : 5"
          required
          onChange={(e) => setValueY(e.target.value)}
        />
        <button onClick={handleClick} />
      </div>
      <Chart
        className={chartClasses}
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Your chart", "charterino"],
          ["X", parseInt(valueX)],
          ["Y", parseInt(valueY)],
        ]}
        options={{
          title: "My Graph",
        }}
      />
    </div>
  );
}

export default App;
