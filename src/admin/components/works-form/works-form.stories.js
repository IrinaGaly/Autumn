import worksForm from "./works-form.vue";

export default {
  title: "worksForm",
  component: worksForm ,
};

export const defaultView = () => ({
  components: { worksForm },
  template: `
    <worksForm >
      
    </worksForm>
  `,
});