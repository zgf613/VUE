<template>
    <div class="project">
        <div class="add-project-box">
            <i class="fa fa-plus-square"></i>
            <span>创建项目</span>
        </div>
        <div class="block-content">
            这是工作台页面
        </div>
    </div>
</template>
<script>
export default {
    name:'Project'
}
</script>
<style>
    .project{
        width: 100%;
        height: 100%;
    }
    .add-project-box{
        width: 98%;
        height: 48px;
        line-height:48px;
        text-align: center;
        margin:20px auto;
        border-radius: 3px;
        border:1px solid #ccc;
        box-shadow: 0 0 2px rgba(0,0,0,.2);
        font-size:16px;
        background:#fff;
    }
    .add-project-box:hover {
        cursor: pointer;
        background: #eff2f7;
    }
    .project .fa{
        margin-right:10px;
    }
    .block-content{
        width: 300px;
        height: 180px;
        line-height:180px;
        background:#324057;
        text-align:center;
        color:#fff;
        font-size:20px;
        position: relative;
        margin-top:30px;
        border-radius:5px;
    }
</style>