export default {
  namespaced: true,
  state:  {
    data: [],
  },
  mutations: {
    ADD_REVIEW(state, newReview) {
      state.data.unshift(newReview);
    },
    SET_REVIEWS(state, reviews) {
      state.data = reviews;
    },
    REMOVE_REVIEW(state, removeReview) {
      state.data = state.data.filter((review) => {
        return work.id !== removeReview;
      });
    },
    EDIT_REVIEWS(state, editReview) {
      state.data.forEach((review) => {
        if (review.id === editReview.review.id) {
          review.review = editReview.review;
        }
        else {
          return review
        }
      });
    },
  },
  actions: {
    async add({ commit }, newReview) {
      console.log(newReview);
      const formData = new FormData();

      Object.keys(newReview).forEach((item) => {
        formData.append(item, newReview[item]);
      });
      try {
        const { data } = await this.$axios.post('/reviews', formData);
        commit("ADD_REVIEW", data);
      } catch (error) {
        console.log("error");
      }
      return true;
    },
  
    async fetch({ commit }) {
      try {
        const { data } = await this.$axios.get('/reviews/374');
        commit("SET_REVIEWS", data);
      }
      catch (error) {
        console.log("error");
      }
    },
    async remove({ commit }, removeReview) {
      try {
        const { data } = await this.$axios.delete(`/reviews/${removeReview}`);
        commit("REMOVE_REVIEW", removeReview);
      } catch (error) {
        console.log("error");
      }

      return true;
    },
    async edit({ commit }, editReview) {
      const editFormData = new FormData();

      Object.keys(editReview).forEach((item) => {
        editFormData.append(item, editReview[item]);
      });
      try {
        const { data } = await this.$axios.post(`/reviews/${editReview.id}`, editFormData);
        commit("EDIT_REVIEWS", data);
      } catch (error) {
        console.log("ОЩИБКА");
      }
      return true;
    },    
  }
}