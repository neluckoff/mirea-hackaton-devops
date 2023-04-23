<template>
    <main>
        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header d-print-none">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="page-title">Оформление заказа</h2>
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
                                    <div class="form-label required">Выберите торговую точку</div>
                                    <select class="form-select" v-model="data.sale_point">
                                        <option v-for="(item, i) in items" :key="i" :value="item.id">{{item.name}} ({{ item.address }})</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <div class="form-label required">Выберите способ оплаты</div>
                                    <select class="form-select" v-model="data.payment_method">
                                        <option value="Картой при получении">Картой при получении</option>
                                        <option value="Наличными при получении">Наличными при получении</option>
                                        <option value="Картой на сайте">Картой на сайте</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label required">Номер телефона клиента</label>
                                    <input type="number" name="input-mask" class="form-control" placeholder="79999990000" autocomplete="off" min="10000000000" max="99999999999" v-model="data.telephone_number">
                                </div>
                                <div class="mb-3">
                                    <div class="form-label required">Выберите категорию товара</div>
                                    <select class="form-select" v-model="data.item_category">
                                        <option v-for="(item, i) in categories" :key="i" :value="item.id">{{item.name}}</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label required">Укажите стоимость</label>
                                    <input type="number" step="0.01" class="form-control" autocomplete="off" v-model="data.fee">
                                </div>
                                <button type="button" class="btn btn-green" @click="submitForm">
                                    Оформить заказ
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
                item_category: 1,
                telephone_number: "",
                sale_point: 1,
                fee: 525.2,
                payment_method: "Картой при получении"
            },
            items: [],
            categories: []
        }
    },
    methods: {
        async fetchStores() {
            try {
				if (!this.add) {
					let response = await this.$axios.$get(
						`/api/sale-points/`,
						{}
					);
					if (response) {
						this.items = response.items;
					}
				}
			} catch (err) {
				console.log(err);
			}
        },
        async fetchCategories() {
            try {
				if (!this.add) {
					let response = await this.$axios.$get(
						`/api/item-categories/`,
						{}
					);
					if (response) {
						this.categories = response.items;
					}
				}
			} catch (err) {
				console.log(err);
			}
        },
        async submitForm() {
            try {
                let response = await this.$axios.post(
                    `/api/credits/`,
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
        this.fetchCategories()
    }
}
</script>