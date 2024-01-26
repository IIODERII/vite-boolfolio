<template>
  <div class="container">
    <div class="my-3">
      <router-link class="btn btn-secondary" :to="{ name: 'projects' }"
        ><i class="fa-solid fa-arrow-left"></i
      ></router-link>
    </div>
    <h1>{{ project.title }}</h1>
    <h3>Descrizione</h3>
    <p>{{ project.description }}</p>
    <img
      class="w-50"
      :src="store.imageBasePath + project.image"
      :alt="project.title"
    />
    <h3 class="pt-4">Tecnologie utilizzate:</h3>
    <ul class="d-flex list-unstyled">
      <li class="fs-2 me-3" v-for="technology in project.technologies">
        <i :class="technology.icon"></i>
      </li>
    </ul>
    <h3>Categoria del progetto</h3>
    <p v-if="project.category">{{ project.category.name }}</p>

    <router-link
      class="btn btn-primary"
      :to="{ name: 'single-project', params: { slug: 'boolflix' } }"
      >Boolflix</router-link
    >
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store.js";
export default {
  name: "SingleProject",
  data() {
    return {
      project: {},
      store,
    };
  },
  methods: {
    getProject() {
      axios
        .get(store.apiUrl + "projects/" + this.$route.params.slug)
        .then((response) => {
          //console.log(response.data.data);
          this.project = response.data.data;
          //console.log(this.project);
        });
    },
  },
  created() {
    this.getProject();
  },
};
</script>

<style lang="scss" scoped></style>
