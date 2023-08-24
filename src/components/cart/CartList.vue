
<template>
    <b-container class="p-5">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                <p class="text-center font-weight-bold" id="community-text">장바구니</p>
            </b-col>
            <b-col></b-col>
        </b-row>   
        <div class="pt-3 m-2 cart-list" v-for="(item, id) in cartItems" :key="id">
            <b-row  >
             <b-col>
                 <b-img :src="require('@/assets/img/user/sero.jpeg')" fluid alt="Fluid image" class="cart-image"></b-img>
             </b-col>   
             <b-col>
                 <div> {{item.liquorName}}</div><div>{{item.price}}</div>  
                 <div>{{item.quantity}}</div> 
             </b-col>
             <b-col>             <b-button id="deleteButton" @click="deleteCart(item.id)">삭제</b-button>
</b-col>
       
            </b-row> 

            <b-row>
                <b-col>   <b-button id="plusButton" @click="plusCart()" v-model="quantity">+</b-button>
                {{ quantity  }}
                <b-button id="minusButton" @click="minusCart()" v-model="quantity">-</b-button>
            </b-col>           
             
            </b-row>

        </div>
       
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
            quantity: 1,
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
        deleteCart(id) {
            http.delete(`/cart-items/${id}`).then((response) => {
                console.log(response.data);
                alert(response.data.message)
                // reload 
                window.location.reload();
            });
        },
        plusCart() {
            this.quantity = this.quantity + 1;
        },
        minusCart() {
            if (this.quantity <= 1) {
                alert("최소 수량은 1개입니다.")
                return;
            } 
            this.quantity = this.quantity - 1;
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