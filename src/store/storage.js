import { defineStore } from "pinia";

export const useStorage = defineStore({
  id: "storage",
  state: () => ({
    test: 'test',
  }),
})
