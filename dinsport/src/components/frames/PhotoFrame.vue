<template>
  <div class="lineUp">
    <p class="date">{{ photo.date }}</p>
    <div class="photoFrame">
      <div class="photoContent">
        <div v-html="photo.thoughts"></div>
      </div>
      <img class="photoImage" :src="photo.image" alt="Updates Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    photo: Object
  }
}
</script>

<style scoped>
.lineUp {
  display: flex;
}
.date {
  height: 30px;
  font-size: 16px;
  border-bottom: 1px solid #006db0;
}
.photoFrame {
  border: 1px solid #006db0;
  border-radius: 15px;
  padding: 16px;
  width: 80%;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.photoFrame:hover {
  box-shadow:
    0 8px 16px 0 rgba(0, 109, 176),
    0 12px 40px 0 rgba(0, 109, 176);
  transform: scale(1.01);
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}
.photoContent {
  display: flex;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #006db0;
}

.photoImage {
  height: 300px;
  width: auto;
  border: 1px solid #006db0;
}
.photoFrame a:hover {
  background-color: silver;
}
@media screen and (max-width: 1040px) {
  .photoImage {
    max-height: 200px; /* Adjust height for smaller screens */
  }
}

@media screen and (max-width: 600px) {
  .photoImage {
    max-height: 150px; /* Adjust height for smaller screens */
  }
}
</style>
