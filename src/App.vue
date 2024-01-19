<template>
  <ul>
    <li v-for="project in projects" @click="getProjectLinks(project)">
      {{ project.data.title }}
      <span v-for="technology in project.technologies"
        ><i :class="technology.icon" class="fs-3 ms-2"></i
      ></span>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import { store } from "./store";
export default {
  name: "App",
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
        response.data.data.forEach((item) => {
          this.projects.push({
            data: item,
            technologies: [],
          });
          //console.log(this.projects[index]);
        });
      });
      console.log(this.projects);
    },
    getProjectLinks(project) {
      //console.log(slug);
      axios
        .get(store.apiUrl + "projects/" + project.data.slug)
        .then((response) => {
          // console.log(response.data.data);
          project.technologies = response.data.data.technologies;
          console.log(project.technologies);
        });
    },
  },
  mounted() {
    this.getAllProjects();
  },
};
</script>

<style lang="scss" scoped></style>
