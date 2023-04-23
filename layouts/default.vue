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
        logged() {
            return this.$auth.user;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>