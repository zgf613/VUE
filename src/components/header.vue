<template>
    <div class="clearFix el-menu--dark">
        <ul class="el-menu menu-horizontal el-menu--dark el-menu--horizontal header-nav">
            <router-link to="/" tag="li" class="el-menu-item logo">
                <img src="../assets/miaov.png" alt="">
            </router-link>
            <router-link to="/project" tag="li" class="el-menu-item">
               <i class="fa fa-home"></i>
               我的项目
            </router-link>
            <router-link to="/workbench" tag="li" class="el-menu-item">
               <i class="fa fa-code"></i>
               工作台
            </router-link>
            <router-link to="/doc" tag="li" class="el-menu-item">
               <i class="fa fa-book"></i>
               文档
            </router-link>
        </ul>
        <div class="user-info-box" v-show="isLogin">
            <div class="el-submenu_title" >
                <img src="../assets/portrait.png" alt="">
                <span>{{userName}}</span>
            </div>
            <div class="header-menu">
                <ul class="menu-nav">
                    <li class="el-menu-item" @click="loginOut">登出</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data () {
        return {
            userName: '',
            isLogin: false
        }
    },
    created(){
        let info = this.$local.fetch('logIn');
        this.isLogin = info.login;
        this.userName = info.userName
    },
    methods:{
        loginOut(){
            this.$local.save('logIn',null);
            this.$router.push('/login')
        }
    }
}
</script>
<style>


.el-menu--dark .logo img {
    vertical-align: middle;
}
.el-menu-item,.el-submenu_title{
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #48576a;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    -webkit-transition: border-color .3s,background-color .3s,color .3s;
    transition: border-color .3s,background-color .3s,color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;
}
.el-submenu_title span{
    color: #bfcbd9;
}
.user-info-box img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-right: 10px;
    vertical-align: middle;
}
</style>