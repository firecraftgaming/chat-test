import create from "zustand";

export const useUsernameStore = create(set => ({
  username: null,
  setUsername: (username: string) => set({ username }),
}))