import "./App.css";
import React, { useState } from "react";
function App() {
  const data = [
    { name: "CUSTOM", boxcolor: "white", id: 1 },
    { name: "CHECK", boxcolor: "black", id: 2 },
    { name: "BOX", boxcolor: "snow", id: 3 },
  ];
  const [selectedId, setSelectedId] = useState();
  const [selectedName, setSelectedName] = useState("");

  const changeButtonColor = (id) => {
    if (selectedId === id) {
      setSelectedId();
    } else {
      setSelectedId(id);
      setSelectedName("Clicked!");
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
                  selectedId === item.id ? item.boxcolor : "darkslategray",
              }}
            >
              {selectedId === item.id ? selectedName : item.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
