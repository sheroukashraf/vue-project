<template>
    <div class="container">
        <div class="row control-box">
            <div class="form-check col-md-4 d-flex">
                <input
                    :checked="rules.reverse"
                    @change="changeval"
                    name="reverse"
                    class="form-check-input"
                    type="checkbox"
                    id="reverse"
                />
                <label class="form-check-label mb-0 mt-0 m-2" for="reverse">
                    Reverse
                </label>
            </div>
            <div class="form-check col-md-4 d-flex">
                <input
                    :checked="rules.byid"
                    @change="changeval"
                    name="byid"
                    class="form-check-input"
                    type="checkbox"
                    id="byid"
                />
                <label class="form-check-label mb-0 mt-0 m-2" for="byid">
                    ById
                </label>
            </div>
            <div class="form-check col-md-4 d-flex">
                <input
                    :checked="rules.byname"
                    @change="changeval"
                    name="byname"
                    class="form-check-input"
                    type="checkbox"
                    id="byname"
                />
                <label class="form-check-label mb-0 mt-0 m-2" for="byname">
                    ByName
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            // byidchecked: false,
            // bynamechecked: false,
        };
    },
    props: {
        rules: {
            type: Object,
            required: true,
            default() {
                return {};
            },
        },
    },
    methods: {
        changeval($event) {
            this.$emit("changeval", {
                name: $event.target.name,
                checked: $event.target.checked,
            });
        },
    },
};
</script>
<style scoped>
.control-box {
    background-color: #f2eace;
    padding: 10px 30px;
    display: inline-flex;
    border-radius: 5px;
    margin-top: 25px;
}
</style>
