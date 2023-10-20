import { useState } from "react";
import { useQuery } from "react-query";

function Button({ status }) {
  const { data, error } = useQuery(
    "first-query",
    () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(Math.random()), 200);
      });
    },
    { enabled: status },
  );

  return <button>{data}</button>;
}

function ToggleButton() {
  const [visibility, setVisibility] = useState(true);
  const [status, setStatus] = useState(false);

  function toggleVisibility() {
    setVisibility((oldVisibility) => !oldVisibility);
  }

  function toggleStatus() {
    setStatus((oldStatus) => !oldStatus);
  }

  return (
    <div>
      {visibility && <Button status={status} />}
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
}

export default ToggleButton;
