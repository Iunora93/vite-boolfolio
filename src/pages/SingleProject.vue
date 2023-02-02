<template>
    <div v-if="project">
      <h1>{{ project.title }}</h1>
      <p>{{ project.content }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "SingleProject",
    data() {
      return {
        project: null,
      };
    },
    created() {
      axios
        .get(`http://localhost:8000/api/projects/${this.$route.params.slug}`)
.then((response) => {
          this.project = response.data;
        })
        .catch((err) => {
          console.log(err);
          this.$router.push({ name: "page-404" });
          // if (err.response.status === 404) {
          // }
        });
    },
  };
  </script>
  
  <style lang="scss" scoped></style>