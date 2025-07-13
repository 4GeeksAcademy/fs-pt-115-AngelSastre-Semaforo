import { useState } from "react";
import { TrafficLight } from "./TrafficLight";

export const TrafficControl = () => {
  const [color, setColor] = useState("");
  const [showPurple, setShowPurple] = useState(false);

  const nextColor = () => {
    setColor(prev =>
      prev === "red" ? "yellow" :
      prev === "yellow" ? "green" :
      (showPurple ? (prev === "green" ? "purple" : "red") : "red")
    );
  };

 const togglePurple = () => {
  setShowPurple(prev => {
    const newState = !prev;
    if (newState) setColor("purple");
    else if (color === "purple") setColor("red");
    return newState;
  });
};

  return (
    <div style={{ textAlign: "center" }}>
      <TrafficLight color={color} setColor={setColor} showPurple={showPurple} />
      <div style={{ marginTop: "20px" }}>
        <button onClick={nextColor}>Cambiar color</button>
        <button onClick={togglePurple} style={{ marginLeft: "10px" }}>
          {showPurple ? "Desactivar Púrpura" : "Activar Púrpura"}
        </button>
      </div>
    </div>
  );
};
