<template>
    <CurosalHeader></CurosalHeader>
    <HomeSections></HomeSections>
</template>

<script>
import HomeSections from "@/components/HomePage/HomeSections.vue";
import CurosalHeader from "../components/HomePage/CurosalHeader.vue";
// @ is an alias to /src
export default {
    name: "HomeView",
    components: { CurosalHeader, HomeSections },
    data: function () {
        return {};
    },
};
</script>
