const  goods = {
    state: {
        goods: []
    },
    mutations: {
      setBestsellersData(state, data) {
        state.goods = data
      }
    },
    action: {
      setBestsellersData({commit}, data) {
        commit('setGoodsData', data)

      }
    },
    getters: {
        getGoods(state) {
            return state.goods
        }
    }
}

export default goods