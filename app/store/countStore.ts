import { create } from "zustand";

const useCountStore = create((set) => ({
  count: 0,
  todoText: "",
  todos: ["dance", "play"],
  handleTextChange: (text: string) =>
    set((state: { todoText: string }) => ({
      todoText: text,
    })),
  handleTodoAdd: () =>
  
    set((state: { todos: []; todoText: string }) => ({
      todos: [...state.todos, state.todoText],
    })),
  Increment: () =>
    set((state: { count: number }) => ({
      count: (state.count += 1),
    })),
  Decrement: () =>
    set((state: { count: number }) => {
      if (state.count === 0) return state;
      return { count: (state.count -= 1) };
    }),
}));

export default useCountStore;
