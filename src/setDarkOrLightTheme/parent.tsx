import { useContext } from "react";
import { context } from "./index";

function ParentComponent() {
  return (
    <context.Provider value={{ theme: "dark" }}>
      <h1>Parent Component</h1>
    </context.Provider>
  );
}

export default ParentComponent;
