import headline from "./headline.vue";
import { action } from "@storybook/addon-actions"

const methods = {
  onChange: action("onChange")
}

export default {
  title: "headline",
  components: headline
}

export const defaultView = () => ({
  components: headline,
  template: `
    <headline @action="onChange" title="Administration panel">
   
    </headline>
  `,
  methods
});

