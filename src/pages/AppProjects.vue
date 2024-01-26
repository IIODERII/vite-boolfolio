<template>
  <main class="container">
    <LoadingComponent v-show="loading" />
    <div class="d-flex align-items-center justify-content-between">
      <h1>Projects</h1>
      <div>
        <select
          v-model="selectedCategory"
          @change="getProjectsByCategory"
          class="form-select"
          name="category"
          id="category"
        >
          <option value="all">Tutte le categorie</option>
          <option
            v-for="category in store.allCategories"
            :key="category.slug"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div v-for="project in projects" class="col-12 col-md-4 col-lg-3">
        <AppCard :project="project" />
      </div>
    </div>
  </main>
</template>

<script>
import LoadingComponent from "../components/LoadingComponent.vue";
import axios from "axios";
import { store } from "../store.js";
import AppCard from "../components/AppCard.vue";
export default {
  name: "AppProjects",
  components: {
    AppCard,
    LoadingComponent,
  },
  data() {
    return {
      store,
      projects: [],
      selectedCategory: "all",
      loading: false,
    };
  },
  methods: {
    getAllProjects() {
      this.loading = true;
      axios.get(store.apiUrl + "projects").then((response) => {
        //console.log(response.data);
        this.projects = response.data.data;
        this.loading = false;
      });
    },
    getProjectsByCategory() {
      this.loading = true;
      if (this.selectedCategory == "all") {
        this.getAllProjects();
      } else {
        axios
          .get(store.apiUrl + "projects", {
            params: { category: this.selectedCategory },
          })
          .then((response) => {
            this.projects = response.data.data;
            this.loading = false;
          });
      }
    },
    getAllCategories() {
      if (store.allCategories.length < 1) {
        axios.get(store.apiUrl + "categories").then((response) => {
          // console.log(response.data.data);
          store.allCategories = response.data.data;
        });
      }
    },
  },
  mounted() {
    this.getAllProjects();
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped></style>
