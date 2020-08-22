<template> 
  <div class="headline-component">
    <div class="container headline-container">
      <slot />
      <div class="title">{{title}}</div>
      <div class="buttons">
        <button type="button" class="btn">Log out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Administration panel"
    }
  }
}
</script>

<style lang="postcss" scoped src="./headline.pcss"></style>