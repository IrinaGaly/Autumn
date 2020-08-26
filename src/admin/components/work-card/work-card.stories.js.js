import workCard from "./work-card.vue";

export default {
  title: "work-card",
  component: work-card,
};

export const defaultView = () => ({
  components: { workCard },
  template: `
    <workCard >
      
    </workCard>
  `,
});