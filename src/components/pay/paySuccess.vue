<template>
    <div>
        결제가 완료 되었습니다.
        <b-button variant="primary" @click="$router.push('/order/list')">주문내역</b-button>
    </div>
</template>

<script>
import http from '@/assets/js/community/http';
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    created() {
        http.get('/pay/success/'+ this.$route.params.receiptId+ '?pg_token=' + this.$route.query.pg_token)
        .then((response) => {
            console.log(response.data);
        });
        console.log('created');
    },
};
</script>

<style scoped></style>

