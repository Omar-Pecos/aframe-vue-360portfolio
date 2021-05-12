<template>
  <!-- Cam -->
  <a-entity id="cam" position="0 3 0" camera look-controls>
    <a-entity
      cursor="fuse: true; fuseTimeout: 500"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.005; radiusOuter: 0.02"
      material="color: #23d987; shader: flat"
    >
    </a-entity>

    <Info :loading="loading" :displayInfo="displayInfo" />

    <!-- Text description -->
    <a-entity position="0 0 -1">
      <a-troika-text
        align="center"
        font-size="0.05"
        :max-width="maxWidth"
        position="0 0 0.2"
        :fill-opacity="description !== '' ? 1 : 0"
        :value="description"
      ></a-troika-text>
    </a-entity>
  </a-entity>
</template>

<script>
import Info from "./Info";
import { useMaxWidthFactor } from "../util";
export default {
  props: {
    description: String,
    loading: Boolean,
    displayInfo: Boolean,
  },
  components: {
    Info,
  },
  setup() {
    const { maxWidth } = useMaxWidthFactor(0.5);
    /*  const screenWidth = ref(screen.width);
    const widthDefault = 0.5;

    window.addEventListener("resize", () => {
      screenWidth.value = screen.width;
    });

    const maxWidth = computed(() => {
      let orientation = screen.orientation;

      if (screenWidth.value < 370) {
        return widthDefault;
      } else {
        let width = (widthDefault * screenWidth.value) / 370;

        if (
          orientation.type === "landscape-primary" ||
          orientation.type === "landscape-secondary"
        ) {
          console.log("PORTRAIT > ", orientation);
          return width * 2;
        } else {
          return width;
        }
      }
    });
*/
    return { maxWidth };
  },
};
</script>

<style></style>
