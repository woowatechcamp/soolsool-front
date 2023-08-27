
<template>
    <b-container class="p-5">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                <p class="text-center font-weight-bold" id="community-text">장바구니</p>
            </b-col>
            <b-col></b-col>
        </b-row>   
        <CartListItem v-for="(item, index) in cartItems" :key="index" :item="item"  @updateCartItem="updateCartItem"  @deleteCartItem="deleteCartItem" >
        </CartListItem>

        <b-row>

                <b-col cols="3">
                    <b-button id="orderButton" @click="order">주문하기</b-button>
                </b-col>
         </b-row>
            
    </b-container>
</template>
<script>
import http  from "@/assets/js/community/http";
import CartListItem from '@/components/cart/CartListItem.vue';
export default {
    name: 'CartList',
    data() {
        return {
            cartItems: [],
     };
    },
    components: { CartListItem },
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
            alert(error.response.data.message);
        })
    
        },
 
        updateCartItem(quantity, id) {
            // 자식 컴포넌트에서 넘어온 수정된 아이템 데이터를 처리합니다.
            console.log(quantity);
            console.log(id);
            http.patch(`/cart-items/${id}`, {
                liquorQuantity: quantity,
            }).then((response) => {
                console.log(response.data);
                alert(response.data.message)
                // reload 
               // window.location.reload();
            });
          
        },
    
        deleteCartItem(id) {
            http.delete(`/cart-items/${id}`).then((response) => {
                console.log(response.data);
                alert(response.data.message)
                // reload 
                window.location.reload();
            });
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