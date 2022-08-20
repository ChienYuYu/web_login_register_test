<template>
  <div class="wrapper">
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="col-lg-6 d-flex justify-content-center">
        <form class="border p-5" @submit.prevent="login">
          <h2 class="mb-4 text-center text-white">使用者登入</h2>
          <div class="mb-3">
            <label for="account" class="form-label">
              <input
                type="email"
                class="form-control"
                id="account"
                name="account"
                aria-describedby="emailHelp"
                placeholder="帳號"
                v-model="email"
              />
            </label>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="密碼"
                v-model="password"
            /></label>
          </div>
          <div class="d-flex justify-content-between">
            <router-link to="/register" class="link-light">註冊</router-link>
            <button type="submit" class="btn btn-secondary">登入</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: 'front' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgb(25, 56, 46);
}
</style>
