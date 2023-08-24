<template>
    <div>
    </div>
</template>

<script>
import http from "@/assets/js/community/http";

export default {
    data() {
        return {

        };
    },
    methods: {

    },
    created(){
        http.get("/orders").then((response) => {
            this.orders = response.data.data;
            console.log(this.orders);
        });
    }
};
</script>

<style scoped></style>

