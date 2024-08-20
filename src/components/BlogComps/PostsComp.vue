<template>
    <div class="posts-box mb-4">
        <h4 class="post-title fw-semibold mb-0">{{ title }}</h4>
        <span
            class="post-view position-absolute start-100 translate-middle badge bg-success"
        >
            {{ views }}
        </span>
        <span class="post-date">{{ date }}</span>
        <p class="post-content lh-lg">
            {{ content }}
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author badge text-bg-info">{{ author }}</span>
            </div>
            <div class="col-sm-6 text-end">
                <span class="post-cat badge text-bg-warning">{{
                    category
                }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["views", "title", "date", "content", "author", "category"],
    // methods: {
    //     accountInUSD(v) {
    //         return v.toUpperCase();
    //     },
    // },
    name: "PostsComp",
    // inject:["newpost"]
};
</script>

<style scoped lang="scss">
.posts-box {
    background-color: #eee;
    padding: 20px;
    position: relative;
    text-align: left;
    border-radius: 1px;
    box-shadow: 1px 4px 14px -6px #33333391;
}
.post-date {
    font-size: 12px;
    color: #686868;
}
.post-view {
    top: 5px;
}
</style>
