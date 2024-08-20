<template>
    <a :class="{ fullWidth: fullWidth }" :href="link">{{ title }}</a>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default() {
                return "Click";
            },
        },
        link: {
            type: String,
            default() {
                return "/";
            },
        },
        fullWidth: {
            type: Boolean,
            default() {
                return false;
            },
        },
    },
};
</script>
<style scoped>
.fullWidth {
    display: block;
    width: 100%;
}
</style>
