<template>
  <div class="works-componets">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <h1 class="title">Блок «Работы»</h1>
        </div>
        <div class="form-content" @cancelForm="cancelForm">
         <worksForm 
         v-if="formIsShown === false"
         @cancelForm="cancelForm"/> 
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
//       categories: [],
      formIsShown: true,
//       tags: "",
       //works: []  
    } 
  },

  computed: {
    ...mapState("works",{
      works: state => state.data
    })
  },

  methods: {
      ...mapActions({
        fetchWork: "works/fetch",
        removeWorkAction: "works/remove",
      }),

      cancelForm() {
      this.formIsShown === true;
    },

    async removeWork(workToRemove) {
      await this.removeWorkAction(workToRemove);
    },

      requirePhotos() {
  //      this.works = this.works.map((work) => {
  //       work.photo = require(`../../../images/content/${work.photo}`).default;
  //       return work;
  //      });
  //     }
    },

    mounted() {
      this.fetchWork();
    },

    //было до изменений
  //   methods: {
      
  //     requirePhotos() {
  //      this.works = this.works.map((work) => {
  //       work.photo = require(`../../../images/content/${work.photo}`).default;
  //       return work;
  //      });
  //     }
  //   },
  //   mounted() {
  //     this.requirePhotos();
  //   },
  //  created() {
  //    this.works = require('../../../data/works.json');
  //    //this.categories = require("../../data/categories.json");
    }
}
</script>

<style lang="postcss" scoped src="./works.pcss"></style>