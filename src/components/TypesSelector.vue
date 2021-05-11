<template>
  <!-- Types -->
  <a-entity position="0 4 -2">
    <a-box
      v-for="(type, index) in types"
      :key="index"
      :position="`${posX + (index + 1) * 0.7} 0 0`"
      geometry="width:0.3;height:0.3;depth: 0.1"
      :color="setColor(type)"
      @click="() => onClickType(type)"
    >
      <a-text
        position="0 0.3 0"
        align="center"
        width="2.5"
        :value="type.toUpperCase()"
      >
      </a-text>
    </a-box>
  </a-entity>
</template>

<script>
import { setColorByType, types } from "../util";

export default {
  props: {
    onClickType: Function,
  },
  setup() {
    const posX = -2.8;
    const setColor = (type) => setColorByType(type);
    return { posX, types, setColor };
  },
};
</script>

<style></style>
