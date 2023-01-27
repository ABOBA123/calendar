import React, { useState } from "react";
import "./App.css";
import Cell from "./components/cell"
function App() {
const [matric, setMatrice] = useState(new Date())
const [date, activeDate] = useState(new Date())
  return (
    <div>
    <div className="first-slide">
      <div className="calendar">
        <div className="fringe">
        <div className="btn-white cursor-p">{"<"}</div>
        <h1>Today</h1>
        <div className="btn-white cursor-p">{">"}</div>
        </div>
        <h1 className="month-size">August <span className="color-green">2019</span></h1>
       <div className="columns">
        <div className="day-week">
       <p>Monday</p>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
        </div>
        <div className="day-week">
       <p>Monday</p>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
        </div>
        <div className="day-week">
       <p>Monday</p>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
        </div>
        <div className="day-week">
       <p>Monday</p>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
        </div>
        <div className="day-week">
       <p>Monday</p>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
        </div>
        <div className="day-week">
       <p>Monday</p>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
        </div>
        <div className="day-week">
       <p>Monday</p>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
       <Cell></Cell>
        </div>
       </div>
      </div>
    </div>
    </div>
  );
}

export default App;
