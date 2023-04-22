<template>
    <main>
        <div class="page-body">
            <div class="container-fluid">
                <div class="page-header d-print-none">
                    <div class="row align-items-center">
                        <div class="col">
                            <h2 class="page-title">Список всех кредитных агентов</h2>
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
                        <div class="card">
                            <div class="card-body border-bottom py-3">
                                <div class="d-flex">
                                    <div class="text-muted">
                                        Показать
                                        <div class="mx-2 d-inline-block">
                                            <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count" />
                                        </div>строк
                                    </div>
                                    <div class="ms-auto text-muted">
                                        Поиск:
                                        <div class="ms-2 d-inline-block">
                                            <input type="text" class="form-control form-control-sm" aria-label="Search invoice" />
                                        </div>
                                        
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
                                            <th class="w-1">
                                                No.
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-sm text-dark icon-thick" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <polyline points="6 15 12 9 18 15" />
                                                </svg>
                                            </th>
                                            <th>Invoice Subject</th>
                                            <th>Client</th>
                                            <th>VAT No.</th>
                                            <th>Created</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice" />
                                            </td>
                                            <td>
                                                <span class="text-muted">001408</span>
                                            </td>
                                            <td>
                                                <a href="invoice.html" class="text-reset" tabindex="-1">Icons</a>
                                            </td>
                                            <td>
                                                <span class="flag flag-country-pl"></span>
                                                Tookapic
                                            </td>
                                            <td>87956621</td>
                                            <td>13 May 2018</td>
                                            <td>
                                                <span class="badge bg-success me-1"></span> Paid Today
                                            </td>
                                            <td>$940</td>
                                            <td class="text-end">
                                                <span class="dropdown" >
                                                    <button v-bind:class="{'show': activeShow}" @click="setActive" class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                                                    <div v-bind:class="{'show': activeShow}" class="dropdown-menu dropdown-menu-end">
                                                        <a class="dropdown-item" href="#">Action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                    </div>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer d-flex align-items-center">
                                <p class="m-0 text-muted">
                                    Showing
                                    <span>1</span> to
                                    <span>8</span> of
                                    <span>16</span> entries
                                </p>
                                <ul class="pagination m-0 ms-auto">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                                            <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <polyline points="15 6 9 12 15 18" />
                                            </svg>
                                            prev
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">1</a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">4</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">5</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            next
                                            <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <polyline points="9 6 15 12 9 18" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>