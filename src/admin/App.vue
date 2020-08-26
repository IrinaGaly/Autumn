<template>
  <div class="app-container">
    <headline title="Панель администрирования">
      <user />
    </headline>  
    <navigation />
    <div class="page-content">
      <div class="container">
        <div class="header">
          <h1 class="title">Блок «Обо мне»</h1>
          <iconed-button 
          type="iconed" 
          v-if="emptyCatIsShown === false"
          @click="emptyCatIsShown = true" 
          title="Добавить группу" />
        </div>
        <ul class="skills">
          <li class="item" v-if="emptyCatIsShown">
            <category 
            @remove="emptyCatIsShown = false"
            empty
             />
          </li>
          <li 
            class="item" 
            v-for="category in categories"
            :key="category.id">
           <category 
           :title="category.category"
           :skills="category.skills"/>
          </li>
        </ul>
      </div>
    </div>
    <div class="tags">
      <tags-adder v-model="tags"/>
    </div>
    <div class="works">
      <div class="work-container">
        <h1 class="title">Блок «Работы»</h1>
        <div class="work-content">
          <ul class="works">
            <li class="item" v-for="work in works" :key=works.id>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import headline from "./components/headline"
import user from "./components/user"
import navigation from "./components/navigation"
import button from "./components/button"
import category from "./components/category"
import tagsAdder from "./components/tagsAdder"
//import workCard from "./components/workCard"


export default {
  components: {
    headline,
    user,
    navigation,
    iconedButton: button,
    category,
    tagsAdder
  },

  data() {
    return {
      categories: [],
      emptyCatIsShown: false,
      tags: "",
      works: []
    }
  },
   created() {
     this.works = require('../data/works.json');
     this.categories = require("./data/categories.json");
   }
};
</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>