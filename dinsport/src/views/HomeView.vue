<template>
  <main class="centered-container">
    <HomeFrame>
      <template #icon>
        <AboutIcon />
      </template>
      <template #heading>About Me.</template>

      Here you will find a short<RouterLink to="/about" style="color: #006db0"
        >auto-biography</RouterLink
      >about who I am. A brief from when I was young up until recent.
    </HomeFrame>

    <HomeFrame>
      <template #icon>
        <ProjectIcon />
      </template>
      <template #heading>My Projects.</template>

      Look at some of the
      <RouterLink to="/projects" style="color: #006db0">applications</RouterLink> I have built. From
      basic entry level ones, to large intricate projects! This portfolio is built using<a
        href="https://vuejs.org/"
        target="_blank"
        style="color: #006db0"
        >Vue.js,</a
      ><a href="https://flowbite.com/" target="_blank" style="color: #006db0">Flowbite,</a
      ><a href="https://rapidapi.com/" target="_blank" style="color: #006db0">APIs,</a>and more.
    </HomeFrame>

    <HomeFrame>
      <template #icon>
        <WorkIcon />
      </template>
      <template #heading>Work History & Resume.</template>

      View my<a :href="ResumePDF" style="color: #006db0" target="_blank">Resume,</a
      ><a :href="UNLDegree" style="color: #006db0" target="_blank">Degree,</a> and<a
        :href="CertificatePDF"
        style="color: #006db0"
        target="_blank"
        >Certificate</a
      >here. Or read about a variety of jobs I have worked throughout my life. It has helped me gain
      all these<RouterLink to="/workhistory" style="color: #006db0">skills.</RouterLink>
    </HomeFrame>

    <HomeFrame>
      <template #icon>
        <CurrentIcon />
      </template>
      <template #heading>Current Updates.</template>

      Curious about what I am up to? Check out some<RouterLink
        to="/currentupdates"
        style="color: #006db0"
        >updates</RouterLink
      >including posts, photos, and music I am listening to right now. Or view my<a
        href="https://github.com/tylerdins88"
        style="color: #006db0"
        target="_blank"
        rel="noopener noreferrer"
        >Github</a
      >or<a
        href="https://www.linkedin.com/in/tyler-dinslage-profile/"
        style="color: #006db0"
        target="_blank"
        rel="noopener noreferrer"
        >LinkedIn</a
      >for more details.
    </HomeFrame>

    <HomeFrame>
      <template #icon>
        <WizardIcon />
      </template>
      <template #heading>Web Warlocks.</template>
      Web development<RouterLink to="/webwarlocks" style="color: #006db0">partnership.</RouterLink
      >View the websites we are building, maintaining, and continually improving.
    </HomeFrame>
  </main>
</template>

<script setup lang="ts">
import HomeFrame from '../components/frames/HomeFrame.vue'
import AboutIcon from '../components/icons/IconAbout.vue'
import ProjectIcon from '../components/icons/IconProjects.vue'
import WorkIcon from '../components/icons/IconWork.vue'
import CurrentIcon from '../components/icons/IconCurrent.vue'
import WizardIcon from '../components/icons/IconWizard.vue'

import ResumePDF from '../assets/tyler-dinslage-resume.pdf'
import UNLDegree from '../assets/UNL-Degree.pdf'
import CertificatePDF from '../assets/UC-Berkeley-Extension-Certificate.pdf'
</script>

<style>
.centered-container {
  width: 80%;
  margin-left: 10%;
}
</style>
