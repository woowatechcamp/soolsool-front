<template>
    <div>
        <b-row  >
             <b-col>
                 <b-img :src="require('@/assets/img/user/sero.jpeg')" fluid alt="Fluid image" class="cart-image"></b-img>
             </b-col>   
             <b-col>
                 <div> {{item.liquorName}}</div>
                 <div>{{item.price}}</div>  
             </b-col>
             <b-col>            
                 <b-button id="deleteButton" @click="deleteCartItem(item.id)">삭제</b-button>
            </b-col>
            </b-row> 

            <b-row>
                <b-col>   
                <b-button id="plusButton" @click="plusCart()" >+</b-button>
                {{ this.quantity  }}
                <b-button id="minusButton" @click="minusCart()" >-</b-button>
            </b-col>           
             
            </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity : 1,
        };},
    methods: {
        plusCart() {            
            console.log(this.item.id);
            this.quantity++;
        this.$emit('updateCartItem', this.quantity, this.item.id);
        },
      //      this.$emit('updateCartItem', this.quantity, this.item.id);
        
        minusCart() {
            if (this.quantity > 1) {
                this.quantity--;
            }
            this.$emit('updateCartItem', this.quantity, this.item.id);
            },
        deleteCartItem(id) {
            this.$emit('deleteCartItem', id);
        },
        
    },
    created() {
        this.quantity = this.item.liquorQuantity;
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped></style>

