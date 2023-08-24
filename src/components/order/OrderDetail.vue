<template>
    <div>
        <BeforeSite></BeforeSite>

        <b-row>주문번호 : {{ order.orderId }}</b-row>

        <b-row>구매 시간 : {{ order.createdAt }}</b-row>
        <b-row>유저 마일리지 사용 : {{ order.mileageUsage }}</b-row>
        <b-row>실 구매 가격 : {{ order.purchasedTotalPrice }}</b-row>
        <b-row>정가 : {{ order.originalTotalPrice }}</b-row>
        <b-row>총합 : {{ order.totalQuantity }}</b-row>

   
            <OrderItem v-for="(item, index) in order.orderItems" :key="index" :orderItem="item" >
            </OrderItem>
    </div>
</template>

<script>
import OrderItem from "@/components/order/OrderItem.vue";
import http from "@/assets/js/community/http";
import BeforeSite from "../common/BeforeSite.vue";
export default {
    data() {
        return {
            order :{ 

                createdAt: "",
                mileageUsage: "",
                purchasedTotalPrice: "",
                originalTotalPrice: "",
                totalQuantity: "",
                orderId: "",
                orderItems : [],
            }

        };
    },
    methods: {

    },
components: { OrderItem, BeforeSite },
    created() {
        http.get(`/orders/${this.$route.params.orderId}`).then((response) => {
            this.order = response.data.data;
            console.log(this.order);
        });

    }
};
</script>

<style scoped></style>

