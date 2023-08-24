<template>
 <div>
    
<OrderListItem v-for="order in orders" :key="order.orderId" :order="order"></OrderListItem>  
 </div>
</template>

<script>
import http from "@/assets/js/community/http";
import OrderListItem from "@/components/order/OrderListItem.vue";
export default {
    data() {
        return {

            orders : []
        };
    },
    methods: {

    },
    components : { OrderListItem,  },
    created(){
        http.get("/orders").then((response) => {
            this.orders = response.data.data;
            console.log(this.orders);
        });
    }
};
</script>

<style scoped></style>

