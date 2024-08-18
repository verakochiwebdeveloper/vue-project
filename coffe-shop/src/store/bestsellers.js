const  bestsellers = {
    state: {
         bestsellers: [],

    },
    mutations: {
      setBestsellersData(state, data) {
        state.bestsellers = data
      }
    },
    action: {
      setBestsellersData({commit}, data) {
        commit('setBestsellersData', data)

      }
    },
    getters: {
        getbestsellers(state) {
            return state.bestsellers
        }
    }
}

export default bestsellers