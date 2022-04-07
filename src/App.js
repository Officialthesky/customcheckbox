import "./App.css";
import React, { useState } from "react";
function App() {
  const data = [
    { name: "CUSTOM", boxcolor: "black", id: 1 },
    { name: "CHECK", boxcolor: "red", id: 2 },
    { name: "BOX", boxcolor: "green", id: 3 },
  ];
  const [selectedId, setSelectedId] = useState();

  const changeButtonColor = (id) => {
    if (selectedId === id) {
      setSelectedId();
    } else {
      setSelectedId(id);
    }
  };
  return (
    <div className="App">
      {data.map((item, index) => {
        return (
          <div key={index} className="boxDivision">
            <button
              onClick={() => changeButtonColor(item.id)}
              style={{
                backgroundColor:
                  selectedId === item.id ? "cornsilk" : "darkslategray",
              }}
            >
              {item.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
