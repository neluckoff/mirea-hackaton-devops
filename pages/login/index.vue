<template>
  <main>
      <div class="page page-center">
          <div class="container-tight py-4">
              <div class="text-center mb-4">
                  <nuxt-link to="/">
                      <!-- <img src="/logo.svg" height="36" alt /> -->
                  </nuxt-link>
              </div>
              <form class="card card-md" @submit.prevent="submitForm">
                  <div class="card-body">
                      <div class="mb-3">
                          <label class="form-label">Почта</label>
                          <input type="text" class="form-control" placeholder="Введите свой Email" v-model="data.email" required />
                      </div>
                      <div class="mb-2">
                          <label class="form-label">
                              Пароль
                          </label>
                          <div class="input-group input-group-flat">
                              <input type="password" class="form-control" placeholder="Введите пароль" autocomplete="off" v-model="data.password" required />
                              <span class="input-group-text">
                                  <a href="#" class="link-secondary" title data-bs-toggle="tooltip" data-bs-original-title="Show password">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                          <circle cx="12" cy="12" r="2" />
                                          <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                                      </svg>
                                  </a>
                              </span>
                          </div>
                      </div>
                      <div class="mb-2">
                          <label class="form-check">
                              <input type="checkbox" class="form-check-input" />
                              <span class="form-check-label">Запомнить меня</span>
                          </label>
                      </div>
                      <div class="form-footer">
                          <button type="submit" class="btn btn-primary w-100">Войти</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </main>
</template>
<script>
export default {
    layout: 'clear',
    data() {
      return {
          page: {
              title: 'Авторизация'
          },
          data: {
              email: "admin@admin.ru",
              password: "SuPeR_StRoNg_PaSs",
          },
      };
  },
  methods: {
    // async submitForm() {
    //     await this.$store.dispatch('auth/fetchUserToken', {login: data.email, password: data.password})
    // }
    async submitForm() {
        try {
            let response = await this.$auth.loginWith("local", {
                data: this.data,
            });
            console.log(response);
        } catch (e) {
            console.log(e)
        }
    },
  },
};
</script>