<template>
  <div class="wrapper">
    <div class="container">
      <div class="pt-5 text-white text-center">
        <h2>登入後到這頁</h2>
        <p>沒權限就跳回登入頁</p>
      </div>
      <div class="text-warning text-center">
        <p class="h3">當前使用者 : {{ user.displayName }}</p>
        <p class="h3">Email : {{ user.email }}</p>
        <p class="h3">uid : {{ user.uid }}</p>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-secondary" @click="logout">登出</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      user: [],
    };
  },
  methods: {
    getUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          this.user = user;
        } else {
          this.$router.push({ name: 'home' });
        }
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'home' });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  background: rgb(18, 43, 58);
}
</style>
