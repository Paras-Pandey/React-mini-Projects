import { useState } from "react";
import { context } from "./index";
import ChildComponent from "./childComponent";
import SubChildComponent from "./subChildComponent";

function ParentComponent() {
  const [theme, setTheme] = useState("Light");

  return (
    <context.Provider value={[theme, setTheme]}>
      <h1>Parent Component</h1>
      <ChildComponent />
      <SubChildComponent />
    </context.Provider>
  );
}

export default ParentComponent;
