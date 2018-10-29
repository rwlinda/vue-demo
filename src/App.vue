<template>
  <div id="app">
  <header>
    <nav>
      <router-link :to="{ name: 'insurances' }">Verzekeringen</router-link>
      <router-link :to="{name: 'form' }">Afsluiten verzekering</router-link>
    </nav>
  </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {margin:0;padding:0;}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}
header {background:#E0EEF7;padding:25px;}
nav {
    padding: 0 20px;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    background:#fff;
    overflow:hidden;
}
  nav a {
      color:#004078;text-decoration:none;padding:30px 10px;
      float:left;font-weight:bold;
  }
  .router-link-exact-active {text-decoration:underline;}
</style>
