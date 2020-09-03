<template>
  <div class="work-input">
    <p class="work-text">Перетащите или загрузите для загрузки изображения</p>
    <appButton typeAttr="file" @change="onChange" />
  </div>
</template>

<script>
import button from "../button/button";
import appButton from "../../components/button";

export default {
  components: {
    appButton: button,
  }
};
</script>

<style lang="postcss">

</style>