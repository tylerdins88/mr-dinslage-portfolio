<template>
  <div class="lineUp">
    <p class="date">{{ music.date }}</p>
    <div class="musicFrame">
      <div class="myThoughts">
        <p class="thoughts">{{ music.thoughts }}</p>
      </div>
      <div class="musicHeader">
        <img class="musicImage" :src="music.artwork" alt="music Image" />
        <div class="musicInfo">
          <h3 class="musicTitle">{{ music.title }}</h3>
          <div class="musicData">
            <p class="musicLength">Length: {{ music.duration }}</p>
            <div class="links">
              <a :href="music.permalink" target="_blank">Listen to the Set Here</a>
            </div>
          </div>
        </div>
      </div>
      <p class="musicDescrip">{{ music.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    music: {
      type: Object,
      required: true
    }
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

.musicFrame {
  border: 1px solid #006db0;
  border-radius: 15px;
  padding: 16px;
  width: 80%;
  margin-left: 20px;
  margin-bottom: 20px;
}

.musicFrame:hover {
  box-shadow:
    0 8px 16px 0 rgba(0, 109, 176),
    0 12px 40px 0 rgba(0, 109, 176);
  transform: scale(1.01);
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}

.myThoughts {
  display: flex;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #006db0;
}

.musicHeader {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #006db0;
}

.musicImage {
  height: 240px;
  width: auto;
  border: 1px solid silver;
  border-radius: 10px;
  margin-right: 12px;
}

.musicTitle {
  font-size: 32px;
}

.musicData {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
}

.musicLength {
  padding-right: 30px;
}

.musicFrame a:hover {
  background-color: silver;
}
@media screen and (max-width: 1040px) {
  .musicImage {
    max-height: 200px; /* Adjust height for smaller screens */
  }
}

@media screen and (max-width: 600px) {
  .lineUp {
    flex-direction: column;
  }
  .date {
    border: none;
    margin-left: 30px;
  }
  .musicFrame {
    width: 90%;
  }
  .musicHeader {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    justify-content: flex-start; /* Align items to the start */
  }
  .musicDescrip {
    display: none;
  }
}
</style>
