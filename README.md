
## Vue-router简单的利用路由器来写一个类似于后台管理的项目


  ### 首页登录功能

  ![image](https://github.com/zgf613/Vue/blob/master/img/img0.JPG)  
  
  ### 我的项目和工作区需要登录，文档不需要登录
  ![image](https://github.com/zgf613/Vue/blob/master/img/img1.JPG)   
  
  ### 登录之后直接跳转到你点击的导航
  ![image](https://github.com/zgf613/Vue/blob/master/img/img2.JPG)  
  
  ### 文档页面有一个点击导航滑动的效果，用到一个插件Tween.js
  ![image](https://github.com/zgf613/Vue/blob/master/img/img3.JPG)  
  
  ### 登录退出的状态，是用的localStorage来存储

  let local = {                                                      <br>
      save (key, value) {                                            <br>
        localStorage.setItem(key, JSON.stringify(value))             <br>
      },                                                             <br>
      fetch (key) {                                                  <br>
        return JSON.parse(localStorage.getItem(key)) || {}           <br>
      }                                                              <br>
    }                                                                <br>

    export default {                                                 <br> 
      install: function (vm) {                                       <br>
        vm.prototype.$local = local                                  <br>
      }                                                              <br>
    }                                                                <br>
  }                                                                  <br>

