<template>
  <!-- Layout circle -->
  <a-entity
    :layout="`type: circle; radius: ${loading ? 10 : radius};`"
    position="0 2 0"
    rotation="-90 0 0"
  >
    <!-- Project -->
    <a-entity
      v-for="(project, index) in projects"
      :id="`id${project._id}`"
      look-at="#cam"
      :key="project._id"
    >
      <a-troika-text
        align="center"
        font-size="0.35"
        max-width="1.5"
        position="0 1.6 0.2"
        outline-width="5%"
        outline-color="black"
        :value="project.name"
      ></a-troika-text>

      <!-- Tipo gif -->
      <a-sphere
        @click="() => onClickSphere(index)"
        v-if="project.images.length && project.images[0].substr(-3) === 'gif'"
        animation="property: rotation; to: 0 270 330; loop:true; dur: 20000"
        radius="1"
        rotation="0 -90 -30"
        :material="`shader:gif;src:#id${project._id}`"
      ></a-sphere>

      <!-- Tipo image normal -->
      <a-sphere
        @click="() => onClickSphere(index)"
        v-else
        animation="property: rotation; to: 0 270 360; loop:true; dur: 10000"
        radius="1"
        rotation="0 -90 0"
        :repeat="project.images[0] ? '1 1' : '2 1'"
        :src="`#id${project._id}`"
      ></a-sphere>

      <!-- Box to Url -->
      <a-box
        v-if="project.url"
        :id="`link-${project._id}`"
        geometry="width:0.3;height:0.3;depth: 0.3"
        animation="property: rotation; to: 360 360 360; loop: true; dur: 5000"
        position="-0.3 -1.5 0"
        rotation="0 0 0"
        :color="setColor(project.type)"
        @click="() => onClickLink(project.url)"
      ></a-box>

      <!-- Box to Repo Url -->
      <a-sphere
        v-if="project.repo_url"
        :id="`link-${project._id}`"
        geometry="radius: 0.2"
        animation="property: position; to: 0.3 -1.4 0; loop: true; dur: 2000"
        position="0.3 -1.5 0"
        rotation="0 0 0"
        repeat="2 1"
        src="#github"
        @click="() => onClickLink(project.repo_url)"
      ></a-sphere>
    </a-entity>
  </a-entity>
</template>

<script>
import { setColorByType } from "../util";

export default {
  props: {
    projects: Array,
    loading: Boolean,
    radius: Number,
    onClickSphere: Function,
    onClickLink: Function,
  },
  setup() {
    const setColor = (type) => setColorByType(type);
    return { setColor };
  },
};
</script>

<style></style>
