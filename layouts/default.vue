<template>
    <div class="wrapper">
        <notifications animation-type="velocity" :animation="animation" position="top right" classes="notify" />
        <side-bar ></side-bar>
        <div class="page-wrapper">
            <Nuxt />
            <!-- <footer-main ></footer-main> -->
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        animation() {
            return {
                enter(element) {
                    let height = element.clientHeight;
                    return {
                        height: [height, 0],
                        opacity: [1, 0],
                    };
                },
                leave: {
                    height: 0,
                    opacity: 0,
                },
            };
        },
        // logged() {
        //     return this.$store.state.settings.profile.logged;
        // },
    },
    methods: {
        // async getFilter() {
        //     let filterUserOnly = this.$auth.$storage.getCookie("userOnly");
        //     if(typeof filterUserOnly != 'undefined') {
        //         this.$store.commit("settings/setFilterUserOnly", filterUserOnly);
        //     }
        //     let filterCardList = this.$auth.$storage.getCookie("cardList");
        //     if(typeof filterCardList != 'undefined') {
        //         this.$store.commit("settings/setFilterCardList", filterCardList);
        //     }
        // }
    },
    created() {
        // this.getFilter()
    }
};
</script>

<style lang="scss" scoped>
</style>