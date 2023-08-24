<template>
    <div class="p-2">
        <div id="circle-item" @click="LiquorDetail">
            <b-img :src="require('@/assets/img/user/sero.jpeg')" alt=""> </b-img>
            <div class="circle-text">{{ hotPlace.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageUrl: "/assets/img/user/sero.jpeg",
        };
    },

    methods: {
        LiquorDetail() {
            console.log(this.hotPlace.id);
            this.$router.push({
                name: 'LiquorDetail',
                params: {
                    hotPlaceId: this.hotPlace.id,
                },
            }).catch(err => {
                console.log(err);
            });
        },
    },
    props: {
        hotPlace: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
@import "@/assets/css/global.css";
#circle-item {
    font-family: "IBM-Plex-Sans-KR-regular";


}


.circle-text {

    text-align: center;
    color: black;
    font-size: 30px;
}
</style>

