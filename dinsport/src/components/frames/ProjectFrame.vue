<template>
  <div class="projectFrame">
    <img class="projectImage" :src="project.image" alt="Project Image" />
    <h3 class="projectTitle">{{ project.title }}</h3>
    <p class="projectDescrip">{{ project.description }}</p>
    <div class="links">
      <a :href="project.githubLink" target="_blank">GitHub Repo</a>
      <a v-if="project.deployedLink" :href="project.deployedLink" target="_blank">Deployed Page</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.projectFrame {
  border: 1px solid #006db0;
  border-radius: 15px;
  padding: 16px;
  margin-top: 30px;
  text-align: center;
  width: 400px;
  display: inline-block;
}

.projectFrame:hover {
  box-shadow:
    0 8px 16px 0 rgba(0, 109, 176),
    0 12px 40px 0 rgba(0, 109, 176);
  transform: scale(1.01);
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}

.projectImage {
  display: inline;
  height: 240px;
  width: 240px;
  border: 1px solid silver;
  border-radius: 10px;
  margin-top: 12p;
}

.projectTitle {
  font-size: 32px;
  border-bottom: 1px solid #006db0;
  padding-top: 20px;
}

.projectDescrip {
  padding-top: 20px;
  height: 90px;
}

.links {
  margin-top: 10px;
}

a {
  margin-right: 10px;
}

.projectFrame a:hover {
  background-color: silver;
}

@media (min-width: 860px) {
  .projectFrame {
    margin-top: 30px;
    margin: 20px;
  }
}
</style>
