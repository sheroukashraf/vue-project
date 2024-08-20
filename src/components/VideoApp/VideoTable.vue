<template>
    <table class="table table-striped mt-3 container border">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">URL</th>
                <th scope="col">DELETE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(video, index) in videos" :key="index" :index="index">
                <th scope="row">#{{ video.id }}</th>
                <td>{{ video.name }}</td>
                <td>{{ video.url }}</td>
                <td @click="deletevideo(video)">X</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: {
        videos: {
            type: String,
            required: true,
        },
        index: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        deletevideo(video) {
            this.$emit("deletevideo", video);
            // console.log(index);
            // delete video;
        },
    },
    name: "VideoTable",
};
</script>
<style scoped>
td:last-child {
    color: red;
    font-weight: bold;
    cursor: pointer;
}
</style>
