<script>

export default {
  name: "ProjectCard",
  props:{
    data:Object,
  }

  
};
</script>

<template> 
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{data.types.name}}</h6>
            <p class="card-text">
                {{ data.content }}
            </p>
        </div>
    </div>  
</template>

<style lang="scss" scoped>

</style>