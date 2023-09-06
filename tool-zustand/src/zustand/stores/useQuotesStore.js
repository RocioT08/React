import create from "zustand";

const [useStore] = create((set) => ({
  //states
  quotes: [],
  //actions
  fetchQuotes: () => {
    fetch("https://www.breakingbadapi.com/api/quotes")
      .then((resp) => resp.json())
      .then((record) => {
        set({ quotes: record });
      });
  },
}));

export default useStore;
