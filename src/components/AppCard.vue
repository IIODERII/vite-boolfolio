<template>
  <div class="card">
    <img :src="store.imageBasePath + project.image" :alt="project.title" />
    <h3 class="m-0 py-2">{{ project.title }}</h3>
    <div class="py-2">
      <i
        v-for="technology in technologies"
        :class="technology.icon"
        class="fs-3 ms-2"
      ></i>
    </div>
    <router-link
      class="btn btn-primary"
      :to="{ name: 'single-project', params: { slug: project.slug } }"
      >Visita il progetto</router-link
    >
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "AppCard",
  props: ["project"],
  data() {
    return {
      store,
      technologies: [],
    };
  },
  methods: {
    getProjectTechologies() {
      axios
        .get(store.apiUrl + "projects/" + this.project.slug)
        .then((response) => {
          // console.log(response.data.data);
          this.technologies = response.data.data.technologies;
          //console.log(project.technologies);
        });
    },
  },
  mounted() {
    this.getProjectTechologies();
  },
};
</script>

<style lang="scss" scoped></style>
