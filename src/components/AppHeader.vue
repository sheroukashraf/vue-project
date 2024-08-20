<template>
    <div class="header" :style="{ '--light': color }">
        <h2 class="logo">{{ logo }}</h2>
        <ul class="">
            <li>
                <router-link to="/">
                    <slot tag="li">Home</slot>
                </router-link>
            </li>
            <li>
                <router-link to="/blog">
                    <slot tag="li">Blog</slot>
                </router-link>
            </li>
            <li>
                <router-link to="/video">
                    <slot tag="li">Videos</slot>
                </router-link>
            </li>
            <li>
                <router-link to="/qute">
                    <slot tag="li">Qutes</slot>
                </router-link>
            </li>
            <li>
                <router-link to="/join">
                    <slot tag="li">Join Us</slot>
                </router-link>
            </li>
            <li>
                <router-link to="/journal">
                    <slot tag="li">Journal</slot>
                </router-link>
            </li>
            <div class="moodcolors" title="Change Mood">
                <button @click="changemood" data-color="#aaa">light</button>
                <button @click="changemood" data-color="#000">dark</button>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    props: ["logo"],
    data: function () {
        return {
            color: "#aaa",
        };
    },
    methods: {
        changemood(event) {
            this.color = event.target.getAttribute("data-color");
        },
    },
};
</script>
<style lang="scss">
.header {
    display: list-item;
    background-color: var(--light);
    padding: 20px;
}
.logo {
    float: left;
    color: #fff;
    margin-bottom: 0;
}
ul {
    float: right;
    align-content: center;
    margin-bottom: 0 !important;
    li {
        display: inline-block;
        a {
            color: #fff;
            padding: 5px 10px;
        }
        a.router-link-active {
            background-color: rgba(197, 151, 209, 0.192);
        }
    }
}
.moodcolors {
    display: inline-table !important;
    margin-left: 15px;
}
.moodcolors button {
    padding: 5px;
    border: none;
}
.moodcolors button:hover {
    background-color: #86b7fe;
}
.moodcolors :nth-child(1) {
    background-color: #fff;
    border-right: 2px solid #0d6efd;
}
.moodcolors :nth-child(2) {
    background-color: #000;
    color: #fff;
}
</style>
