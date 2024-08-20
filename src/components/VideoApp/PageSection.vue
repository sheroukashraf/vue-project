<template>
    <div class="title mt-3" :title="title">
        <span class="fw-bold fs-2 border-bottom border-warning-subtle border-3">
            {{ title }}</span
        >
    </div>
    <div class="content">
        <slot name="control"> </slot>
        <slot name="content"> </slot>
    </div>
</template>

<script>
export default {
    props: ["title"],
};
</script>
