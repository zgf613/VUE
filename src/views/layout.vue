<template>
    <div>
        <header-nav></header-nav>
        <div class="breadcrumd">
            <router-link to="/">首页</router-link>
            /
            <span>{{flag}}</span>
        </div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import Header from '@/components/header'
    let flags = {
        project: '我的项目',
        workbench: '工作台',
        doc: '文档'
    }

    export default {
        data(){
            return{
               flag:'' 
            }
        },
        components:{
            headerNav:Header
        },
        watch:{
            $route(){
                this.flag = flags[this.$route.path.slice(1)]
            }
        },
        beforeRouteEnter(to,from,next){
            next((vm) => {
                vm.flag = flags[to.path.slice(1)]
            })
        }
    }
</script>
<style>
.breadcrumd{
    width: 100%;
    height: 40px;
    line-height:40px;
    padding:0px 10px;
    z-index:10;
    background:#eff2f7;
}
</style>
