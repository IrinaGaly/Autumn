<template>
  <div class="review-card">
    <div class="preview">
      <img :src="review.pic" class="picture">
      <div class="preview-content">
        <h4 class="review-name">{{review.name}}</h4>
        <p class="review-occ">{{review.occ}}</p>
      </div>
    </div>
    <div class="desc">
      <p class="text">{{review.text}}</p>
      <div class="review-btn">
        <icon class="pencil" symbol="pencil" title="Править" />
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
    },
    
  },
}
</script>

<style lang="postcss" scoped src="./review-card.pcss">

</style>