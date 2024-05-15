<template>
  <div>
    <CredLarge v-if="isLargeScreen" />
    <CredSmall v-else />
  </div>
  <div class="bio">
    <p>
      Certified full stack developer interested in professional opportunities that allow me to
      expand my technical knowledge. In the past I have been in the hopsitality and sales
      industries, but am looking to start a new career chapter. I am a graduate from UC Berkeley's
      Full Stack Web Development Certification Program. A strong team player with great applied
      skills, clear communication, soft skills, and an excellent work ethic.
    </p>
    <br />
    <p>
      From a young age I was taught to work and to excel. My first job was detassling corn. If you
      don't know what that is, it's walking through corn fields removing the tassel at the very top
      of the plant to prevent unwanted pollination. Over the years I worked on the farm, as a
      lifeguard in the summers, and various grocery store positions in the winters. I was all about
      learning new jobs. I graduated from the University of Nebraska at Lincoln in 2011 with a
      double degree in Finance and Economics. At school I took a variety of classes based around
      math and science to appease my ticking brain.
    </p>
    <br />
    <p>
      I initially started in the hopsitality industry. Here I worked with people on vacation,
      homeowners, HOA's, and local management. I developed several important skills such as strong
      communication skills, patience & empathy, conflict resolution, teamwork, time management, and
      attention to detail. You must be professional at all times and know how to communicate
      effectively with everyone.
    </p>
    <br />
    <p>
      Next up I entered the sales industry. This is all about connecting a consumer with the desired
      product or service they want. You learn to how to show the value of what you offer, negotiate,
      and problem-solve. Skills learned here include product knowledge, sales techniques &
      strategies, goal-oriented mindset, persistence and resilience. You create and maintain a loyal
      relationship between the consumer and provider.
    </p>
    <br />
    <p>
      My last stop in the career world before the turn to tech was in the resort industry. I worked
      as a snowmaker and groomer for Keystone and Palisades Tahoe. This was a job that was all about
      reliability and science. The right environment to create snow and then the mechanical aspect
      of grooming or "putting down courduroy." From here I started studying code and researching my
      next field as a web developer.
    </p>
    <br />
    <p>
      If you want to become a professional developer you will need to put in time at the keyboard.
      Coding is the act of automating things, thus it is by definition the last career that will be
      completely automated. There is a clear career progression ahead of you: senior developer, tech
      lead, engineering manager, CTO. If you make learning a continuous commitment, you’ll get
      experience. Learning to code is a life-long process. There are constantly new tools to learn,
      new legacy codebases to map out, and new problems to solve. You will need to get good at
      self-teaching.
    </p>
  </div>
  <br />
  <div>
    <fwb-accordion flush class="skillHeader">
      <fwb-accordion-panel>
        <fwb-accordion-header>front-end skills.</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <ul class="frontend">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive design</li>
              <li>React</li>
              <li>Vue3 Framework</li>
              <li>CSS Processor: Tailwind</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>back-end skills.</fwb-accordion-header>
        <fwb-accordion-content>
          <div>
            <ul class="backend">
              <li>API & RESTful API</li>
              <li>node.JS</li>
              <li>Express</li>
              <li>Model View Controller (MVC)</li>
              <li>Progressive Web Applications (PWA)</li>
            </ul>
          </div>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>database skills.</fwb-accordion-header>
        <fwb-accordion-content>
          <ul class="database">
            <li>mySQL</li>
            <li>Sequelize</li>
            <li>noSQL</li>
            <li>MongoDB / Atlas</li>
            <li>Mongoose</li>
            <li>graphQL</li>
          </ul>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>soft skills.</fwb-accordion-header>
        <fwb-accordion-content>
          <ul class="soft">
            <li>Strong Communication Skills</li>
            <li>Patience and Empathy</li>
            <li>Conflict Resolution</li>
            <li>Time Management</li>
            <li>Product Knowledge</li>
            <li>Sales Techniques and Strategies</li>
            <li>Goal-Oriented Mindset</li>
            <li>Persistence and Resilience</li>
            <li>Analytical and Critical Thinking</li>
            <li>Attention to Detail</li>
            <li>Decision-Making</li>
            <li>Creativity</li>
          </ul>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CredLarge from '../components/CredentialsLarge.vue'
import CredSmall from '../components/CredentialsSmall.vue'

import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel
} from 'flowbite-vue'

const isLargeScreen = ref(false)

// Function to check screen size
function checkScreenSize() {
  isLargeScreen.value = window.innerWidth >= 915
}

// Mount and unmount listeners
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<style>
.bio {
  margin-top: 2em;
  font-size: medium;
  font-weight: 500;
  background: linear-gradient(125deg, #006db0 2%, rgb(32, 32, 32) 35%, rgba(24, 24, 24, 1) 45%);
  padding: 1em;
  border-radius: 2%;
}

.skillHeader {
  font-size: 24px;
  width: 90%;
  margin: auto;
}

.frontend,
.backend,
.database,
.dev,
.soft {
  text-align: center;
}
</style>
