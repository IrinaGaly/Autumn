import reviewForm from "./review-form.vue";

export default {
  title: "reviewForm",
  component: reviewForm ,
};

export const defaultView = () => ({
  components: { reviewForm },
  template: `
    <reviewForm >
      
    </reviewForm>
  `,
  methods
});