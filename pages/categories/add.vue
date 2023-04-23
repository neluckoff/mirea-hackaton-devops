<template>
    <main>
        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header d-print-none">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="page-title">Добавление кредитного агента</h2>
                        </div>
                        <div class="col-auto ms-auto d-print-none"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-body">
            <div class="container-fluid">
                <div class="row row-cards">
                    <div class="col-12">
                        <form class="card">
                            <div class="card-body border-bottom py-3">
                                <div class="mb-3">
                                    <label class="form-label required">Название</label>
                                    <input type="text" class="form-control" autocomplete="off" v-model="data.name">
                                </div>
                                <button type="button" class="btn btn-green" @click="submitForm">
                                    Добавить категорию
                                </button>
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
    data() {
        return {
            data: {
                name: ""
            },
            items: []
        }
    },
    methods: {
        async submitForm() {
            try {
                let response = await this.$axios.post(
                    `/api/item-categories/`,
                    this.data,
                );
                this.data = response;
                this.$notify({
                    title: "Добавлено",
                    text: "Агент добавлен",
                    type: "success",
                    duration: 3000,
                    speed: 200,
                });
            } catch (e) {
                console.log(e);
                this.$notify({
                    title: "Системная ошибка",
                    text: e,
                    type: "error",
                    duration: 5000,
                    speed: 200,
                });
            }
        },
    }
}
</script>