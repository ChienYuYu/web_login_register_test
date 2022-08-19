<template>
  <div class="wrapper">
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="col-lg-6 d-flex justify-content-center">
        <form class="border p-5">
          <h2 class="mb-4 text-center text-white">使用者登入</h2>
          <div class="mb-3">
            <label for="account" class="form-label">
              <input
                type="text"
                class="form-control"
                id="account"
                name="account"
                aria-describedby="emailHelp"
                placeholder="帳號"
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
            /></label>
          </div>
          <div class="d-flex justify-content-between">
            <a href="#" class="link-light">註冊</a>
            <button type="submit" class="btn btn-secondary">登入</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background: rgb(25, 56, 46);
}
</style>
