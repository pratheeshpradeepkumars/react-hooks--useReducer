import React, { useReducer } from "react";

const initialState = {
  loading: false,
  counter: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading": {
      return { ...state, loading: true };
    }
    case "increment": {
      return { ...state, counter: state.counter + 1, loading: false };
    }
    case "decrement": {
      return { ...state, counter: state.counter - 1, loading: false };
    }
    default: {
      return state;
    }
  }
};

const delayInterval = (time = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Counter = () => {
  const [{ loading, counter }, dispatch] = useReducer(reducer, initialState);

  const handleIncriment = async () => {
    dispatch({ type: "loading" });
    await delayInterval(500);
    dispatch({ type: "increment" });
  };

  const handleDecriment = async () => {
    dispatch({ type: "loading" });
    await delayInterval(500);
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <p>Count {loading ? "loading.." : counter}</p>
      <button onClick={handleIncriment}>+</button>
      <button onClick={handleDecriment}>-</button>
    </div>
  );
};

export default Counter;
