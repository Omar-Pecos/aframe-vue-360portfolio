<template>
  <div>
    <h1>{{ config.apiUrl }}</h1>
  </div>
</template>

<script>
import { environment } from "./util.js";
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const config = ref(environment);

    return { config };
  },
};
</script>

<style></style>
