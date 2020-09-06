<template>
  <div class="reviews-componets">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <h1 class="section-name">Блок «Отзывы»</h1>
        </div>
        <reviewForm 
        v-if="formIsShown === false"/>
        <ul class="reviews-list">
          <li class="review-item">
            <square-btn 
            type="square"
            title="Добавить отзыв" 
            @click="formIsShown = false"/>
          </li>
          <li class="review-item" v-for="review in reviews" :key="review.id" >
            <reviewCard :review="review"
             @remove-review="removeReview(review.id)"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import button from "./../../components/button"
import category from "./../../components/category"
import tagsAdder from "./../../components/tagsAdder"
import squareBtn from "./../../components/button"
import reviewCard from "./../../components/review-card"
import reviewForm from "./../../components/reviewForm"

import { mapActions, mapState } from "vuex";

export default {
  components: {
    iconedButton: button,
    category,
    reviewCard,
    tagsAdder,
    squareBtn,
    reviewForm
  },

  data() {
    return {
      formIsShown: true,
    }
  },
  computed: {
    ...mapState("reviews",{
      reviews: state => state.data
    })
  },
     methods: {
      ...mapActions({
        fetchReview: "reviews/fetch",
        removeReviewAction: "reviews/remove",
      }),


       async removeReview(reviewToRemove) {
        await this.removeReviewAction(reviewToRemove);
    },
     mounted() {
      this.fetchReview();
    },
     }
  //    requirePhotos() {
  //     this.reviews = this.reviews.map(review => {
  //       review.pic = require(`../../../images/content/${review.pic}`).default;
  //        return review;
  //     });
  //    }
  //  },
  //  mounted() {
  //    this.requirePhotos();
  //  },
  //  created() {
  //    this.reviews = require('../../../data/reviews.json');
  //    //this.categories = require("../../data/categories.json");
  //  }
}
</script>


<style lang="postcss" scoped src="./reviews.pcss"></style>

