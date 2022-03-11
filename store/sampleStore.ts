import { defineStore } from 'pinia';

export const useSampleStore = defineStore('sample', {
  state: () => {
    return {
      incrementalValue: 0,
      name: '',
      isAdmin: true,
    };
  },
});
