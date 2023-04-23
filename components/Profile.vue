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
                        <form class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xxl-2">
                                        <span class="avatar avatar-xl mb-4">{{ logged.email.substr(0, 2) }}</span>
                                        <h3 class="mb-0">{{ logged.email }}</h3>
                                        <p class="mt-2">
                                            <span class="badge bg-red-lt">{{ logged.role }}</span>
                                        </p>
                                    </div>
                                    <div class="col-xxl-4">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="mb-3">
                                                    <h1 class="mb-0">{{ logged.full_name != "" ? logged.full_name : 'Anonimus'}}</h1>
                                                    <p class="text-muted">Зарегистрирован {{ logged.register_date }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card-footer">
                                <div class="d-flex center">
                                    <button @click="$auth.logout()" type="button" class="btn btn-danger ms-auto" >Выйти</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    computed: {
        logged() {
            return this.$auth.user;
        },
    }
}
</script>