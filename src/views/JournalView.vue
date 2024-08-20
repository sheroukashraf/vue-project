<template>
    <div>
        <HeaderNav logo="Dairy"></HeaderNav>
        <FormList @Additem="Additem" :Edit="Edit"></FormList>
        <CartList
            @Edit="Edit"
            @Deleteitem="Deleteitem"
            :items="items"
        ></CartList>
    </div>
</template>
<!-- @Edit="newKey = Math.random()" -->

<script>
import HeaderNav from "@/components/Journal/HeaderNav.vue";
import CartList from "@/components/Journal/CartList.vue";
import FormList from "@/components/Journal/FormList.vue";
import itemsApi from "@/apis/itemsApi.js";

export default {
    created() {
        //create when app run
        itemsApi.fetchAllItems().then((all) => (this.items = all));
    },
    data: function () {
        return {
            items: [],
        };
    },
    methods: {
        Additem(payload) {
            const { text, background } = payload;
            this.items.push({ text: text, background: background });
        },
        Deleteitem(items) {
            // const index = this.items.findIndex(
            //     (i) =>
            //         i.text === items.text && i.background === items.background
            // );
            // console.log(index);
            // if (index > -1) {
            //     this.items.splice(index, 1);
            // }
            this.items = this.items.filter(
                (v) =>
                    v.text !== items.text && v.background !== items.background
            );
        },
        Edit(payload) {
            const { text, background } = payload;
            console.log(text, background);
        },
        // getCurrentItem(payload) {
        //     const { text, background } = payload;
        //     text: this.text;
        //     background: this.background;
        //     console.log(text, background);
        // },
    },
    // data: function () {
    //     return {
    //         items: [
    //             // {
    //             //     text: "Hii Iam happy",
    //             //     background: "springgreen",
    //             // },
    //             // {
    //             //     text: "Hii Iam Sad",
    //             //     background: "#888",
    //             // },
    //             // {
    //             //     text: "Hii Iam nerv",
    //             //     background: "yellow",
    //             // },
    //         ],
    //     };
    // },
    name: "JournalView",
    components: {
        HeaderNav,
        CartList,
        FormList,
    },
};
</script>
