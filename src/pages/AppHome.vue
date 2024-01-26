<template>
  <div>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 7000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper w-100 h-100"
    >
      <swiper-slide v-for="project in projects">
        <img
          class="w-100 h-100"
          :src="store.imageBasePath + project.image"
          :alt="project.title"
        />
        <div class="project-text">
          <div class="text-center">
            <h3>{{ project.title }}</h3>
            <p class="my-3">{{ project.description }}</p>
            <router-link
              class="btn btn-primary"
              :to="{ name: 'single-project', params: { slug: project.slug } }"
              >Visita la pagina</router-link
            >
          </div>
        </div>
      </swiper-slide>

      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </div>
</template>

<script>
import { store } from "../store.js";
import axios from "axios";
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
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
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty("--progress", 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  mounted() {
    this.getAllProjects();
  },
};
</script>

<style lang="scss" scoped>
.project-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  div {
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
  }
}
.swiper {
  width: 100%;
  height: 100%;
  min-height: 80vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
