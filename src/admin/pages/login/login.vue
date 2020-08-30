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
          <app-button :disabled="isSubmitDisable" typeAttr="submit"  title="Отправить" />
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

const baseUrl = "https://webdev-api.loftschool.com";
//const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM3NCwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTg2NTI5NTUsImV4cCI6MTU5ODY3MDk1NSwibmJmIjoxNTk4NjUyOTU1LCJqdGkiOiI0czJST21QS2E4eEwzMEpQIn0.WAjSHEBNOkwFR3gGcXOKL8PzI2eGGXWvf32f9SOwhlY";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM3NCwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vcmVmcmVzaFRva2VuIiwiaWF0IjoxNTk4NzkyMzM2LCJleHAiOjE1OTg4MTA1NzcsIm5iZiI6MTU5ODc5MjU3NywianRpIjoibmMzalF0amVmZjRrU2RHSSJ9.be8ZbLANJSSXtCe9j9fMc6eTOu26jSl6h7YkoSa95sM";
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
    async handleSubmit() {
      if ((await this.$validate()) === false) return;
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
          console.log('error.response.data.error');
        } 
        finally {
          this.isSubmitDisable = false;
        }
      }
    }  
  };
</script>

<style lang="postcss" scoped src="./login.pcss"></style>