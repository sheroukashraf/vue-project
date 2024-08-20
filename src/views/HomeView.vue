<template>
    <div class="home">
        <BlogButton
            class="btn btn-secondary"
            title="Blog"
            href="/blog"
            :fullWidth="true"
        ></BlogButton>
        <BlogButton class="btn btn-primary" :fullWidth="true"></BlogButton>
    </div>
</template>

<script>
// @ is an alias to /src
import BlogButton from "@/components/BlogHome/BlogButton.vue";

export default {
    name: "HomeView",
    components: {
        BlogButton,
    },
};
</script>
