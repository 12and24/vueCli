// import { reject, resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'
const store = new Vuex.Store({
  state: {
    counter: 1000,
    student: [{ name: 'liu', age: 12 },
    { name: 'hui', age: 22 },
    { name: 'ping', age: 32 }],
    info: { name: 'ping', age: 32 }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    changCounter(state, count) {
      state.counter += count
    },
    pushStu(state, stu) {
      state.student.push(stu)
    },
    updataInfo(state) {
      state.info.name = '刘慧平'
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.student.filter(s => s.age >= 12)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAge(state) {
      return function (age) {
        return state.student.filter(s => s.age >= age)
      }
    }

  },
  actions: {
    aupdataInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updataInfo');
          console.log(payload);
          resolve();
        }, 1000)
      }
      )
    }
  }

})
export default store
