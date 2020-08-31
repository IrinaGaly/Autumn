<template>
  <div 
  :class="['skillAddLine-component', {blocked: blocked}]"
  >
    <div class="title">
      <app-input 
      :errorMessage="validation.firstError('skill.title')"
      v-model="skill.title" placeholder="Новый навык" />
    </div>
    <div class="percent">
      <app-input 
      :errorMessage="validation.firstError('skill.percent')"
      v-model="skill.percent" type="number" min="0" max="100" maxlength="3" />
    </div>
      <div class="button" >
        <round-btn type="round" @click="handleClick" />
      </div>
  </div>
</template>

<script>
import input from "../input";
import button from "../button";
import { Validator, mixin as ValidatorMixin } from 'simple-vue-validator';
import axios from "axios";

//const Validator = SimpleVueValidator.Validator;


export default {
  mixins: [ValidatorMixin],
  validators: {
    "skill.title": (value) => {
        return Validator.value(value).required("Не может быть путсым");
      },
      "skill.percent": (value) => {
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
      if ((await this.$validate()) === false) return;
      this.$emit("approve", this.skill);
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