import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userList: [],
    form: {
      name: "",
      email: "",
      ocupation: [],
      status: "",
      internal_status: ""
    }
  },
  getters: {
    getField,
    users: state => state.userList,
    user: state => state.form
  },
  mutations: {
    updateField,

    ADD_USER(state, user) {
      let { name, email, ocupation, status, internal_status } = user;
      const newUser = {
        id: 1 + state.userList.length,
        name,
        email,
        ocupation,
        status,
        internal_status
      };
      state.userList.unshift(newUser);
    },

    CLEAR_USER(state) {
      state.form = {
        name: "",
        email: "",
        ocupation: [],
        status: "",
        internal_status: ""
      };
    }
  },
  actions: {
    addUser({ commit }, user) {
      commit("ADD_USER", user);
    },

    clearUser({ commit }) {
      commit("CLEAR_USER");
    }
  },
  modules: {}
});
