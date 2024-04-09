<template>
  <header>
    <img alt="Tyler's Headshot" class="headshot" src="@/assets/viewphotos/headshot-one.jpg" />

    <div class="wrapper">
      <div class="greetings">
        <h1 class="blue">Hey, I'm Tyler. Let me introduce you to myself!</h1>
        <h3>
          <Quotes />
        </h3>
      </div>

      <!-- Hamburger menu button -->
      <button class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Apply active class when menuActive is true -->
      <nav :class="{ active: menuActive }">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Who I Am</RouterLink>
        <RouterLink to="/projects">My Projects</RouterLink>
        <RouterLink to="/workhistory">Work History</RouterLink>
        <RouterLink to="/currentupdates">Current Happenings</RouterLink>
        <RouterLink to="/webwarlocks">Web Warlocks</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer>
    <FooterBlock />
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Quotes from './components/QuoteAPI.vue'
import FooterBlock from './components/FooterBlock.vue'
import { ref } from 'vue'

const menuActive = ref(false)

function toggleMenu() {
  menuActive.value = !menuActive.value
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.headshot {
  display: block;
  margin: 0 auto 2rem;
  margin-right: 64px;
  border-radius: 30px;
  height: 400px;
  width: auto;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:hover {
  background-color: silver;
}

nav a:first-of-type {
  border: 0;
}

.hamburger {
  padding-top: 20px;
  justify-content: center;
  margin: auto;
  display: none; /* Initially hide the hamburger button */
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 75px;
  height: 5px;
  background-color: #006db0;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

/* Media query for screens smaller than or equal to 1247px */
@media screen and (max-width: 1247px) {
  .headshot {
    height: 300px;
    width: auto;
    margin: 0 auto 2rem; /* Center the image horizontally */
  }

  .hamburger {
    display: block; /* Display the hamburger button */
  }

  nav {
    display: none; /* Hide the navigation by default */
  }

  nav.active {
    display: block; /* Ensure navigation is visible when active */
    height: 215px;
  }

  /* Style for individual navigation links when nav is active */
  nav.active a {
    display: block; /* Ensure each link occupies full width */
    padding: 5px; /* Adjust padding as needed */
    border: none; /* Remove borders */
    font-size: 16px;
  }
}

@media (min-width: 1248px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
