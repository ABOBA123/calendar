import React, { useState } from "react";
import "./App.css";
import Cell from "./components/cell";
import Matrix from "./components/Matrix";

function App() {
  const [matrix, setMatrix] = useState(new Date());
  const [active, setActiveDate] = useState(new Date());
  return (
    <div>
      <div className='first-slide'>
        <Matrix matrixDate={matrix} setMatrixDate={setMatrix} />
      </div>
    </div>
  );
}

export default App;
