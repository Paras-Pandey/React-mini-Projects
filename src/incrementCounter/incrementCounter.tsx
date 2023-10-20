import { useReducer } from "react";

const reducer = (oldState, action) => {
  switch (action.value) {
    case "Increase Counter":
      return {
        ...oldState,
        counter: oldState.counter + oldState.step,
      };
    case "Increase Step":
      return {
        ...oldState,
        step: oldState.step + 1,
      };
    case "Decrease Step":
      return {
        ...oldState,
        step: oldState.step - 1,
      };
  }
};

function IncrementCounter() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    step: 0,
  });

  function handleIncreaseCounter() {
    dispatch({ value: "Increase Counter" });
  }

  function handleIncreaseStep() {
    dispatch({ value: "Increase Step" });
  }

  function handleDecreaseStep() {
    dispatch({ value: "Decrease Step" });
  }

  return (
    <div>
      <h2>Counter Value: {state.counter}</h2>
      <h2>Step Value: {state.step}</h2>

      <button onClick={handleIncreaseCounter}>Increase Counter</button>
      <button onClick={handleIncreaseStep}>Increase Step</button>
      <button onClick={handleDecreaseStep}>Decrease Step</button>
    </div>
  );
}

export default IncrementCounter;
