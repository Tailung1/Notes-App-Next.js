import { create } from "zustand";

const useCountStore = create((set) => ({
  count: 0,
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
