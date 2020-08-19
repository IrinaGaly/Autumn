import headline from "./headline.vue";

export default {
  title: "headline",
  components: { headline }
}

export const defaultView = () => ({
  components: {headline},
  template: `
  <headline title="Панель управления">
  </headline>
  `
});

defaultView.story = {
  name: "Стандартный вид"
}