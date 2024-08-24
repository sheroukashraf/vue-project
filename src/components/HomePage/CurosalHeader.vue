<template>
    <div id="carouselHome" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div
                v-for="(carousel, index) in carousels"
                :key="index"
                :class="['carousel-item', { active: index === 0 }]"
                data-bs-interval="5000"
            >
                <img
                    :src="carousel.src"
                    class="d-block w-100"
                    :title="carousel.title"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h4>{{ carousel.title }}</h4>
                    <h5 class="m-0">
                        {{ carousel.desc }}
                    </h5>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
</template>
<script>
import back1 from "../../assets/back1.jpg";
import back2 from "../../assets/back2.jpg";
import back3 from "../../assets/back3.jpg";
// @ is an alias to /src
export default {
    data: function () {
        return {
            carousels: [
                {
                    src: back2,
                    title: "Vue Projects",
                    desc: "Small Projects Made With Vue3",
                },
                {
                    src: back1,
                    title: "Small Video App",
                    desc: "Upload - Control - Delete",
                },
                {
                    src: back3,
                    title: "Join Us",
                    desc: "Small Application",
                },
            ],
        };
    },
};
</script>
<style lang="scss">
.carousel-item {
    background-size: cover !important;
    height: 350px;
    transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1),
        opacity 0.3s ease-in-out, filter 0.3s ease-in-out !important;
    filter: blur(0.6px);
    transform: scale(1.1);
    &.active {
        filter: blur(0px);
        transform: scale(1);
    }
    .w-100 {
        filter: brightness(0.4);
    }
    .d-md-block {
        background-color: #ffffff47;
        border-radius: 1px;
        box-shadow: 12px 13px 0px 5px #0dcaf0;
        margin-bottom: 100px;
        text-transform: uppercase;
        h4 {
            font-weight: bold;
        }
    }
}
</style>
