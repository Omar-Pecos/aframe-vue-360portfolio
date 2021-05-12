<template>
  <!-- Plane Info -->
  <a-plane
    v-if="loading || displayInfo"
    id="plane-info"
    material="color:black;"
    position="0 0 -1.5"
    height="5"
    width="5"
    :opacity="!loading && !displayInfo ? 0 : 1"
  >
    <a-troika-text
      v-if="loading"
      font-size="0.2"
      max-width="1"
      position="0 0 0.2"
      align="center"
      outline-width="5%"
      outline-color="violet"
      value="\n Loading ... \n"
    ></a-troika-text>

    <a-troika-text
      v-if="displayInfo"
      :font-size="0.08"
      :max-width="maxWidth"
      :position="`0 ${maxWidth / 10} 0.2`"
      align="center"
      outline-width="5%"
      outline-color="black"
      value="1. Hover spheres to see description \n 2. Leave sphere and hover it again to close description \n 3. Hover color boxes to go to project url \n 4. Hover GitHub logo to go to repository url"
    ></a-troika-text>
  </a-plane>
</template>

<script>
import { useMaxWidthFactor } from "../util";

export default {
  props: {
    displayInfo: Boolean,
    loading: Boolean,
  },
  setup() {
    const { maxWidth } = useMaxWidthFactor(1);

    return { maxWidth };
  },
};
</script>

<style></style>
