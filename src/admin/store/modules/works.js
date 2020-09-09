export default {
  namespaced: true,
  state:  {
    data: [],
  },
  mutations: {
  
    ADD_WORK(state, newWork) {
      state.data.unshift(newWork);
    },
    SET_WORKS(state, works) {
      state.data = works;
    },
    REMOVE_WORKS(state, removeWork) {
      state.data = state.data.filter((work) => {
        return work.id !== removeWork;
      });
    },
    EDIT_WORKS(state, editWork) {
      state.data.map((work) => {
        if (work.id === editWork.work.id) {
          work.work = editWork.work.work;
        }
        else {
          return work
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
        const { data } = await this.$axios.post('/works', formData);
        commit("ADD_WORK", data);
      } catch (error) {
        console.log("error");
      }
      return true;
    },
  
    async fetch({ commit }) {
      try {
        const { data } = await this.$axios.get('/works/374');
        commit("SET_WORKS", data);
      }
      catch (error) {
        console.log("error");
      }
    },
    async edit({ commit }, editWork) {
      try {
        const { data } = await this.$axios.post(`/works/${editWork.id}`, {title: editWork.title});
        commit("EDIT_WORKS", data);
      } catch (error) {
        throw new Error("ошибка");
      }
      return true;
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