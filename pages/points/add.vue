<template>
    <main>
        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header d-print-none">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="page-title">Добавление новой торговой точки</h2>
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
                                    <label class="form-label required">Название торговой точки</label>
                                    <input type="text" class="form-control" autocomplete="off" v-model="data.name">
                                </div>
                                <div class="mb-3">
                                    <div class="form-label required">Выберите магазин</div>
                                    <select class="form-select" v-model="data.store">
                                        <option v-for="(item, i) in items" :key="i" :value="item.id">{{item.name}}</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label required">Код торговой точки</label>
                                    <input type="number" class="form-control" autocomplete="off" v-model="data.slug">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label required">Адрес</label>
                                    <input type="text" class="form-control" autocomplete="off" v-model="data.address">
                                </div>
                                <button type="button" class="btn btn-green" @click="submitForm">
                                    Добавить торговую точку
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
                store: "",
                name: "",
                slug: "",
                address: ""
            },
            items: []
        }
    },
    methods: {
        async fetchStores() {
            try {
				if (!this.add) {
					let response = await this.$axios.$get(
						`/api/stores/`,
						{}
					);
                    console.log(response)
					if (response) {
						this.items = response.items;
					}
				}
			} catch (err) {
				console.log(err);
			}
        },
        async submitForm() {
            try {
                let response = await this.$axios.post(
                    `/api/sale-points/`,
                    this.data,
                );
                this.data = response;
                this.$notify({
                    title: "Добавлено",
                    text: "Точка появилась",
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
    },
    mounted() {
        this.fetchStores()
    }
}
</script>