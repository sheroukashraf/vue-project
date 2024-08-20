<template>
    <label for="text" class="col-md-4 form-label">{{ name }}</label>
    <div class="col-md-6">
        <input
            :value="value"
            @input="input"
            :type="type"
            name="name"
            :error="error"
            :rules="rules"
            class="form-control"
        />
    </div>
    <div class="col-md-2">{{ error }}</div>
</template>

<script>
export default {
    name: "InputsForm",
    data: function () {
        return {
            // value: "",
            // error: "",
        };
    },
    emits: ["getInputVal"],
    props: {
        value: {
            type: String,
            required: true,
        },
        error: {
            type: String,
        },
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            default() {
                return "text";
            },
        },
        rules: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    // created() {
    //     this.$emit("getInputVal", {
    //         value: this.value,
    //         name: this.name.toLowerCase(),
    //         error: this.isValid(this.value),
    //     });
    // },
    methods: {
        input($event) {
            this.$emit("getInputVal", {
                value: $event.target.value,
                name: this.name.toLowerCase(),
                error: this.isValid($event.target.value),
            });
        },
        isValid(value) {
            if (this.rules.required && value.length === 0) {
                return "Required";
            }
            if (this.rules.min && value.length < this.rules.min) {
                return "Min is " + this.rules.min;
            }
            // return "ff";
        },
    },
    // computed: {
    //     error() {
    //         if (this.rules.required && this.inputval.length === 0) {
    //             return "required";
    //         }
    //         if (this.rules.min && this.inputval.length < this.rules.min) {
    //             return "min";
    //         }
    //         // return "ff";
    //     },
    // },
};
</script>
