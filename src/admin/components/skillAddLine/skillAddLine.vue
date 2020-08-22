<template>
  <div 
  :class="['skillAddLine-component', {blocked: blocked}]"
  >
    <div class="title">
       <app-input placeholder="Новый навык" />
    </div>
    <div class="percent">
       <app-input type="number" min="0" max="100" maxlength="3" />
    </div>
      <div class="button">
        <round-btn type="round" />
      </div>
  </div>
</template>

<script>
import input from "../input";
import button from "../button";

export default {
  props: {
    blocked: Boolean
  },
  components: {
    roundBtn: button,
    appInput: input,
  }
}
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>