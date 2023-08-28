<template>
    <b-container class="m-3">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                <p class="text-center font-weight-bold" id="community-text">술 상품 보기</p>
            </b-col>
            <b-col></b-col>
        </b-row>
       <b-row>
            
        <b-row id="filterBar" class="p-5">
      <b-col>
        <b-form-select v-model="selectedManufacturing" :options="manufacturingOptions" placeholder="제조 방식 선택"></b-form-select>
      </b-col>
      <b-col>
        <b-form-select v-model="selectedRegion" :options="regionOptions" placeholder="지역 선택"></b-form-select>
      </b-col>
      <b-col>
        <b-form-select v-model="selectedStatusType" :options="statustypeOptions" placeholder="판매 상태 선택"></b-form-select>
      </b-col>
      <b-col>
        <b-input v-model="brandNameSearch" placeholder="브랜드 이름 검색"></b-input>
      </b-col>
      <b-button id="applyFilterButton" @click="applyFilters">필터 적용</b-button>
        </b-row>
        </b-row>
        <b-row v-if="paginatedItems.length > 0" cols="1" cols-md="3">
         <LiquorItem v-for="(item, index) in paginatedItems" :key="index" :hotPlace="item"></LiquorItem>
         </b-row>
        <b-row v-else>
            <b-col class="text-center" > 등록된 술 상품이  없습니다.</b-col>
        </b-row>
        <b-row v-if="hasNextPage" class="mt-3">
            <b-col class="text-center">
                <b-button variant="outline-primary" @click="loadMore">다음</b-button>
            </b-col> 
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
        hasNext : false,
        searchText: "",
        search: {
            keyword: null,
            category: null,
        },
        brandNameSearch: null, // 브랜드 이름 검색어
        afterCursor: null, // Cursor for pagination
        selectedManufacturing: null, // 선택된 제조 방식
      selectedRegion: null, // 선택된 지역
      manufacturingOptions: [
        { value: "소주", text: "소주" },
        { value: "증류주", text: "증류주" },
        { value: "막걸리", text: "막걸리" },
        { value: "약주", text: "약주" },
        { value: "청주", text: "청주" },
        { value: "과실주", text: "과실주" },
        { value: "기타주류", text: "기타주류" },
      ],
      regionOptions: [
        { value: "경기도", text: "경기도" },
        { value: "강원도", text: "강원도" },
        { value: "충청북도", text: "충청북도" },
        { value: "충청남도", text: "충청남도" },
        { value: "경상북도", text: "경상북도" },
        { value: "경상남도", text: "경상남도" },
        { value: "전라북도", text: "전라북도" },
        { value: "전라남도", text: "전라남도" },
        { value: "제주도", text: "제주도" },
      ],
      statustypeOptions: [
        { value: "판매중", text: "판매중" },
        { value: "판매중지", text: "판매중지" },
      ],
        };
    },

    created() { 
        http.get('/liquors/first').then((response) => {
            console.log(response.data);
            if (response.data?.data?.hasNext) {
                this.items = response.data.data.liquors;
                console.log(this.items);
                this.hasNext = response.data.data.hasNext;
                this.afterCursor = response.data.data.nextCursorId;
    
            }
        });
    },
    components: { LiquorItem },

    computed: {
    ...mapState("userStore", ["isLogin", "userId"]),
    paginatedItems() {
      return this.items;
    },
    hasNextPage() {
      return this.hasNext;
    },
},

    methods: {
        loadMore() {
            http.get('/liquors?cursorId='+ this.afterCursor).then((response) => {
                console.log(response.data);
                if (response.data?.data?.hasNext) {
                    this.items = this.items.concat(response.data.data.liquors);
                    this.hasNext = response.data.data.hasNext;
                    this.beforeCursor = this.afterCursor;
                    this.afterCursor = response.data.data.nextCursorId;
                }
            });
        },

        applyFilters() {
            this.afterCursor = null;
            let url = '/liquors?';

            if (this.selectedManufacturing) {
                url += 'brew=' + this.selectedManufacturing;
            }
            if (this.selectedRegion) {
                url += '&region=' + this.selectedRegion;
            }
            if (this.selectedStatusType) {
                url += '&status=' + this.selectedStatusType;
            }
            if (this.brandNameSearch) {
                url += '&brand=' + this.brandNameSearch;
            }
            console.log(url);
            http.get(url).then((response) => {
                console.log(response.data);
                    this.items = response.data.data.liquors;
                    console.log(this.items);
                this.hasNext = response.data.data.hasNext;
                this.afterCursor = response.data.data.nextCursorId;
                
            });
    
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