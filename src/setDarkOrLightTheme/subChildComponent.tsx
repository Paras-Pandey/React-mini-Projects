import { useContext } from "react";
import { context } from ".";

function SubChildComponent() {
  const [theme, setTheme] = useContext(context);

  function handleChangeTheme(oldTheme) {
    setTheme((oldTheme) => {
      return oldTheme === "Dark" ? "Light" : "Dark";
    });
  }

  return (
    <div>
      <h3>I am sub child Component</h3>
      <button onClick={handleChangeTheme}>Change Theme</button>
    </div>
  );
}

export default SubChildComponent;
