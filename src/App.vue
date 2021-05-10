<template>
  <a-scene>
    <a-entity
      geometry="primitive:box;"
      material="shader:gif;src:url(https://media2.giphy.com/media/l0MYrDjuf8DN9lcWY/giphy.gif?cid=790b7611cdf820a1931f7e9dcee325ddde4784f0ea8b78de&rid=giphy.gif&ct=g);color:green;opacity:.8"
    ></a-entity>
  </a-scene>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
