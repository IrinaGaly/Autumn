<template>
  <div class="works-componets">
    <div class="container">
      <div class="header">
        <h1 class="title">Блок «Работы»</h1>
      </div>
      <ul class="works">
        <li class="work-item"><square-btn 
          type="square"
          title="Отправить" 
          @click="onClick" 
        /></li>
        <li class="work-item" v-for="work in works" :key="work.id" >
          <workCard :work="work"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import button from "./../../components/button"
import category from "./../../components/category"
import tagsAdder from "./../../components/tagsAdder"
import workCard from "./../../components/work-card"
import squareBtn from "./../../components/button"

export default {
  components: {
    iconedButton: button,
    category,
    workCard,
    tagsAdder,
    squareBtn
  },

  data() {
    return {
      categories: [],
      emptyCatIsShown: false,
      tags: "",
      works: []
    }
  },
   methods: {
     requirePhotos() {
      this.works = this.works.map(work => {
         work.photo = require(`../../../images/content/${work.photo}`)
         return work;
      });
     }
   },
   mounted() {
     this.requirePhotos();
   },
   created() {
     this.works = require('../../../data/works.json');
     this.categories = require("../../data/categories.json");
   }
}
</script>

<style lang="postcss" scoped src="./works.pcss"></style>