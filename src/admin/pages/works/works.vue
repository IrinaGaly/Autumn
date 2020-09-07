<template>
  <div class="works-componets">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <h1 class="title">Блок «Работы»</h1>
        </div>
        <div class="form-content" >
         <worksForm 
         v-if="formIsShown === false"
         @reset="resetHandler = true" 
          :work="work"/> 
        </div>
        <ul class="works">
          <li class="work-item">
            <square-btn 
            type="square"
            title="Добавить работу" 
            @click="formIsShown = false"
          /></li>
          <li class="work-item" v-for="work in works" :key="work.id"
           >
            <workCard :work="work"
            @edit-work="editWork"
            @remove-work="removeWork(work.id)"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import button from "./../../components/button"
import workCard from "./../../components/work-card"
import squareBtn from "./../../components/button"
import worksForm from "./../../components/works-form"

import { mapActions, mapState } from "vuex";

export default {
  components: {
    iconedButton: button,
    worksForm,
    workCard,
    squareBtn
  },

  data() {
     return {  
      formIsShown: true,
       work: []  
    } 
  },

  computed: {
    ...mapState("works",{
      works: state => state.data
    })
  },

  methods: {
      ...mapActions({
        fetchWorkAction: "works/fetch",
        removeWorkAction: "works/remove",
      }),

      resetHandler() {
      this.formIsShown === true;
    },

    async removeWork(workToRemove) {
      await this.removeWorkAction(workToRemove);
    },
    async editWork() {
      await (this.formIsShown = false);
      this.work = work;
       
    }
    },
    created() {
      this.fetchWorkAction();
      //this.categories = require("../../data/categories.json");
    },
}
</script>

<style lang="postcss" scoped src="./works.pcss"></style>