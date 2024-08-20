<template>
    <form class="container">
        <div class="mb-3 row">
            <label for="videourl" class="col-sm-2 col-form-label"
                >VideoUrl</label
            >
            <div class="col-sm-10">
                <input
                    v-model="videourlval"
                    type="text"
                    class="form-control"
                    id="videourl"
                />
            </div>
        </div>
        <div class="mb-3 row">
            <label for="videoname" class="col-sm-2 col-form-label"
                >VideoName</label
            >
            <div class="col-sm-10">
                <input
                    v-model="videonameval"
                    type="text"
                    class="form-control"
                    id="videoname"
                />
            </div>
        </div>
        <div class="input-group btnform mt-3">
            <button @click="addvideo" type="submit" class="btn btn-dark">
                Add Video
            </button>
        </div>
    </form>
</template>
<script>
export default {
    data: function () {
        return {
            videourlval: "",
            videonameval: "",
        };
    },
    name: "VideoForm",
    emits: ["addvideo"],
    methods: {
        addvideo($event) {
            $event.preventDefault();
            console.log("added");
            this.$emit("addvideo", {
                name: this.videonameval,
                url: this.videourlval,
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.btnform {
    justify-content: center;
}
</style>
