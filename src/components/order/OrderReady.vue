<template>
    <div>
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                <p class="text-center font-weight-bold" id="community-text">주문서</p>
            </b-col>
            

        </b-row>   
 
        <b-row>

            <b-col>
              <div>주문 번호 :  {{ receipts.id }}</div> 
              <div> 총 금액 : </div>
              <div> 마일리지 쓴 금액 :                 {{ receipts.milageUsage }}</div>
              <div> 구매 금액 :    {{ receipts.purchasedTotalPrice }}</div> 
            <div> 총 개수 : {{ receipts.totalQuantity }}
</div>
            </b-col>        </b-row>
        <b-button id="orderButton" @click="pay">결제하기</b-button>
       
         
    </div>
</template>

<script>
import http  from "@/assets/js/community/http";
export default {
    data() {
        return {
            receipts: [],

        };
    },
    created() {
        http.get(`/receipts/${this.$route.params.receiptId}`).then((response) => {
            this.receipts = response.data.data;
            console.log(this.receipts);
        });
    },
    methods: {
        pay() {
            http.post('/pay/ready/', {
                receiptId: this.receipts.id,
            }).then((response) => {
                console.log(response.data);
             window.location.href = response.data.data.nextRedirectPcUrl;
            });
            
        

    },
    
}}
</script>

<style scoped></style>

