<template>
  <AppHeader />
  <router-view></router-view>
  <!-- <ul>
    <li v-for="project in projects" @click="getProjectLinks(project)">
      {{ project.data.title }}
      <span v-for="technology in project.technologies"
        ><i :class="technology.icon" class="fs-3 ms-2"></i
      ></span>
    </li>
  </ul> -->
</template>

<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: { AppHeader },
};
</script>

<style lang="scss" scoped></style>
