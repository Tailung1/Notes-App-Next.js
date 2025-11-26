"use client";
import "../globals.css";
import useCountStore from "../store/countStore";




export default function Todos() {
  const countStore: any = useCountStore();

  console.log(countStore.todoText);
  return (
    <div className='flex flex-col gap-2 mt-4 items-center'>
      {/* <h1>Count:{countStore.count}</h1>
      <button onClick={() => countStore.Increment()}>Increment</button>
      <button onClick={() => countStore.Decrement()}>Decrement</button> */}

      <input
        className='border-2 w-[200px]'
        onChange={(e) => countStore.handleTextChange(e.target.value)}
      />
      <button
        className='cursor-pointer text-red-500 bg-green-600 p-2 rounded-4xl mt-2'
        onClick={countStore.handleTodoAdd}
      >
        Add todo
      </button>
      <h1 className='mt-10'>Todos</h1>
      <div>
        {countStore.todos.map((todo: any) => (
          <ul key={Math.random()}>
            <li>{todo}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
