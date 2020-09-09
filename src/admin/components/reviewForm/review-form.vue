<template>
  <div class="form-reviews-compomnent">
    <form action class="form" @submit.prevent="handleSubmit">
      <card class="edit-work" title="Новый отзыв">
        <div slot="content" class="form-content">
          <div class="info">
            <div class="info-wrap">
              <div class="review-col">
                <label :style="{backgroundImage: `url(${preview})`}"
                  class="upload-container" :class="['upload', {active: newReview.preview}]" 
                    @dragover="handleDragOver"
                    @drop="handleChange">
                  <div class="work-input">
                    <div class="btn-wrap">
                      <appButton plain typeAttr="file" title="Добавить фотографию"
                      @change="handleChange"/>
                    </div>
                  </div>
                </label>
              </div>
              <div class="review-container">
                <app-input v-model="newReview.author" class="name-input" title="Имя автора" 
                :errorMessage="validation.firstError('newReview.author')"/>
                <app-input v-model="newReview.occ" class="occ-input" title="Титул автора" 
                 :errorMessage="validation.firstError('newReview.occ')"/>
                <app-input v-model="newReview.text"  title="Отзыв" fieldType="textarea" 
                :errorMessage="validation.firstError('newReview.text')"/>
              </div>
            </div>
            <div class="add-info-btns">
              <appButton plain @click="$emit('closeForm')" title="Отмена"/>
              <appButton typeAttr="submit" title="СОХРАНИТЬ"/>
            </div>
          </div>
        </div>
      </card>
    </form>
  </div>
</template>

<script>
import "./../../../styles/main.pcss";

import appButton from "../../components/button"
import input from "./../../components/input/input";
import card from "./../card/card";
import button from "../button/button";

//import appButton from "../../components/button";
import { Validator } from "simple-vue-validator";
import { mapActions, mapState } from "vuex";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "newReview.author"(value) {
      return Validator.value(value).required("Обязательно");
    },
    "newReview.occ"(value) {
      return Validator.value(value).required("Обязательно");
    },
    "newReview.text"(value) {
      return Validator.value(value).required("Обязательно");
    },
    "preview"(value) {
      return Validator.value(value).required("Обязательно для загрузки");
    },
  },
  components: {
    card,
    appButton: button,
    appInput: input,
    button
  },
  props: {
    review: {
      type: Object,
      
    },
    shownForm: {
      type: Boolean,
    },
  },
   created() {
     if (this.review) {
       this.newReview = { ...this.review };
       this.preview = `https://webdev-api.loftschool.com/${this.review.photo}`;
     }
   },
   data() {
    return {
      preview: "",
      newReview: {
        author: "",
        occ: "",
        photo: {},
        text: ""
        
      } 
    }
  },
 
  methods: {
     ...mapActions({
      addNewReview: "reviews/add",
      editReview: "reviews/edit",
    }),

    
    // async handleSubmit() {
    //   await this.addNewReview(this.newReview);
    //   this.$emit("submit"); 
    // }, 
    async handleSubmit() {
      //if ((await this.$validate()) === true) {
        if (this.newReview.id) {
          await this.editReview(this.newReview);
        } else {
          await this.addNewReview(this.newReview);
          this.newReview.preview = "",
          this.newReview = ""
        }
        this.$emit("submit");
     // }
    },

     handleChange(event) {
      event.preventDefault();

      const file = event.dataTransfer ? 
      event.dataTransfer.files[0] :
      event.target.files[0];

      this.newReview.photo = file;
      this.renderPhoto(file);
    },
    handleDragOver(e) {
      e.preventDefault();
      
    },

    renderPhoto(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.newReview.preview = reader.result;
      }

      reader.onerror = () => {
        this.showTooltip({
             text: error.response.data.error,
             type: "error"
           })
      }

      reader.onabort = () => {
        this.showTooltip({
             text: error.response.data.error,
             type: "error"
           })
      }
    }
  }
}

</script>

<style lang="postcss" src="./review-form.pcss" scoped>

</style>
