<template>
  <div>
    <h1>{{ project.title }}</h1>
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
