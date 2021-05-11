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

    <!-- Text description -->
    <a-entity position="0 0 -1">
      <a-troika-text
        align="center"
        font-size="0.05"
        max-width="1"
        position="0 0 0.2"
        :fill-opacity="description !== '' ? 1 : 0"
        :value="description"
      ></a-troika-text>
    </a-entity>
  </a-entity>
</template>

<script>
export default {
  props: {
    description: String,
  },
};
</script>

<style></style>
