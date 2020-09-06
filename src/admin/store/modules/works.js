export default {
  namespaced: true,
  state:  {
    data: [],
  },
  mutations: {
    ADD_WORK(state, newWork) {
      state.data.push(newWork);
    },
    SET_WORK(state, works) {
      state.data = works;
    },
    REMOVE_WORKS(state, removeWork) {
      state.data = state.data.filter((work) => {
        return work.id !== removeWork;
      });
    },
    UPDATE_WORKS(state, updateWork) {
      state.data.forEach((work) => {
        if (work.id === updateWork.work.id) {
          work.work = updateWork.work.work;
        }
      });
    },
  },
  actions: {
    async add({ commit }, newWork) {
      console.log(newWork);
      const formData = new FormData();

      Object.keys(newWork).forEach((item) => {
        formData.append(item, newWork[item]);
      });
      try {
        const { data } = await this.$axios.post("/works", formData);
        commit("ADD_WORK", data);
      } catch (error) {
        console.log("error");
      }
      return true;
    },
  
    async fetch({ commit }) {
      try {
        const { data } = await this.$axios.get("/works/374");
        commit("SET_WORK", data);
      }
      catch (error) {
        console.log("error");
      }
    },
    async remove({ commit }, removeWork) {
      try {
        const { data } = await this.$axios.delete(`/works/${removeWork}`);
        commit("REMOVE_WORKS", removeWork);
      } catch (error) {
        console.log("error");
      }

      return true;
    },
    
  }
}