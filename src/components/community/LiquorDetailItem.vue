<template>
    <div class="p-2">
        <div id="circle-item">
            <b-img :src="require('@/assets/img/user/sero.jpeg')" alt=""> </b-img>
            <div class="circle-text">이름 : {{ liquor.name }}</div>
            <div class="circle-text">도수 : {{ liquor.alcohol }} 도수</div>
            <div class="circle-text">가격 : {{ liquor.price }} 원</div>
            <div class="circle-text"> 재고 : {{ liquor.stock }} 개</div>
            <b-button id="addCartButton" @click="addCart">장바구니에 담기</b-button>
            <div>
                <b-row>                 연관된 상품조회
</b-row>
              <b-row v-for="(item, index) in liquor.relatedLiquors" :key="index" class="itemRelated">
                <div>{{ item.id }}</div>
                <div> {{ item.name }}</div>
                <div> {{ item.price }}</div>

                <div> {{ item.stock }}</div>
                <b-button id="addCartButton" @click="detailCart(item.id)">자세히 보기</b-button>
              </b-row>
            </div>
        </div>
    </div>
</template>

<script>
import http from '@/assets/js/hotplace/http';

export default {
    data() {
        return {
            imageUrl: "/assets/img/user/sero.jpeg",
   
        };
    },

    methods: {
        addCart() {
            http.post('/cart-items/', {
                liquorId: this.liquor.id,
                quantity: 1,
            }).then((response) => {
                alert(response.data.message);
            }).catch((err) => {
                alert(err.response.data.message);
            });
           
        },
        detailCart(id) {

            console.log(id);
         this.$router.push({
             name: 'LiquorDetail',
             params: {
                 hotPlaceId: id,
             },
         }).then(() => {
            window.location.href = '/liquor/view/' + id;

         }).
         catch(err => {
             console.log(err);
         });
            
        },
    },
    props: {
        liquor: {
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
.itemRelated{
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
}
</style>

