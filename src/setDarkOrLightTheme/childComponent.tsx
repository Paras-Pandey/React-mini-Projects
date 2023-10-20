import { useContext } from "react";
import { context } from ".";

function ChildComponent() {
  const [theme, setTheme] = useContext(context);

  const background = theme === "Dark" ? "black" : "yellow";
  const color = theme === "Dark" ? "white" : "black";

  return (
    <div style={{ background, color }}>
      <h2>I am child Component</h2>
    </div>
  );
}

export default ChildComponent;
