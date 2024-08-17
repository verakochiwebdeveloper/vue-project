const  coffe = {
    state: {
        coffe: [
        {
          id: 0,
          image: "coffee-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          price: "10.73",
        },
        {
          id: 1,
          image: "coffee-2.jpg",
          name: "Presto Coffee Beans 1kg",
          price: "15.99",
        },
        {
          id: 2,
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
        {
          id: 3,
          image: "coffee-3.png",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
        {
          id: 4,
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
        {
          id: 5,
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
      ],
    },
    mutations: {
      setCoffeData(state, data) {
        state.coffee = data
      }
    },
    action: {
      setCoffeData({commit}, data) {
        commit('setCoffeData', data)

      }
    },
    getters: {
        getCoffe(state) {
            return state.coffe
        },
        getProductById(state) {
          return (id) => {
            return state.coffe.find((card) => card.id === +id)
          }
        }
    }
}

export default coffe