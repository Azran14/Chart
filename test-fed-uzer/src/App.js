import "./App.css";
import Chart from "react-google-charts";
import { useState } from "react";
import icon from "../src/Logo.png";

function App() {
  const [valueX, setValueX] = useState({});
  const [valueY, setValueY] = useState({});
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(true);
  }

  return (
    <div>
      <img className="logo" src={icon} alt="logo" />
      <h1 className="title">Bienvenue sur votre espace Client</h1>
      <div className="container">
        <h2>Renseignez une valeur pour chaque champs</h2>
        <div className="container__input">
          <div className="container__input--X">
            <label>Renseignez la valeur X</label>
            <input
              id="X"
              type="number"
              placeholder="ex : 7"
              required
              onChange={(e) => setValueX(e.target.value)}
            />
          </div>
          <div className="container__input--Y">
            <label>Renseignez la valeur Y</label>
            <input
              id="Y"
              type="number"
              placeholder="ex : 5"
              required
              onChange={(e) => setValueY(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleClick}>
          <em>Visualiser</em>
        </button>

        {visible && (
          <div className="container__chart">
            <div className="container__chart--pie">
              <Chart
                width={"375px"}
                height={"300px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Votre graphique", "En X et Y"],
                  ["X", parseInt(valueX)],
                  ["Y", parseInt(valueY)],
                ]}
                options={{
                  title: "Votre graphique personnalisé (PieChart)",
                }}
              />
            </div>
            <div className="container__chart--donut">
              <Chart
                width={"800px"}
                height={"500px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Votre graphique", "En X et Y"],
                  ["X", parseInt(valueX)],
                  ["Y", parseInt(valueY)],
                ]}
                options={{
                  title: "Votre graphique personnalisé (DonutChart)",
                  pieHole: 0.4,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
