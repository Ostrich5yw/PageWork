<template>
  <div id="app">
<!--    <router-link to="/StuHome">stuhome</router-link>-->
    <router-view/>                <!--显示界面内容，否则不会显示默认的界面(即router中"/"路径指向的界面) -->
  </div>
</template>
<script>
    export default{
        mounted(){
            window.addEventListener("unload",this.saveState);			//给钩子函数绑定对刷新操作的监听事件
        },
        methods:{
            saveState(){
                sessionStorage.setItem('state',JSON.stringify(this.$store.state));		//设置一个键值对，即将当前的state存入浏览器缓存
            }
        }
    }
</script>
<style>
    @import "./static/css/main.css";
    @import "./static/css/color-dark.css";     /*深色主题*/

</style>
