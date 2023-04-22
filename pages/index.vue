<template>
    <main>
        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header d-print-none">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="page-title">Аккаунт пользователя</h2>
                        </div>
                        <div class="col-auto ms-auto d-print-none"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-body">
            <div class="container-fluid">
                <div class="row row-cards">
                    <div class="col-lg-12">
                        <form class="card"> <!-- @submit.prevent="submitForm"-->
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xxl-2">
                                        <span class="avatar avatar-xl mb-4">nb</span>
                                        <h3 class="mb-0">Username</h3> <!--data.username-->
                                        <!--<p class="text-muted">Зарегистрирован 28 Aug 2019</p>-->
                                        <p class="mt-2">
                                            <span class="badge bg-red-lt">Администратор</span>
                                        </p>
                                    </div>
                                    <div class="col-xxl-2">
                                        <div class="row">
                                            <div class="col-12">
                                                <!-- <div class="mb-3">
                                                    <label class="form-label">Фильтр добавленных</label>
                                                    <label class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" v-bind="{'checked': settings.filter.userOnly}" @click="setFilterUserOnly()" />
                                                        <span class="form-check-label">{{settings.filter.userOnly ? 'Только свои':'Все'}}</span>
                                                    </label>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Показывать списком</label>
                                                    <label class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" v-bind="{'checked': settings.filter.cardList}" @click="setFilterCardList()" />
                                                        <span class="form-check-label">{{settings.filter.cardList ? 'Да':'Карточками'}}</span>
                                                    </label>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-footer">
                                <div class="d-flex center">
                                    <button type="button" class="btn" :class="{'btn-primary': add, 'btn-green': !add}">btnName(add)</button>
                                    <button type="button" class="btn btn-danger ms-auto" >Выйти</button> <!--@click="$auth.logout()"-->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- </ap-tab>
            <ap-tab title="Изображения" name="images" :disabled="add">
                <div class="page-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xxl-12">
                                <ap-images :uid="data._id" :type="page.type" :images="data.images" :max="1"></ap-images>
                            </div>
                        </div>
                    </div>
                </div>
            </ap-tab>
        </ap-tabs> -->
    </main>
</template>
<script>
export default {
    //layout: 'ap',
    data() {
        return {
            filterUser: true,
            timestamp: "",
            page: {
                type: "hero",
            },
            add: false,
            data: {
                _id: "",
                username: "",
            },
            config: {
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                    "Content-Type": "application/json",
                },
            },
            search: "",
        };
    },
    // methods: {
    //     async submitForm() {
    //         try {
    //             console.log("update");
    //             let response = await this.$axios.$put(
    //                 `/api/v1/bsgk/${this.page.type}/${this.$route.params.id}`,
    //                 this.data,
    //                 this.config
    //             );
    //             this.data = response.data;
    //             this.$notify({
    //                 title: this.data.title,
    //                 text: "Успешно обновлено",
    //                 type: "success",
    //                 duration: 3000,
    //                 speed: 200,
    //             });
    //         } catch (e) {
    //             console.log(e);
    //             this.$notify({
    //                 title: "Системная ошибка",
    //                 text: e,
    //                 type: "error",
    //                 duration: 5000,
    //                 speed: 200,
    //             });
    //         }
    //     },
    //     btnName(type) {
    //         return "Обновить";
    //     },
    //     async setFilterUserOnly() {
    //         this.$auth.$storage.setCookie("userOnly", !this.settings.filter.userOnly, false)
    //         this.$store.commit("settings/setFilterUserOnly", !this.settings.filter.userOnly);
    //         //this.$auth.$storage.getCookie("userOnly")
    //     },
    //     async setFilterCardList() {
    //         this.$auth.$storage.setCookie("cardList", !this.settings.filter.cardList, false)
    //         this.$store.commit("settings/setFilterCardList", !this.settings.filter.cardList);
    //     }
    // },
    // computed: {
    //     api() {
    //         if(!this.$store.state.api.url) return this.$api
    //         return this.$store.state.api;
    //     },
    //     settings() {
    //         return this.$store.state.settings;
    //     },
    // },
    // async fetch() {
    //     try {
    //         let response = await this.$axios.$get(
    //             `${this.api.url}/api/v1/profile/me`,
    //             {},
    //             this.config
    //         );
    //         this.data = response.data;
    //     } catch (e) {
    //         console.log(e);
    //         this.$notify({
    //             title: "Системная ошибка",
    //             text: e,
    //             type: "error",
    //             duration: 5000,
    //             speed: 200,
    //         });
    //     }
    // },
    // fetchOnServer: false,
};