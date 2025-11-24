"use client";
import useCountStore from "../store/countStore";

export default function Todos() {
  const countStore = useCountStore();

  console.log(countStore)
  return (
    <div>
      <h1>Count:{countStore.count}</h1>
      <button onClick={() => countStore.Increment()}>Increment</button>
      <button onClick={() => countStore.Decrement()}>Decrement</button>
    </div>
  );
}
