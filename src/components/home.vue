<template>
    <div class="main">
        <div class="home-header">
            <img src="../assets/miaov.png" alt="">
            <div class="portrait">
                <router-link tag="span" to="/login" v-if="!isLogin">登录</router-link>
                <img src="../assets/portrait.png" alt="" v-if="isLogin">
            </div>
        </div>
        <div class="phrase">
            一起学习Vue-Router
        </div>
        <div class="btns">
            <router-link to="/project" class="trans" tag="div">我的项目</router-link>
            <router-link to="/doc" class="trans" tag="div">我的文档</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data(){
        return{
            isLogin:false
        }
    },
    created(){
        //拿到登录信息
        let info = this.$local.fetch('logIn')
        this.isLogin = info.login
    }
    
}
</script>
