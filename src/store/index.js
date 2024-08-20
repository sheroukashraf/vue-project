import { createStore } from "vuex";

export default createStore({
    state: {
        msg: "hello Store",
    },
    getters: {},
    mutations: {},
    actions: {
        //To Change msg Content
        setMsg(context, newMsg) {
            const { state } = context;
            state.msg = newMsg;
        },
    },
    modules: {},
});
