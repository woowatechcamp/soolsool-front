<template>
    <b-container class="m-3" id="hot-place-detail-container">
        <BeforeSite></BeforeSite>
    
        <b-row>
            <b-col></b-col>
            <b-col>
                <LiquorDetailItem :liquor="liquor"></LiquorDetailItem>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>
import http from '@/assets/js/hotplace/http';
import BeforeSite from '../common/BeforeSite.vue';
import LiquorDetailItem from './LiquorDetailItem.vue';
export default {
    data() {
        return {
            hotPlace: {},
            liquor: {},
        };
    },
    methods: {
    },
    components: { BeforeSite, LiquorDetailItem},
    created() {
        console.log(this.$route.params.hotPlaceId);
        http.get(`/liquors/${this.$route.params.hotPlaceId}`).then((response) => {
            console.log(response.data);
            this.liquor = response.data.data;
        });
    },
};
</script>

<style scoped>
@import "@/assets/css/global.css";


#vote-text {
    font-size: 40px;
}



#hot-place-button {
    background-color: var(--primary-color);
}

#hot-place-detail-container {
    font-family: "IBM-Plex-Sans-KR-regular";
}
</style>