<template>
  <div class="about-page-component">
    <div class="page-content">
      <div class="container" >
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-button
            type="iconed"
            v-if="emptyCatIsShown === false"
            @click="emptyCatIsShown = true"
            title="Добавить группу"
          />
        </div>
        <ul class="about-skills">
          <li class="item" v-if="emptyCatIsShown">
            <category               
              @remove="emptyCatIsShown = false"
              @approve="createCategory"
              empty 
            />
          </li>
          <li class="item" v-for="category in categories" :key="category.id">
            <category 
              :title="category.category" 
              :skills="category.skills" 
              @create-skill="createSkill($event, category.id)"
              @edit-skill="editSkill"
              @remove-skill="removeSkill($event, category.id)"
              @approve="editCategory($event, category.id)"
              @remove-category="removeCategory(category.id)"
              @reset="resetCategory(category.id)"
            />
          </li>
        </ul>
      </div>
      <!-- <div class="container load" v-else>
        loading...
      </div>  -->
    </div>
  </div>
</template>


<script>
import button from "../../components/button";
import category from "../../components/category";
import { mapActions, mapState } from "vuex";


export default {
  components: {
    iconedButton: button,
    category,
  },
  data() {
    return {
      emptyCatIsShown: false,
    };
  },
  computed: {
    ...mapState("categories",{
      categories: state => state.data
    })
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create",
      fetchCategoriesAction: "categories/fetch",
      addSkillAction: "skills/add",
      removeSkillAction: "skills/remove",
      editSkillAction: "skills/edit",
      removeCategoryAction: "categories/delete",
      editCategoryAction: "categories/edit",
      showTooltip: "tooltips/show",
    }),
   async createSkill(skill, categoryId) {
     const newSkill = {
       ...skill,
       category: categoryId
     }
     await this.addSkillAction(newSkill, newSkill.title);
     skill.title = "";
     skill.percent = "";


      this.showTooltip({
        text: `Навык ${newSkill.title} добавлен`,
        type: "success",
      });
    },

    

    async removeSkill(skill) {
      await this.removeSkillAction(skill);
      this.showTooltip({
        text: `Запись удалена`,
        type: "success",
      });
    },

     async editSkill(skill) {
      await this.editSkillAction(skill);
      skill.editmode = false;
      this.showTooltip({
        text: `Запись успешно изменена`,
        type: "success",
      });
    },

    async createCategory(categoryTitle) {
      try {
        await this.createCategoryAction(categoryTitle);
        this.emptyCatIsShown = false;
      } catch (error) {
        this.showTooltip({
          text: error.message,
          type: "error",
        });
        console.log(error.message);
      }
    },
     //async editCategory(category) {
      //await this.editCategoryAction(category);
     async editCategory(categoryTitle, categoryId) {
       await this.editCategoryAction({
         title: categoryTitle,
         id: categoryId,
       })
     },
     async removeCategory(categoryId) {
      await this.removeCategoryAction(categoryId);
      this.showTooltip({
        text: `Запись удалена`,
        type: "success",
      });
    },
  },

  // resetCategory() {
    
  // },
  created() {
    this.fetchCategoriesAction();
    //this.categories = require("../../data/categories.json");
  },
};
</script>

<style lang="postcss" scoped src="./about.pcss">
</style>
