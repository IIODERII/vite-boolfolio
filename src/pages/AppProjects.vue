<template>
  <main class="container">
    <h1>Projects</h1>
    <div class="row">
      <div v-for="project in projects" class="col-12 col-md-4 col-lg-3">
        <AppCard :project="project" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { store } from "../store.js";
import AppCard from "../components/AppCard.vue";
export default {
  name: "AppProjects",
  components: {
    AppCard,
  },
  data() {
    return {
      store,
      projects: [],
    };
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + "projects").then((response) => {
        //console.log(response.data);
        this.projects = response.data.data;
      });
      console.log(this.projects);
    },
  },
  mounted() {
    this.getAllProjects();
  },
};
</script>

<style lang="scss" scoped></style>
