<template>
  <div class="form-works-component">
    <form action class="form" @submit.prevent="handleSubmit">
      <card  class="edit-work" title="Редактирование работы">
        <div slot="content" class="form-content">
          <label 
          :style="{backgroundImage: `url(${preview})`}"
          class="upload-container" :class="['upload', {active: newWork.preview}, {
            hovered: hovered }]" 
            @dragover="handleDragOver"
            @dragleave="hovered = false"
            @drop="handleChange"
            >
            <div class="work-input">
              <p class="work-text">Перетащите или загрузите изображениe</p>
              <div class="btn-container">
                <appButton typeAttr="file" title="Загрузить"
                @change="handleChange" />
              </div>
            </div>
          </label>
          <div class="error-message"
              :class="{error: validation.hasError('preview')}">
              {{validation.firstError('preview')}}</div>
          <div class="info">
            <app-input v-model="newWork.title" class="name-input" title="Название" 
            :errorMessage="validation.firstError('newWork.title')"/>
            <app-input v-model="newWork.link" class="link-input" title="Ссылка" 
            :errorMessage="validation.firstError('newWork.link')"/>
            <app-input  v-model="newWork.description" title="Описание" fieldType="textarea" 
            :errorMessage="validation.firstError('newWork.description')"/>
            <tags-adder v-model="newWork.techs" class="tag-adder" 
            :errorMessage="validation.firstError('newWork.techs')"/>
            <div class="add-info-btns">
              <appButton plain @click="$emit('closeForm')" title="Отмена"/>
              <appButton typeAttr="submit" title="СОХРАНИТЬ"/>
            </div>
          </div>
          <!-- <tooltip text="Текст внутри"></tooltip> -->
        </div>
      </card>
    </form>
  </div>
</template>

<script>
import "./../../../styles/main.pcss";
import card from "../card/card";
import button from "../button/button";
import input from "../input/input";
import tagsAdder from "../tagsAdder";
import appButton from "../../components/button";
import tooltip from "../../components/tooltip"
import { Validator } from "simple-vue-validator";
import { mapActions, mapState } from "vuex";


export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "newWork.title"(value) {
      return Validator.value(value).required("Обязательно");
    },
    "newWork.link"(value) {
      return Validator.value(value).required("Обязательно");
    },
    "newWork.description"(value) {
      return Validator.value(value).required("Обязательно");
    },
    "newWork.techs"(value) {
      return Validator.value(value).required("Обязательно");
    },
    "newWork.preview"(value) {
      return Validator.value(value).required("Обязательно для заполнения");
    },
  },
  components: {
    card,
    appButton: button,
    appInput: input,
    tagsAdder,
    tooltip
  
  },
  props: {
     work: {
      type: Object
    },

    formIsShown: {
      type: Boolean
    }
  },
  created() {
    if (this.work) {
      this.newWork = { ...this.work };
      this.preview = `https://webdev-api.loftschool.com/${this.work.photo}`;
    }
  },
  data() {
    return {
      hovered: false,
      preview: "",
      newWork: {
        title: "",
        link: "",
        description: "",
        techs: "",
        photo: {}
      } 
    }
  },
  methods: {
     ...mapActions({
      addNewWork: "works/add",
      fetchWorkAction: "works/fetch",
      editWorkAction: "works/edit",
    }),
    async handleSubmit() {
      //if ((await this.$validate()) === true) {
         if (this.newWork.id) {
           await this.editWorkAction(this.newWork);
         } 
         else
          {
          await this.addNewWork(this.newWork);
          this.newWork.preview = "",
          this.newWork = ""
          //this.newWork.link = "",
          //this.newWork.techs = ""
        }
        this.$emit("submit");
      //}
    },
    
    // editWork(workToEdit) {
    //   console.log(workToEdit)
    // },
      //await this.addNewWork(this.newWork);
        //this.text = ""
    //   this.link = "",
    //   this.description = "",
    //   this.techs = "",
    //   this.preview = "",
    //   this.photo = {}
   
    handleChange(event) {
      event.preventDefault();

      const file = event.dataTransfer ? 
      event.dataTransfer.files[0] :
      event.target.files[0];

      this.newWork.photo = file;
      this.renderPhoto(file);
      this.hovered = false;
    },
    
    handleDragOver(e) {
      e.preventDefault();
      this.hovered = true;
    },

    renderPhoto(file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.newWork.preview = reader.result;
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
    },

   
    // cancelForm() {
    //   this.title = "",
    //   this.link = "",
    //   this.description = "",
    //   this.techs = "",
    //   this.preview = "",
    //   this.photo = {}
    // }
  }
  
};
</script>

<style lang="postcss" src="./works-form.pcss" scoped ></style>