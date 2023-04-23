<template>
    <ul class="pagination m-0 ms-auto" v-if="total > 1">
        <li v-if="current != 1" class="page-item">
            <NuxtLink class="page-link" :to="`${url}&page=1`"><<</NuxtLink>
        </li>
        <li v-if="current != 1" class="page-item">
            <NuxtLink class="page-link" :to="`${url}&page=${current-1}`"><</NuxtLink>
        </li>
        <li v-if="current - 1 > 0" class="page-item">
            <NuxtLink class="page-link" :to="`${url}&page=${current-1}`">{{current-1}}</NuxtLink>
        </li>
        <li class="page-item">
            <NuxtLink class="page-link active" :to="`${url}&page=${current}`">{{current}}</NuxtLink>
        </li>
        <li v-if="current + 1 <= total" class="page-item">
            <NuxtLink class="page-link" :to="`${url}&page=${current+1}`">{{current+1}}</NuxtLink>
        </li>
        <li v-if="current != total" class="page-item">
            <NuxtLink class="page-link" :to="`${url}&page=${current+1}`">></NuxtLink>
        </li>
        <li v-if="current != total" class="page-item">
            <NuxtLink class="page-link" :to="`${url}&page=${total}`">>></NuxtLink>
        </li>
    </ul>
    <ul class="pagination m-0 ms-auto" v-else>
        <li class="page-item">
            <a href="#" class="page-link disabled"><</a>
        </li>
        <li class="page-item">
            <NuxtLink class="page-link active" :to="`${url}&page=${current}`">{{current}}</NuxtLink>
        </li>
        <li class="page-item">
            <a href="#" class="page-link disabled">></a>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        total: {
            type: Number,
            default: () => 0,
        },
        current: {
            type: Number,
            default: () => 1
        },
        pageSize: {
            type: Number,
        }
    },
    computed: {
        url() {
            let url = this.$route.path;
            url += `?page_size=${this.pageSize}&`;
            url += this.$serialize(this.$route.query, ['page'], true);
            return url;
        },
    },
};
</script>