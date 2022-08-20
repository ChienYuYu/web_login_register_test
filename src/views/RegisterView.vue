<template>
  <div class="wrapper">
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="col-lg-6 d-flex justify-content-center">
        <form class="border p-5" @submit.prevent="register">
          <h2 class="mb-4 text-center text-white">註冊帳號</h2>
          <div class="mb-3">
            <label for="account" class="form-label">
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
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
          <div class="mb-3">
            <label for="nickname" class="form-label">
              <input
                type="text"
                class="form-control"
                id="nickname"
                name="nickname"
                placeholder="暱稱"
                v-model="nickname"
            /></label>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-secondary">註冊</button>
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
      nickname: '',
      error: '',
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.setNickName();
          firebase.auth().signOut();
          this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setNickName() {
      const user = firebase.auth().currentUser;
      user.updateProfile({ displayName: this.nickname });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: rgb(63, 24, 47);
}
</style>
