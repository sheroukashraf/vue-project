<template>
    <button
        type="submit"
        class="btn btn-dark"
        :style="{ background: background }"
    >
        {{ title }}
    </button>
</template>
<script>
export default {
    props: ["title", "background"],
};
</script>
