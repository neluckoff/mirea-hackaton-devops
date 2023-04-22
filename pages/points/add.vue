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
                                    <input type="text" class="form-control" autocomplete="off">
                                </div>
                                <div class="mb-3">
                                    <div class="form-label required">Выберите магазин</div>
                                    <select class="form-select">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label required">Код торговой точки</label>
                                    <input type="number" class="form-control" autocomplete="off">
                                </div>
                                <button type="button" class="btn btn-green">
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