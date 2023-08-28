<template>
 <div>
    

    <div v-for="order in orders" :key="order.orderId" class="class-orderListItem"> 

        <div>  
            <b-row>주문번호 : {{ order.orderId }}
            </b-row>

        <b-row>구매 시간 : {{ order.createdAt }}</b-row>
        <b-row>유저 마일리지 사용 : {{ order.mileageUsage }}</b-row>
        <b-row>실 구매 가격 : {{ order.purchasedTotalPrice }}</b-row>
        <b-row>정가 : {{ order.originalTotalPrice }}</b-row>
        <b-row>총합 : {{ order.totalQuantity }}</b-row>
        </div>
        
    
        <OrderItem v-for="(item, index) in order.orderItems" :key="index" :orderItem="item" >
        </OrderItem>
        <b-button variant="primary" @click="$router.push('/order/detail/'+order.orderId)">자세히 보기</b-button> 


    </div>
        <b-row v-if="hasNextPage" class="mt-3">
                    <b-col class="text-center">
                        <b-button variant="outline-primary" @click="loadMore">다음</b-button>
                    </b-col> 
        </b-row>
 </div>
</template>

<script>
import http from "@/assets/js/community/http";
import OrderItem from "@/components/order/OrderItem.vue";
import { mapState } from "vuex";


export default {
    data() {
        return {
            orders : [],
            afterCursor: null, // Cursor for pagination
            hasNext : false,

        };
    },

    components : { OrderItem,  },
    created(){
        http.get("/orders").then((response) => {
            console.log(response.data);
            this.orders = response.data.data.orderListResponses;
            this.hasNext = response.data.data.hasNext;
            this.afterCursor = response.data.data.cursorId;    
        });
    },
    methods: {
    loadMore() {
            http.get('/orders?cursorId='+ this.afterCursor).then((response) => {
                if (response.data?.data?.hasNext) {
                    this.orders = this.orders.concat(response.data.data.orderListResponses);
                    this.hasNext = response.data.data.hasNext;
                    this.afterCursor = response.data.data.cursorId;
                }
            });
    
    }
},

    computed: {
    ...mapState("userStore", ["isLogin", "userId"]),
 
    hasNextPage() {
      return this.hasNext;
    },}

};
</script>

<style scoped>

.class-orderListItem{
    border : 1px solid black;
    margin : 10px;
    padding : 10px;
}
</style>

