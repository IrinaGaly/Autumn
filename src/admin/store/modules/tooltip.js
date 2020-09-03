export default {
  namespaced: true,
  state: {
    isShow: false,
    text: "",
    type: "success"
  },
  mutation: {
    SET_TOOLTIP: (state, tooltip) => {
      state.isShow = tooltip.isShow;
      state.text = tooltip.text;
      state.type = tooltip.type;
    }
  },
  actions: {
    show({commit}, tooltip) {
      commit("SET_TOOLTIP"), {
        isShow: true,
        text: tooltip.text,
        type: tooltip.type
      }
    },
    hide() {}
  }
}