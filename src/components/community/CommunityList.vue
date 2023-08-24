<template>
    <b-container class="m-3">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                <p class="text-center font-weight-bold" id="community-text">술 상품 보기</p>
            </b-col>
            <b-col></b-col>
        </b-row>
        <b-row class="p-3">
     
        </b-row>
    
         <b-row id="searchBar" class="p-5">
            <b-col></b-col>
            <b-col>
                <b-input type="text" placeholder="술 상품을 검색합니다."  v-model="searchText"/>
            </b-col>
            <b-button id="searchBarButton" @click="searchList">검색</b-button>
            <b-col></b-col>
        </b-row>
        
        <b-row v-if="items&& items.length>0" cols="1" cols-md="3" >
            <LiquorItem v-for="(item, index) in items" :key="index" :hotPlace="item" >
            </LiquorItem>
        </b-row>
        <b-row v-else>
            <b-col class="text-center" > 등록된 술 상품이  없습니다.</b-col>
        </b-row>
    </b-container>
</template>

<script>
import http  from "@/assets/js/community/http";
import { mapState } from "vuex";
import LiquorItem from '@/components/community/LiquorItem.vue';

export default {
    name: 'CommunityList',
 
    data() {
        return {
            items: [],
            searchText: "",
            search : {
                keyword : null,
                category : null,
            },
        
          
        };
    },

    created() {
        http.get('/liquors/').then((response) => {
            console.log(response.data);
            this.items = response.data.data;
      });
       
    },
    components: { LiquorItem },

    computed: {
         ...mapState("userStore", ["isLogin", "userId"]),
    },

    methods: {
        searchList() {
         
        },
       
    },
   
};
</script>

<style scoped>
@import "@/assets/css/global.css";
#community-text {
    color: var(--primary-color);
    font-family: "IBM-Plex-Sans-KR-regular";
}

#circle-button {
    color: var(--primary-color);
    font-size: 50px;
}

#community-table {
    font-family: 'IBM-Plex-Sans-KR-regular';
}

#community-pagination {
    color: var(--primary-color);
}
</style>