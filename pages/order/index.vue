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
                                    <select class="form-select">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <div class="form-label required">Выберите способ оплаты</div>
                                    <select class="form-select">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label required">Номер телефона клиента</label>
                                    <input type="text" name="input-mask" class="form-control" data-mask="0 (000) 000-00-00" data-mask-visible="true" placeholder="7 (999) 999-00-00" autocomplete="off">
                                </div>
                                <div class="mb-3">
                                    <div class="form-label required">Выберите категорию товара</div>
                                    <select class="form-select">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label required">Укажите стоимость</label>
                                    <input type="number" class="form-control" autocomplete="off">
                                </div>
                                <button type="button" class="btn btn-green">
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