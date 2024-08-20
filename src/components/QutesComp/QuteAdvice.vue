<template>
    <div class="advice container p-5">
        <p :style="{ color: color }">{{ advice }}</p>
    </div>
</template>
<script>
export default {
    name: "QuteAdvice",
    props: ["color", "advice"],
};
</script>
<style lang="scss" scoped>
.advice {
    background-color: rgb(13 110 253 / 9%);
}
</style>
