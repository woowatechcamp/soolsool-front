<template>
    <div class="orderItem mt-3">
        <b-row>


            <b-col>
            <b-img :src="require('@/assets/img/user/sero.jpeg')" fluid alt="Fluid image" class="cart-image"></b-img>
        </b-col>
    <b-col>

    <b-col >유통기한 : {{ orderItem.expiredAt}}</b-col>
            <b-col >알코올 : {{ orderItem.liquorAlcohol }}</b-col>
            <b-col >브랜드 :{{ orderItem.liquorBrand}}</b-col>
            <b-col >방식 {{  orderItem.liquorBrewName }}</b-col>
            <!-- <b-col cols="3">이미지 {{ orderItem.liquorImageUrl}}</b-col> -->
            <b-col >이름 {{  orderItem.liquorName }}</b-col>
            <b-col >실제 가격 {{  orderItem.liquorOriginalPrice }}</b-col>
            <b-col >구매가격 {{ orderItem.liquorPurchasedPrice}}</b-col>
            <b-col >개수 {{ orderItem.quantity }}</b-col>
            <b-col>도수 {{ orderItem.volume }}</b-col>
</b-col>


        </b-row>
       
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    props: {
        orderItem: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>

.orderItem {
    color: black;
    border : 1px solid silver;
}   
</style>

