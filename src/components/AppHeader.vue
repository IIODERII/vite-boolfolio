<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li v-for="link in links" class="nav-item">
              <router-link :to="{ name: link.name }" class="nav-link active">{{
                link.label
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      links: [
        {
          name: "home",
          label: "Home",
        },
        {
          name: "projects",
          label: "Projects",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
