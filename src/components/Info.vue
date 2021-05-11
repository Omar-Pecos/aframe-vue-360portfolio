<template>
  <!-- Plane Info -->
  <a-plane
    id="plane-info"
    material="color:black;"
    position="0 3 -0.5"
    height="2"
    width="2"
    :opacity="!loading && !displayInfo ? 0 : 1"
  >
    <a-troika-text
      v-if="loading"
      font-size="0.05"
      max-width="0.5"
      position="0 0 0.2"
      align="center"
      outline-width="5%"
      outline-color="violet"
      value="\n Loading ... \n"
    ></a-troika-text>

    <a-troika-text
      v-if="displayInfo"
      font-size="0.05"
      max-width="0.5"
      position="0 0.12 0.2"
      align="center"
      outline-width="5%"
      outline-color="violet"
      value="Omar Pecos 3D Portfolio \n"
    ></a-troika-text>
    <a-troika-text
      v-if="displayInfo"
      font-size="0.03"
      max-width="0.4"
      position="0 -0.05 0.2"
      align="center"
      outline-width="5%"
      outline-color="black"
      value="1. Hover spheres to see description \n 2. Leave sphere and hover it again to close description \n 3. Hover color boxes to go to project url \n 4. Hover GitHub logo to go to repository url"
    ></a-troika-text>
  </a-plane>
</template>

<script>
export default {
  props: {
    displayInfo: Boolean,
    loading: Boolean,
  },
};
</script>

<style></style>
