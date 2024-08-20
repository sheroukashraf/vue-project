<template>
    <form class="container rounded joinform mt-5" @submit.prevent="submit">
        <div class="row pt-5 pb-5">
            <div class="input-group mb-3">
                <InputsForm
                    type="text"
                    name="UserName"
                    :rules="username.rules"
                    :value="username.value"
                    :error="username.error"
                    @getInputVal="setinput"
                />
            </div>
            <div class="input-group mb-5">
                <InputsForm
                    type="password"
                    name="Password"
                    :rules="password.rules"
                    :value="password.value"
                    :error="password.error"
                    @getInputVal="setinput"
                />
            </div>
            <div class="input-group btnform">
                <ButtonForm text="Login" :disable="isAble" />
            </div>
        </div>
    </form>
</template>
<script>
import InputsForm from "../components/joinUs/InputsForm.vue";
import ButtonForm from "../components/joinUs/ButtonForm.vue";

export default {
    name: "JoinUsView",
    components: {
        InputsForm,
        ButtonForm,
    },
    data: function () {
        return {
            username: {
                rules: {
                    value: "name",
                    required: "true",
                    min: "4",
                },
                error: "",
            },
            password: {
                rules: {
                    value: "123",
                    required: "true",
                    min: "8",
                },
                error: "",
            },
        };
    },
    methods: {
        setinput({ value, name, error }) {
            this[name].error = error;
            this[name].value = value;
        },
        submit() {
            // $e.preventDefault();
            console.log({
                username: this.username.value,
                password: this.password.value,
            });
        },
    },
    computed: {
        isAble() {
            return this.username.error && this.password.error;
        },
    },
};
</script>

<style lang="scss" scoped>
.joinform {
    background: linear-gradient(
        45deg,
        rgba(13, 110, 253, 0.25),
        rgb(213 227 247 / 25%)
    );
    color: #555;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 1px 1px 4px -2px #555;
}
.btnform {
    justify-content: center;
}
</style>
