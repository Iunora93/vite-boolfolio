<script>
import {store} from "../store";
import ProjectCard from "./ProjectCard.vue";
export default {
  name: "ProjectList",
  components: {
    ProjectCard,
  },

  data(){
    return{
      store
    }
  },
};
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-4" v-for="project in store.projects">
        <ProjectCard :data="project"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>