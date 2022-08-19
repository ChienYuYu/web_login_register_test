<template>
  <div class="wrapper">
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="col-lg-6 d-flex justify-content-center">
        <form class="border p-5">
          <h2 class="mb-4 text-center text-white">註冊帳號</h2>
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
          <div class="mb-3">
            <label for="nickname" class="form-label">
              <input
                type="password"
                class="form-control"
                id="nickname"
                name="nickname"
                placeholder="暱稱"
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

<style lang="scss" scoped>
.wrapper {
  background: rgb(63, 24, 47);
}
</style>
