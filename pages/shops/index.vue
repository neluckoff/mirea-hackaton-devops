<template>
    <main>
        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header d-print-none">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="page-title">Список магазинов</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-body">
            <div class="container-fluid">
                <div class="row row-cards">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body border-bottom py-3">
                                <div class="d-flex">
                                    <div class="text-muted">
                                        Показать
                                        <div class="mx-2 d-inline-block">
                                            <input type="number" class="form-control form-control-sm" v-model="pageSize" size="3" aria-label="Invoices count" />
                                        </div>строк
                                    </div>
                                    <div class="ms-auto text-muted">
                                        <nuxt-link to="shops/add">
                                            <button type="button" class="btn btn-green">
                                                    Добавить магазин
                                            </button>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table card-table table-vcenter text-nowrap datatable">
                                    <thead>
                                        <tr>
                                            <th class="w-1">
                                                <input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices" />
                                            </th>
                                            <th class="w-1">ID.</th>
                                            <th>Уникальный код</th>
                                            <th>Название</th>
                                            <th>Описание</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, i) in items.items" :key="i">
                                            <td>
                                                <input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" />
                                            </td>
                                            <td>
                                                <span class="text-muted">{{item.id}}</span>
                                            </td>
                                            <td>
                                                <a href="invoice.html" class="text-reset" tabindex="-1">{{ item.slug }}</a>
                                            </td>
                                            <td>
                                                <span class="flag flag-country-pl"></span>
                                                {{ item.name }}
                                            </td>
                                            <td>{{ item.description }}</td>
                                            <td class="text-end">
                                                <button type="button" class="btn btn-red" @click="delStore(item.id)">Удалить</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer d-flex align-items-center">
                                <p class="m-0 text-muted">
                                    Показывается
                                    <span>{{ nowShops }}</span> из
                                    <span>{{ items.count }}</span> 
                                </p>
                                <pagination :total="items.total_pages" :pageSize="pageSize"></pagination>
                            </div>
                        </div>
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
            activeShow: false,
            items: [],
            pageSize: 8,
            nowShops: 0,
        }
    },
    methods: {
        setActive() {
            this.activeShow = !this.activeShow
        },
        async fetchStores() {
            try {
				if (!this.add) {
					let response = await this.$axios.$get(
						`/api/stores/?page_size=${this.pageSize}`,
						{}
					);
                    console.log(response)
					if (response) {
						this.items = response;
					}
				}
			} catch (err) {
				console.log(err);
			}
        },
        async delStore(id) {
            try {
				if (!this.add) {
					let response = await this.$axios.$delete(
						`/api/stores/${id}/`,
						{}
					);
				}
			} catch (err) {
				console.log(err);
			}
            
            this.fetchStores()
        },
    },
    async fetch() {
		await this.fetchStores()
        this.nowShops = this.items.items.length
	},
    watch: {
        pageSize() {
            this.fetchStores()
        }
    }
}
</script>
