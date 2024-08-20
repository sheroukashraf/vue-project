export default {
    fetchAllItems() {
        return Promise.resolve([
            {
                text: "Hii Iam happy",
                background: "springgreen",
            },
            {
                text: "Hii Iam Sad",
                background: "#888",
            },
            {
                text: "Hii Iam nerv",
                background: "yellow",
            },
        ]);
    },
};
