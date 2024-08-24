<template>
    <div class="container proj-sec">
        <h1 class="sec-title">Check Latest Samples</h1>
        <div class="row">
            <div
                v-for="(section, index) in sections"
                :key="index"
                :style="{ backgroundImage: `url(${section.secImg})` }"
                class="col-md-3 sec"
            >
                {{ section.title }}
            </div>
        </div>
    </div>
</template>
<script>
import back1 from "../../assets/back1.jpg";
import back2 from "../../assets/back2.jpg";
import back3 from "../../assets/back3.jpg";

export default {
    data: function () {
        return {
            sections: [
                { index: 1, title: "Blogs", secImg: back1 },
                { index: 2, title: "Videos", secImg: back2 },
                { index: 3, title: "Jouin Us", secImg: back3 },
                { index: 3, title: "Journal", secImg: back1 },
            ],
        };
    },
};
</script>
<style lang="scss">
.proj-sec {
    margin-top: 75px;
    .row {
        display: inline-flex;
        justify-content: space-between;
        .sec {
            background-size: cover;
            border-radius: 50%;
            padding: 100px;
            border: 10px solid rgb(13 110 253 / 5%);
            font-size: 20px;
            font-weight: 800;
            align-content: center;
            border-left: dotted #86b7fe;
            box-shadow: 2px 4px 10px -1px #ccc;
            &:nth-child(2),
            &:nth-child(4) {
                transform: translateY(30px);
            }
        }
    }
}
</style>
