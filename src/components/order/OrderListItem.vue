<template>
    <b-container class="class-orderListItem" >
        <div>  <b-row>주문번호 : {{ order.orderId }}</b-row>

<b-row>구매 시간 : {{ order.createdAt }}</b-row>
<b-row>유저 마일리지 사용 : {{ order.mileageUsage }}</b-row>
<b-row>실 구매 가격 : {{ order.purchasedTotalPrice }}</b-row>
<b-row>정가 : {{ order.originalTotalPrice }}</b-row>
<b-row>총합 : {{ order.totalQuantity }}</b-row>
</div>
      
   
            <OrderItem v-for="(item, index) in order.orderItems" :key="index" :orderItem="item" >
            </OrderItem>
    <b-button variant="primary" @click="$router.push('/order/detail/'+order.orderId)">자세히 보기</b-button> 
  </b-container>
</template>

<script>
import OrderItem from "@/components/order/OrderItem.vue";
export default {
    data() {
        return {
          

        };
    },
    methods: {

    },
    props : {
        order : {
            type : Object,
            required : true,
        }
    },

components: { OrderItem },
 
};
</script>

<style scoped>
.class-orderListItem{
    border : 1px solid black;
    margin : 10px;
    padding : 10px;
}
</style>

