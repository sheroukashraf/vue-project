<template>
    <div class="qute container mt-5">
        <form class="row" action="">
            <div class="col-md-11 mb-3">
                <label class="col-form-label" for="num">Number</label>
                <input
                    class="form-control num"
                    type="number"
                    v-model="UserNum"
                />
            </div>
            <div class="col-md-1 mb-3 row">
                <label class="col-form-label" for="color">Color</label>
                <input
                    class="form-control color"
                    type="color"
                    v-model="UserColor"
                />
            </div>
        </form>
    </div>
    <div><QuteAdvice :color="UserColor" :advice="getAdvice" /></div>
</template>

<script>
import QuteAdvice from "@/components/QutesComp/QuteAdvice.vue";
export default {
    data: function () {
        return {
            UserNum: "",
            UserColor: "#000000",
            quote: ["quote1", "quote2", "quote3", "quote4"],
        };
    },
    computed: {
        getAdvice() {
            const advice = this.quote.find((q, i) => i + 1 === this.UserNum);
            if (!advice) return "No advice";
            return advice;
        },
    },
    name: "quteView",
    components: { QuteAdvice },
};
</script>
