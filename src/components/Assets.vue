<template>
  <!-- Assets -->
  <a-assets timeout="15000">
    <img
      v-for="project in projects"
      :id="`id${project._id}`"
      :key="`id${project._id}`"
      :src="project.images[0] || require(`@/assets/images/api.png`)"
      crossorigin="anonymous"
    />
    <img id="github" src="../assets/images/github.png" />
    <img id="sky" src="../assets/images/360violetsky.jpeg" />
  </a-assets>
</template>

<script>
export default {
  props: {
    projects: Array,
  },
};
</script>

<style></style>
