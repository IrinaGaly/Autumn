<template>
  <div class="reviews-componets">
    <div class="container">
      <div class="header">
        <h1 class="title">Блок «Отзывы»</h1>
      </div>
      <ul class="reviews">
        <li class="review-item"><square-btn 
          type="square"
          title="Отправить" 
          @click="onClick" 
        /></li>
        <li class="review-item" v-for="review in reviews" :key="review.id" >
          <reviewCard :review="review"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import button from "./../../components/button"
import category from "./../../components/category"
import tagsAdder from "./../../components/tagsAdder"
import reviewCard from "./../../components/review-card"
import squareBtn from "./../../components/button"


export default {
  components: {
    iconedButton: button,
    category,
    reviewCard,
    tagsAdder,
    squareBtn
  },

  data() {
    return {
      categories: [],
      emptyCatIsShown: false,
      reviews: []
    }
  },
   methods: {
     requirePhotos() {
      this.review = this.review.map(work => {
         review.photo = require(`../../../images/content/${review.pic}`)
         return review;
      });
     }
   },
   mounted() {
     this.requirePhotos();
   },
   created() {
     this.reviews = require('../../../data/reviews.json');
     //this.categories = require("../../data/categories.json");
   }
}
</script>

<style lang="postcss" >
  .reviews {
    display: flex;
    flex-wrap: wrap;
  }

  .review-item {
    flex: 1;
    margin: 0 18px 28px 0;
  }

  .title {
    margin-right: 3.75rem;
    color: #2d3c4e;
    font-weight: 700;
    font-size: 1.3125rem;
    margin-bottom: 53px;
  }

  .review-item {
    width: 340px;
  }
</style>