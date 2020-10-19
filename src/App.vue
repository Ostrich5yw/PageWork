<template>
  <div id="app">
<!--    <router-link to="/About">about</router-link>-->
    <router-view/>                <!--显示界面内容，否则不会显示默认的界面(即router中"/"路径指向的界面) -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
