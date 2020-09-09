<template>
  <div class="reviews-componets">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <h1 class="section-name">Блок «Отзывы»</h1>
        </div>
        <reviewForm :review="review"
        v-if="formIsShown === true"
        @reset="resetHandler = false" 
        @submit="submitForm"
        @edit-review="editReview"
        @closeForm="closeForm"
        />
        <ul class="reviews-list">
          <li class="review-item">
            <square-btn 
            type="square"
            title="Добавить отзыв" 
            @click="formIsShown = true"/>
          </li>
          <li class="review-item" v-for="review in reviews" :key="review.id" >
            <reviewCard :review="review"
             @remove-review="removeReview(review.id)"
             @edit-review="editReview"
             />
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
      formIsShown: false,
      review: {},
      preview: {}
    }
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.data
    })
  },
  methods: {
  ...mapActions({
    fetchReviewAction: "reviews/fetch",
    removeReviewAction: "reviews/remove",
   //editReviewAction: "reviews/edit"
  }),

  closeForm() {
       this.formIsShown = false
     },

  async removeReview(reviewToRemove) {
    await this.removeReviewAction(reviewToRemove);
  },
      // async editReview(reviewAuthor, reviewOcc, reviewCorrect, reviewText,  reviewId) {
      //   await this.editReviewAction({
      //    author: reviewTitle,
      //    id: reviewId,
      //    occ: reviewOcc,
      //    text: reviewText,
      //    correctReview: reviewCorrect
      //  })
      // },

   submitForm() {
      this.review = ""
    },
    editReview(reviewToEdit) {
      this.formIsShown = true;
      this.review = reviewToEdit;
    },
  },
     created() {
      this.fetchReviewAction();
    },
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
    
}
</script>


<style lang="postcss" scoped src="./reviews.pcss"></style>

