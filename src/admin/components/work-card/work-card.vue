<template>
  <div class="work-card">
    <div class="preview">
      <img :src="work.photo" class="picture">
    </div>
    <div class="desc">
      <h4 :title="work.title" class="title"></h4>
      <p :desk="work.desc" class="text"></p>
      <a :href="work.link" class="link"></a>
    </div>
  </div>
</template>

<script>

export default {
  work: {
    type: Object
    }
}
</script>

<style lang="postcss" src="./work-card.pcss">

</style>