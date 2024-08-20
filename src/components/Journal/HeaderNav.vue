<template>
    <div class="header">
        <h2 class="logo">{{ logo }}</h2>
        <p>{{ getMsg }}</p>
    </div>
</template>

<script>
export default {
    props: ["logo"],
    computed: {
        getMsg() {
            return this.$store.state.msg;
        },
    },
};
</script>
<style scoped lang="scss">
.header {
    background-color: #aaa;
}
</style>
