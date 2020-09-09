<template>
  <div class="review-card" :review="review">
    <div class="preview">
      <img :src="correctReview" class="picture">
      <div class="preview-content">
        <h4 class="review-name">{{review.author}}</h4>
        <p class="review-occ">{{review.occ}}</p>
      </div>
    </div>
    <div class="desc">
      <p class="text">{{review.text}}</p>
      <div class="review-btn">
        <icon class="pencil" symbol="pencil" @click="handleEdit" title="Править" />
        <icon symbol="cross" title="Удалить" @click="handleRemove" />
      </div>
    </div>
  </div>
</template>

<script>
import icon from "../icon";
export default {
  components: {
    icon
  },
   props: {
    review: {
      type: Object
      }
    },
    methods: {
    handleRemove() {
      this.$emit("remove-review");
      //this.$emit('reset');
    },
    handleEdit() {
      this.$emit("edit-review", this.review);
      //передаю союытие на изменение именно этой работы,на которую нажала
      console.log(this.review);
    }
    //  handleEdit() {
    //   this.$emit("edit-review", this.review);
    // }
  },

  computed: {
    // correctReviews: function() {
    //   let newReview = this.review.map(item => {
    //     item.photo = `https://webdev-api.loftschool.com/${item.photo}`
    //     return item
    //   })
    //   return newReview
    // }
    correctReview() {
      return `https://webdev-api.loftschool.com/${this.review.photo}` 

       // this.review.photo = `https://webdev-api.loftschool.com/${this.review.photo}`
      
    }
  }
}
</script>

<style lang="postcss" scoped src="./review-card.pcss">

</style>