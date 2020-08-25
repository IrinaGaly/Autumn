<template>
  <div class="skill-component" v-if="editmode === false" >
    <div class="title">{{currentSkill.title}}</div>
    <div class="info">
      <div class="percent">{{skill.percent}} %</div>
      <div class="buttons">
        <icon symbol="pencil" class="btn" @click="editmode = true" grayscale />
        <icon symbol="trash" class="btn" @click="$emit('remove', skill.id)" grayscale />
      </div>
    </div>
  </div>
  <div class="skill-component" v-else >
    <div class="title">
      <app-input noSidePaddings v-model="currentSkill.title" />
      <div class="message">{{ validation.firstError('currentSkill.title') }}</div>
    </div>
    <div class="percent">
      <app-input v-model="currentSkill.percent" type="number" min="0" max="100" maxlength="3" />
      <div class="message">{{ validation.firstError('currentSkill.percent') }}</div>
    </div>
    <div class="buttons">
      <icon 
      type="submit"  
      symbol="tick" 
      class="btn" 
      @click="$emit('approve', currentSkill, editmode = false)" />
      <icon 
      type="submit" 
      symbol="cross" 
      class="btn" 
      @click="editmode = false" />
    </div>
  </div>
</template>

<script>
import input from "../input";
import icon from "../icon";

import SimpleVueValidator from 'simple-vue-validator';
const Validator = SimpleVueValidator.Validator;


export default {
  mixins: [SimpleVueValidator.mixin],
  validators: {
    'currentSkill.title': function(value) {
        return Validator.value(value).required();
        editmode = true;
      },
      'currentSkill.percent': function(value) {
        return Validator.value(value).required();
      }
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
     }
  },
  data() {
    return {
    editmode: false,
    currentSkill: {
      id: 0,
      title: this.skill.title,
      percent: this.skill.percent
    }, 
      
    }
  },
  components: {
    icon,
    appInput: input
  },
  methods: {
    approve: function() {
      this.$validate()
        .then(function(success) {
            console.log(success);
          if (success) {
            return
          }
        });
      }
  }
}
</script>

<style lang="postcss" src="./skill.pcss"></style>