<template>
    <div class="container">
        <h1>{{ PageName }}</h1>
        <p>{{ PageDesc }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-12 posts">
                    <PostsComp
                        v-for="post in posts"
                        v-bind:key="post.id"
                        :views="post.view"
                        :title="post.title"
                        :date="post.date"
                        :content="post.content"
                        :author="post.author"
                        :category="post.category"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostsComp from "../components/BlogComps/PostsComp.vue";
import JsonPost from "../json/blog_posts.json";

export default {
    data: function () {
        return {
            PageName: "Blog Page",
            PageDesc: "This Is Blog Page",
            posts: JsonPost,
        };
    },
    // provide(){
    //     return {newpost: JsonPost};
    // },
    name: "BlogView",
    components: {
        PostsComp,
    },
};
</script>

<style scoped lang="scss"></style>
