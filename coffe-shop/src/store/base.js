const  base = {
    state: {
        base: [
        {
          id: 0,
          image: 'coffee-1.jpg',
          name: 'Solimo Coffee Beans 2kg',
          price: '10.73'
        },
        {
          id: 1,
          image: 'coffee-2.jpg',
          name: 'Presto Coffee Beans 1kg',
          price: '15.99'
        },
        {
          id: 2,
          image: 'coffee-3.jpg',
          name: 'AROMISTICO Coffee 1kg',
          price: '6.99'
        },
        {
          id: 3,
          image: 'coffee-3.jpg',
          name: 'AROMISTICO Coffee 1kg',
          price: '6.99'
        },
        {
          id: 4,
          image: 'coffee-3.png',
          name: 'AROMISTICO Coffee 1kg',
          price: '6.99'
        },
        {
          id: 5,
          image: 'coffee-3.jpg',
          name: 'AROMISTICO Coffee 1kg',
          price: '6.99'
        }
      ]

    },
    getters: {
        getbase(state) {
            return state.base
        }
    }
}

export default base