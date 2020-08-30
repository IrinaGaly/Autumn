<template>
  <div 
  :class="['skillAddLine-component', {blocked: blocked}]"
  >
    <div class="title">
      <app-input v-model="skill.title" placeholder="Новый навык" />
      <div class="message">{{ validation.firstError('skill.title') }}</div>
    </div>
    <div class="percent">
      <app-input v-model="skill.percent" type="number" min="0" max="100" maxlength="3" />
      <div class="message">{{ validation.firstError('skill.percent') }}</div>
    </div>
      <div class="button" >
        <round-btn type="round" @click="handleClick" />
      </div>
  </div>
</template>

<script>
import input from "../input";
import button from "../button";
import { Validator, mixin } from 'simple-vue-validator';

//const Validator = SimpleVueValidator.Validator;


export default {
  mixins: [Validator.mixin],
  validators: {
    'skill.title': function(value) {
        return Validator.value(value).required("Не может быть путсым");
      },
      'skill.percent': function(value) {
        return Validator.value(value)
        .between(0, 100, "Некорректное значение")
        .integer("Должно быть числом")
        .required("Не может быть пустым")
      },
  },
  data() {
    return {
      skill: {
        title: "",
        percent: ""
        }
    }
  },
  props: {
    blocked: Boolean
  },
  components: {
    roundBtn: button,
    appInput: input,
  },
  data() {
    return {
      skill: {
        title: "",
        percent: ""
      }
    }
  },
  methods: {
    async handleClick() {
      if (await this.$validate() === false) return;
      this.$emit('approve', this.skill);
    }
    // submit: function() {
    //   this.$validate()
    //     .then(function(success) {
    //         console.log(success);
    //       if (success) {
    //         this.$emit("approve", this.skill);
    //       }
    //     });
    //   }
  }
}
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>