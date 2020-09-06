<template>
  <label class="btn-file-container, plain" typeAttr = 'file'>
      <div class="btn-file-fake btn-decorator">{{title}}</div>
      <input class="btn-file-input" type="file" v-on="$listeners" />
    </label>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Отправить"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: Boolean,
    typeAttr: {
      type: String,
      default: "button",
      validator: value => ["button", "file", "submit"].includes(value)
    }
  }
};
</script>

<style lang="postcss" scoped src="./defaultBtn.pcss"></style>