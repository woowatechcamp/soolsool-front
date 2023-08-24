<template>
    <div class="p-2">
        <div id="circle-item">
            <b-img :src="require('@/assets/img/user/sero.jpeg')" alt=""> </b-img>
            <div class="circle-text">이름 : {{ liquor.name }}</div>
            <div class="circle-text">도수 : {{ liquor.alcohol }} 도수</div>
            <div class="circle-text">가격 : {{ liquor.price }} 원</div>
            <div class="circle-text"> 재고 : {{ liquor.stock }} 개</div>

            <b-button id="addCartButton" @click="addCart">장바구니에 담기</b-button>
        </div>
    </div>
</template>

<script>
import http from '@/assets/js/hotplace/http';

export default {
    data() {
        return {
            imageUrl: "/assets/img/user/sero.jpeg",
            name: "",
            alcohol: "",
            price: "",
            stock: "",

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
</style>

