export default {
  namespaced: true,
  state:  {
    data: [],
  },
  mutations: {
    ADD_REVIEW(state, newReview) {
      state.data.push(newReview);
    },
    SET_REVIEW(state, reviews) {
      state.data = reviews;
    },
    REMOVE_REVIEW(state, removeReview) {
      state.data = state.data.filter((review) => {
        return work.id !== removeReview;
      });
    },
    UPDATE_REVIEWS(state, updateReview) {
      state.data.forEach((review) => {
        if (review.id === updateReview.review.id) {
          review.review = updateReview.review;
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
        const { data } = await this.$axios.post("/reviews", formData);
        commit("ADD_REVIEW", data);
      } catch (error) {
        console.log("error");
      }
      return true;
    },
  
    async fetch({ commit }) {
      try {
        const { data } = await this.$axios.get("/reviews/374");
        commit("SET_REVIEW", data);
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
    
  }
}