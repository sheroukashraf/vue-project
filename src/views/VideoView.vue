<template>
    <div class="video pt-4 pb-4">
        <VideForm @addvideo="addvideo" />
    </div>
    <div class="section">
        <PageSection title="My Videos">
            <template v-slot:control>
                <VideosControl @changeval="changeval" :rules="rules" />
            </template>
            <template v-slot:content>
                <VideoTable
                    :index="index"
                    @deletevideo="deletevideo"
                    :videos="displayedVideo"
                />
            </template>
        </PageSection>
    </div>
</template>

<script>
import VideForm from "../components/VideoApp/VideoForm.vue";
import PageSection from "../components/VideoApp/PageSection.vue";
import VideoTable from "../components/VideoApp/VideoTable.vue";
import VideosControl from "../components/VideoApp/VideosControl.vue";

export default {
    data: function () {
        return {
            index: "",
            videos: [
                { id: 3, name: "hii", url: "urlllll" },
                { id: 1, name: "sssii", url: "urlddllll" },
                { id: 5, name: "aaaii", url: "urzzlllll" },
            ],
            rules: {
                reverse: false,
                byid: false,
                byname: false,
            },
        };
    },
    name: "VideoView",
    computed: {
        displayedVideo() {
            let final = [...this.videoWithId];
            // console.log(final.reverse());
            if (this.rules.byid) {
                final = this.sortById;
            }
            if (this.rules.byname) {
                final = this.sortByName;
            }
            return this.rules.reverse ? final.reverse() : final;
        },
        videoWithId() {
            const result = [...this.videos].map((video, index) => ({
                ...video,
                id: video.id ? video.id : index + 1,
            }));
            return result;
        },
        sortById() {
            const result = [...this.videoWithId].sort((a, b) => a.id - b.id);
            return result;
        },
        sortByName() {
            const result = [...this.videoWithId].sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                return 0;
            });
            return result;
        },
    },
    methods: {
        addvideo(payroal) {
            const { id, name, url } = payroal;
            this.videos.push({
                id: id,
                name: name,
                url: url,
            });
            return console.log(name, url);
        },
        deletevideo(video) {
            // this.video = this.videos.splice(video, this.index);
            // console.log(this.video, video, this.index);
            this.videos = this.videos.filter(
                (v) => v.name !== video.name && v.url !== video.url
            );
        },
        changeval(values) {
            const { name, checked } = values;
            this.rules[name] = checked;
        },
    },
    components: {
        VideForm,
        VideoTable,
        PageSection,
        VideosControl,
    },
};
</script>
<style>
.video {
    background: linear-gradient(45deg, #fff3cd, #d1d1d1);
}
</style>
