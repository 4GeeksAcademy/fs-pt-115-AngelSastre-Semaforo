export const TrafficLight = ({ color, setColor, showPurple }) => {
  return (
    <section className="traffic-light mx-auto mt-5 mb-5">
      <div
        className={`light red ${color === "red" ? "on" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "on" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "on" : ""}`}
        onClick={() => setColor("green")}
      ></div>

      {showPurple && (
        <div
          className={`light purple ${color === "purple" ? "on" : ""}`}
          onClick={() => setColor("purple")}
        ></div>
      )}
    </section>
  );
};



