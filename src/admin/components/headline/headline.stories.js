import headline from "./headline.vue";

export default {
  title: "headline",
  components: headline
}

export const defaultView = () => ({
  components: headline,
  template: `
    <headline title="Administration panel">
   
    </headline>
  `
});

