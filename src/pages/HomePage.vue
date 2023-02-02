<script>
import ProjectList from "../components/ProjectList.vue";
export default {
  name: "HomePage",
  components: {
    ProjectList,
  },
};
</script>

<template>
  <div class="container">
    <h2>Home Page</h2>
    <ProjectList />
  </div>
</template>

<style lang="scss" scoped></style>