<script>
import {mapActions} from "vuex";

export default {
    name:"UserJoin",
    computed: {
    
        nameState() { 
            return this.user.name.length >=3 && this.user.name.length < 12;
        },
        passwordState() { 
            return this.user.password.length >= 4 && this.user.password.length < 12;
        },
     
        addressState() { 
            return this.user.address.length > 0&& this.user.address.length < 100;
        },
        
        nameInvalidFeedback() { 
            if (this.user.name.length == 0) {
                return '이름을 입력해주세요.';
            }
            return "이름이 유효합니다.";
        },
        passwordInvalidFeedback() { 
            if (this.user.password.length == 0) {
                return '비밀번호를 입력해주세요.';
            }
            if (this.user.password.length < 4 || this.user.password.length > 12) {
                return '비밀번호는 4자 이상 12자 이하로 입력해주세요.';
            }
            return "비밀번호가 유효합니다.";
        },
        addressInvalidFeedback() { 
            if (this.user.address.length == 0) {
                return '주소를 입력해주세요.';
            }
            return "주소가 유효합니다.";
        },
        emailState() { 
            const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            return emailRegex.test(this.user.email);
        },
        emailInvalidFeedback() { 
            if (this.user.email.length == 0) {
                return '이메일을 입력해주세요.';
            }
            const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if (!emailRegex.test(this.user.address)) {
                return '이메일이 유효하지 않습니다.';
            }
            return "이메일이 유효합니다.";
        }
    },
    data() {
        return {
            user:{
                email:"",
                password: "",
                name: "",
                phoneNumber: "",
                mileage: 0,
                address: "",
            },
        }
    },
    methods:{
        ...mapActions(`userStore`,[`userJoin`]),
        joinConfirm() {
            // 모든 valid feed back 받을 시에, 회원가입 진행
            if (this.nameState && this.passwordState  && this.addressState && this.emailState) {
                this.userJoin(this.user);
            }
            else {
                alert("입력한 정보를 다시 확인해주세요.");
            }
        }
    }
}
</script>

<template>
    <b-container class="mt-5" id="joinContainer">
        <b-row>
            <b-col></b-col>
            <b-col cols="6">
                <p class="text-center font-weight-bold" id="user-join-title">회원 가입</p>
            </b-col>
            <b-col></b-col>
        </b-row>
        <b-row class="mt-5">
            <b-col></b-col>
            <b-col cols="6">
                <b-form>
                     <b-form-group :invalid-feedback="nameInvalidFeedback" valid-feedback="이름이 유효합니다." :state="nameState">
                            <b-form-input type="text" v-model="user.name" placeholder="이름" trim></b-form-input>
                        </b-form-group>

                        <b-form-group :invalid-feedback="emailInvalidFeedback" valid-feedback="이메일이 유효합니다" :state="emailState">
                            <b-form-input type="email"  v-model="user.email" placeholder="이메일"  trim></b-form-input>
                        </b-form-group>
                
                
                    <b-form-group :invalid-feedback="passwordInvalidFeedback" valid-feedback="비밀번호가 유효합니다." :state="passwordState">
                        <b-form-input type="password" v-model="user.password" placeholder="비밀번호" trim></b-form-input>
                    </b-form-group>

                    <b-form-group :invalid-feedback="addressInvalidFeedback" valid-feedback="주소가 유효합니다" :state="addressState">
                        <b-form-input type="text" v-model="user.address" placeholder="주소" trim></b-form-input>
                    </b-form-group>

        <b-form-group :invalid-feedback="phoneInvalidFeedback" valid-feedback="핸드폰 번호 양식이 유효합니다" >
                                    <b-form-input type="phoneNumber"  v-model="user.phoneNumber" placeholder="핸드폰 번호"  trim></b-form-input>
                                </b-form-group>
                    <b-button @click="joinConfirm" block>회원가입</b-button>
                </b-form>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<style scoped>
#joinContainer {
    font-family: "IBM-Plex-Sans-KR-regular";
}
#user-join-title {
    font-size: 1.2em;
    color: var(--primary-color);
}

input {
    background-color: var(--form-background-color);
    border: none;
    border-radius: 7px;
}

input::placeholder {
    font-size: 0.7rem;
}

button {
    background-color: var(--primary-color);
    border: none;
    border-radius: 7px;
    color: white;
}
</style>