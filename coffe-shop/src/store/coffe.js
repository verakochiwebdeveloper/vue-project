import { search } from "core-js/fn/symbol";

const coffe = {
  state: {
    coffe: [],
    searchValue: "",
    sortValue: "",
  },
  mutations: {
    setCoffeData(state, data) {
      state.coffee = data;
    },
   /* setSearchValue(state, value) {
      state.searchValue = value;
    },
    setSortValue(state, value) {
      state.sortValue = value;
    },*/
    action: {
      setCoffeData({ commit }, data) {
        commit("setCoffeData", data);
      },
      /*setSearchValue({ commit }, value) {
        commit("setSearchValue", value);
      },
      setSortValue({ commit }, value) {
        commit("setSortValue", value);
      },*/
    },
    getters: {
      getCoffe(state) {
        return state.coffe.filter((item) =>
          item.name
        .toLowerCase()
        .includes(state.searchValue.toLowerCase())
        ).filter(item => item.country 
          .toLowerCase()
        .includes(state.sortValue.toLowerCase())
        )
      },
      getProductById(state) {
        return (id) => {
          return state.coffe.find((card) => card.id === +id);
        };
      },
      getSearchValue(state) {
        return state.SearchValue;
      },
    },
  },
};

export default coffe;
