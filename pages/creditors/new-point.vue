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
                                    <div class="form-label required">Выберите кредитора</div>
                                    <select class="form-select" v-model="data.agent">
                                        <option v-for="(item, i) in creditors" :key="i" :value="item.id">{{item.full_name}}  ({{item.email}})</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <div class="form-label required">Выберите точку</div>
                                    <select class="form-select" v-model="data.sale_point">
                                        <option v-for="(item, i) in points" :key="i" :value="item.id">{{item.name}}</option>
                                    </select>
                                </div>
                                <button type="button" class="btn btn-green" @click="submitForm">
                                    Связать точку и кредитора
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
                sale_point: 0,
                agent: 0
            },
            creditors: [],
            points: []
        }
    },
    methods: {
        async submitForm() {
            try {
                let response = await this.$axios.post(
                    `/api/accesses/`,
                    this.data,
                );
                this.data = response;
                this.$notify({
                    title: "Добавлено",
                    text: "Агент связан с точкой",
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
        async fetchPoints() {
            try {
				if (!this.add) {
					let response = await this.$axios.$get(
						`/api/sale-points/`,
						{}
					);
					if (response) {
						this.points = response.items;
					}
				}
			} catch (err) {
				console.log(err);
			}
        },
        async fetchPeople() {
            try {
				if (!this.add) {
					let response = await this.$axios.$get(
						`/api/agents/`,
						{}
					);
					if (response) {
						this.creditors = response.items;
					}
				}
			} catch (err) {
				console.log(err);
			}
        },
    },
    mounted() {
        this.fetchPeople()
        this.fetchPoints()
    }
}
</script>