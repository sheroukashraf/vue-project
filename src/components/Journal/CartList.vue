<template>
    <div class="container">
        <div class="row card-body">
            <div
                v-for="(item, index) in items"
                :key="index"
                :style="{ background: item.background }"
                class="col-md-3 col-1 card"
            >
                <h5>{{ item.text }}</h5>
                <div class="row container">
                    <FormBtn
                        @click="Deleteitem(item)"
                        class="col-5"
                        title="Delete"
                        background="tomato"
                    ></FormBtn>
                    <FormBtn
                        @click="Edit(item)"
                        class="col-5"
                        title="Edit"
                        background="blue"
                    ></FormBtn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormBtn from "@/components/Journal/FormBtn.vue";

export default {
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    components: { FormBtn },
    emits: ["Deleteitem", "Edit"],
    methods: {
        Deleteitem(item) {
            this.$emit("Deleteitem", item);
            console.log("delete", item);
        },
        Edit(item) {
            this.$emit("Edit", {
                text: item.text,
                background: item.background,
            });
        },
    },
};
</script>
<style scoped lang="scss">
.card {
    padding: 20px 10px;
}
.row {
    padding: 0;
    margin: 1em 0;
    justify-content: space-around;
}
</style>
