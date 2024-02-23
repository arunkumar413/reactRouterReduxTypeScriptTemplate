import React from "react";
import { NavBar } from "../components/navBar";
import { decrement, increment } from "../centralStore/counterSlice";
import type { RootState } from "../centralStore/appStore";
import { useSelector, useDispatch } from "react-redux";

export function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div>
      <NavBar />
      <h2> Home Page </h2>
      <button onClick={handleIncrement}> increment </button> <br />
      Count is: {count}
      <br />
      <button onClick={handleDecrement}> decrement </button>
    </div>
  );
}
