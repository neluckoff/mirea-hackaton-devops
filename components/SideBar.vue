<template>
    <aside class="navbar navbar-dark" :class="{'navbar-vertical': !menuActive, 'navbar-expand-md': menuActive, 'navbar-expand-lg': !menuActive}">
        <div class="container-fluid">
            <button v-if="!menuActive" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-expanded="false" @click="toggleNav()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <button v-else class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-expanded="true" @click="toggleNav()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1 class="navbar-brand navbar-brand-autodark">
                <nuxt-link to="/">
                    Кодаконда
                </nuxt-link>
            </h1>
            <div class="navbar-nav2 flex-row">
                
            </div>
            <div class="collapse navbar-collapse" id="navbar-menu" :class="{'show': menuActive}">
                <ul class="navbar-nav pt-lg-3" @click="menuActive = false">
                    <li class="nav-item" :class="{active: $route.fullPath == '/'}">
                        <nuxt-link class="nav-link" to="/">
                            <span class="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                </svg>
                            </span>
                            <span class="nav-link-title">Главная</span>
                        </nuxt-link>
                    </li>
                    <template v-for="(item, i) in menuItems">
                        <li class="nav-item" :key="i" :class="{active: $route.fullPath.includes(item.path)}">
                            <nuxt-link class="nav-link" :to="`/${item.path}`" :class="{'disabled': item.path.length == 0}">
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <rect x="7" y="3" width="14" height="14" rx="2" />
                                        <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                                    </svg>
                                </span>
                                <span class="nav-link-title">{{item.title}}</span>
                            </nuxt-link>
                        </li>
                    </template>
                    <li v-if="logged.is_superuser" class="nav-item" :class="{active: $route.fullPath == '/cresitors'}">
                        <nuxt-link class="nav-link" to="/creditors">
                            <span class="nav-link-icon d-md-none d-lg-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                </svg>
                            </span>
                            <span class="nav-link-title">Кредитные агенты</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            menuActive: false,
            menuItems: [
                {
                    title: "Магазины",
                    path: "shops"
                },
                {
                    title: "Торговые точки",
                    path: "points"
                },
                {
                    title: "Категории",
                    path: "categories"
                },
                {
                    title: "Список заказов",
                    path: 'order'
                }
            ]
        };
    },
    methods: {
        async toggleNav() {
            this.menuActive = !this.menuActive;
        }
    },
    computed: {
        logged() {
            return this.$auth.user;
        },
    }
}
</script>