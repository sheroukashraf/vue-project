<template>
    <h4>{{ getMsg }}</h4>
    <button class="btn btn-dark" @click="ChangeMsg()">Change Msg</button>
    <form class="journalform container">
        <div class="m-3 row">
            <label for="" class="col-form-label">Text</label>
            <textarea
                id="text"
                name="text"
                v-model="text"
                cols="20"
                rows="10"
                class="form-control"
            ></textarea>
            <!-- v-modal.lazy, .trim , .number ,etc -->
        </div>
        <div class="mb-3 row colorinp">
            <label for="color" class="col-sm-1 col-form-label">Color</label>
            <div class="col-sm-1">
                <input
                    id="background"
                    v-model="background"
                    type="color"
                    class="form-control"
                />
            </div>
        </div>
        <FormBtn
            @click="Additem"
            class="m-3 p-2"
            title="Add Item"
            background="maroon"
        ></FormBtn>
        <FormBtn
            @click="getCurrentItem"
            class="m-3 p-2"
            title="Edit Item"
            background="darkblue"
        ></FormBtn>
    </form>
</template>

<script>
import FormBtn from "@/components/Journal/FormBtn.vue";
export default {
    props: {
        Edit: {
            default() {
                return {};
            },
        },
    },

    data: function () {
        return {
            text: "",
            background: "#fff",
        };
    },
    name: "form-list",
    components: { FormBtn },
    computed: {
        getMsg() {
            return this.$store.state.msg;
        },
    },
    emits: ["Additem"],
    methods: {
        //To Change msg Content
        ChangeMsg() {
            this.$store.dispatch("setMsg", "helo new msg");
        },
        Additem($event) {
            $event.preventDefault();
            this.$emit("Additem", {
                text: this.text,
                background: this.background,
            });
        },
        // getCurrentItem($event) {
        //     $event.preventDefault();
        // },
    },
    // conputed: {
    //     Edit(payload) {
    //         const { text, background } = payload;
    //         text === this.text;
    //         console.log(text, background);
    //         return text, background;
    //     },
    // },
};
</script>
<style>
.journalform {
    background-color: aliceblue;
    margin-top: 25px;
    padding: 30px;
    border-radius: 20px;
}
.colorinp {
    justify-content: center;
}
</style>
