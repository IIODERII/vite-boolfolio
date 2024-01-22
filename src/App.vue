<template>
  <AppHeader />
  <router-view class="route"></router-view>
  <!-- <ul>
    <li v-for="project in projects" @click="getProjectLinks(project)">
      {{ project.data.title }}
      <span v-for="technology in project.technologies"
        ><i :class="technology.icon" class="fs-3 ms-2"></i
      ></span>
    </li>
  </ul> -->
  <AppFooter />
</template>

<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  data() {
    return {
      store,
    };
  },
  components: { AppHeader, AppFooter },
};
</script>

<style lang="scss" scoped>
.route {
  min-height: 79.7vh;
}
</style>
