
<template>
    <b-container class="p-5">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                <p class="text-center font-weight-bold" id="community-text">장바구니</p>
            </b-col>
            <b-col></b-col>
        </b-row>   
        <b-row class="pt-3 m-2 cart-list" v-for="(item, id) in cartItems" :key="id" >
             
                <b-col>
                    <b-img :src="require('@/assets/img/user/sero.jpeg')" fluid alt="Fluid image" class="cart-image"></b-img>
                </b-col>   
                <b-col>
                    <div> {{item.liquorName}}</div><div>{{item.price}}</div>  
                    <div>{{item.quantity}}</div> 
                </b-col>
    
            </b-row> 
               <b-row>

                <b-col cols="3">
                    <b-button id="orderButton" @click="order">주문하기</b-button>
                </b-col>
               </b-row>
            
    </b-container>
</template>
<script>
import http  from "@/assets/js/community/http";
export default {
    name: 'CartList',
    data() {
        return {
            cartItems: [],

        };
    },
    created() {
        http.get('/cart-items/').then((response) => {
            this.cartItems = response.data.data;
            console.log(this.cartItems);
        });
    },
    methods: {
        order() {
            http.post('/receipts/').then((res) => {
                console.log(res.data.data);
                  // router 
               //   this.$router.push({ name: "OrderReady" }, { params: { receiptId: res.data.dat } });
               // OrderReady 로 가고 pathVariable 은 res.data.data
                this.$router.push({ name: "OrderReady", params: { receiptId: res.data.data } });
            }).catch((error) => {
            console.log(error);
        })

        
          

        },
    },
   
}

</script>

<style scoped>
.cart-list {
    color: black;
    border : 1px solid silver;
}
.cart-image {
    width: 200px;}
</style>