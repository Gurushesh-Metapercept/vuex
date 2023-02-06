import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  // State is an object that contains the data.
  state: {
    counter: 0
  },
  // mutations are methods that change the data in the state tree.
  // to manipulate state
  mutations: {
    increseCount(state, randomNumber){
      // state.counter++
      state.counter += randomNumber
    },
    descreseCount(state, randomNumber){
      state.counter -= randomNumber
    }
  },

  //Functions that commit mutations. 
  // or They are the functions that perform mutations.
  // Actions can contain asynchronous operations
  actions: {
    increseCount({commit}){
      // console.log("increaseCounter (action)");
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res => {
        commit("increseCount", res.data)
        
      })
    },
    descreseCount({commit}){
      // console.log("increaseCounter (action)");
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(res => {
        commit("descreseCount", res.data)
        
      })
    }
  },

   // getter is used to access data from the State tree of store
   // or It is used to fetch data from the state tree.

   //Getters provide a way of getting a computed state from the store so instead of fetching a state in your components and then making computations on the state you can make the computations using a getter.
   getters: {
    counterSquare(state){
      return state.counter * state.counter
    }
  }
})
