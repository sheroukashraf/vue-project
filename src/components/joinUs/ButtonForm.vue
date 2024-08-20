<template>
    <button type="submit" class="btn btn-primary" :disabled="disable">
        {{ text }}
    </button>
</template>
<script>
export default {
    name: "ButtonForm",
    props: {
        text: {
            type: String,
            required: true,
        },
        disable: {
            type: Boolean,
            required: false,
        },
    },
    // props: ["text"],
};
</script>
