<template>
  <div class="login-page-component">
    <div class="content">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form-title">Авторизация</div>
        <div class="row">
          <app-input
            title="Логин"
            v-model="user.name"
            icon="user"
            :errorMessage="validation.firstError('user.name')"
          />
        </div>
        <div class="row">
          <app-input
            title="Пароль"
            v-model="user.password"
            icon="key"
            type="password"
            :errorMessage="validation.firstError('user.password')"
          />
        </div>
        <div class="btn">
          <appButton :disabled="isSubmitDisable" typeAttr="login"  title="Отправить" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import appInput from "../../components/input";
import appButton from "../../components/button";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
import $axios from "../../requests";
import axios from "axios";
import {mapActions} from "vuex";


const baseUrl = "https://webdev-api.loftschool.com";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM3NCwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vcmVmcmVzaFRva2VuIiwiaWF0IjoxNTk5MDgzNzc4LCJleHAiOjE1OTkxNjY3NjcsIm5iZiI6MTU5OTE0ODc2NywianRpIjoibDRBdGJXTUpXTkJQdW90YiJ9.WUvi-xgraNpvIjooWMxYSXPNXFzeQNaQgSontkXdHSE";
//const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM3NCwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vcmVmcmVzaFRva2VuIiwiaWF0IjoxNTk4ODkxOTY5LCJleHAiOjE1OTg5MTExOTUsIm5iZiI6MTU5ODg5MzE5NSwianRpIjoiWHBDcXd2bE1SUzRrZWdPeCJ9.cbs1lwKDdxQjUn7YQEUmIbmNcSHk2qcBUOnGu20V-qk"
//const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM3NCwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vcmVmcmVzaFRva2VuIiwiaWF0IjoxNTk4NzkyMzM2LCJleHAiOjE1OTg4MTA1NzcsIm5iZiI6MTU5ODc5MjU3NywianRpIjoibmMzalF0amVmZjRrU2RHSSJ9.be8ZbLANJSSXtCe9j9fMc6eTOu26jSl6h7YkoSa95sM";
//const token = localStorage.getItem('token') || "";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Autorization'] = `Baerer ${token}`;

export default {
  mixins: [ValidatorMixin],
  validators: {
    "user.name": (value) => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": (value) => {
      return Validator.value(value).required("Введите пароль");
    },
  },
  data: () => ({
    user: {
      name: "",
      password: ""
    }, 
    isSubmitDisable: false
  }),
  components: { appButton, appInput },
  methods: {
    ...mapActions({
      showTooltip: "tooltip/show"
    }),
    async handleSubmit() {
      if (await this.$validate() === false) return;
        this.isSubmitDisable = true;
        try {
          // сюда попадут данные после успешного промиса
        const response = await $axios.post("/login", this.user);
          //после завершения кода выше пойдет выполнение кода дальше
        const token = response.data.token;
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace('/');
        } 
        catch (error) {
          this.showTooltip({
            text: error.response.data.error,
            type: "error"
          })
        } 
        finally {
          this.isSubmitDisable = false;
        }
      }
    }  
  };
</script>

<style lang="postcss" scoped src="./login.pcss"></style>