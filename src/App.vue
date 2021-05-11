<template>
  <a-scene background="color: #ECECEC;">
    <Assets :projects="projects" />
    <LayoutCircle
      :projects="projects"
      :onClickSphere="onClickSphere"
      :onClickLink="onClickLink"
      :loading="loading"
      :radius="radius"
    />
    <!-- sky -->
    <a-sky src="#sky"></a-sky>
    <Camera :description="description" />
    <TypesSelector :onClickType="onClickType" />
    <Info :loading="loading" :displayInfo="displayInfo" />
  </a-scene>
</template>

<script>
//Env
import { environment } from "./util.js";
const { apiUrl, myAccountPass } = environment;
// Vue
import { ref, onMounted, watch, computed } from "vue";
// Components
import Assets from "./components/Assets";
import LayoutCircle from "./components/LayoutCircle";
import Camera from "./components/Camera";
import TypesSelector from "./components/TypesSelector";
import Info from "./components/Info";

export default {
  name: "App",
  components: {
    Assets,
    LayoutCircle,
    Camera,
    TypesSelector,
    Info,
  },
  setup() {
    // refs
    const loading = ref(true);
    const displayInfo = ref(false);

    const description = ref("");
    const projectIdDisplayed = ref(null);
    const projects = ref([]);
    const projectsAll = ref([]);

    // computed
    const radius = computed(() => {
      let r = (10 * projects.value.length) / projectsAll.value.length;
      if (r < 5) {
        return 5;
      } else if (r === 10) {
        return 10;
      } else {
        return r + 2;
      }
    });

    // methods
    const onClickSphere = (index) => {
      const project = projects.value[index];
      if (description.value && projectIdDisplayed.value === project._id) {
        description.value = "";
        projectIdDisplayed.value = null;
      } else {
        description.value = project.description;
        projectIdDisplayed.value = project._id;
      }
    };

    const onClickType = (type) => {
      if (type !== "all") {
        projects.value = projectsAll.value.filter(
          (project) => project.type === type
        );
      } else {
        projects.value = projectsAll.value;
      }
    };

    const onClickLink = (url) => {
      window.open(url, "_blank");
    };

    // onMounted hook
    onMounted(async () => {
      try {
        const resLogin = await fetch(apiUrl + "api/auth/login", {
          method: "POST",
          body: JSON.stringify({
            email: "o@o.com",
            password: myAccountPass,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const {
          data: { token },
        } = await resLogin.json();

        const resProjects = await fetch(apiUrl + "api/projects", {
          headers: {
            Authorization: token,
          },
        });

        const { data } = await resProjects.json();

        projectsAll.value = data;
        projects.value = data;
        loading.value = false;
      } catch (error) {
        console.log(error);
      }
    });

    // watch
    watch(loading, () => {
      displayInfo.value = true;
      setInterval(() => {
        displayInfo.value = false;
      }, 10000);
    });

    // return data to view
    return {
      projects,
      description,
      loading,
      displayInfo,
      radius,
      onClickSphere,
      onClickType,
      onClickLink,
    };
  },
};
</script>

<style></style>
