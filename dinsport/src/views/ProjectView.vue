<template>
  <div class="projects-container">
    <project-frame v-for="(project, index) in projects" :key="index" :project="project" />
  </div>
</template>

<script>
import ProjectFrame from '../components/frames/ProjectFrame.vue'
import Sommelier from '../assets/projectphotos/american-sommelier.jpg'
import Inspiration from '../assets/projectphotos/inspirational-quote.jpg'
import SecondPor from '../assets/projectphotos/second-portfolio-thumb.png'
import Needle from '../assets/projectphotos/needle-junkeez.png'
import Aqua from '../assets/projectphotos/aquaDown.png'
import FavMus from '../assets/projectphotos/favorite-musician.jpeg'
import FirstPort from '../assets/projectphotos/first-portfolio.png'
import Booze from '../assets/projectphotos/booze-and-bed.png'
import Weather from '../assets/projectphotos/weather-dashboard.png'

export default {
  components: {
    ProjectFrame
  },
  data() {
    return {
      projects: [
        {
          title: 'American Sommelier',
          image: Sommelier,
          description:
            'A Wine Course and membership based website for a Sommelier, to be able to sell courses and content. Built with SquareSpace with my dev partner, Jesse Hudak.',
          githubLink: 'N/A',
          deployedLink: 'https://www.theamericansommelier.com/'
        },
        {
          title: 'Inspirational Quote',
          image: Inspiration,
          description:
            'Read some uplifting messages! This procject was built using Vue3, Vite, and an API.',
          githubLink: 'https://github.com/tylerdins88/inspirational-quote',
          deployedLink: 'https://tylerdins88.github.io/inspirational-quote/'
        },
        {
          title: 'Second Portfolio',
          image: SecondPor,
          description: 'This is an app built to showcase who I am. It was build with React.',
          githubLink: 'https://github.com/tylerdins88/my-react-portfolio',
          deployedLink: 'https://tylerdins88.github.io/my-react-portfolio/'
        },
        {
          title: 'Needle / Junkeez',
          image: Needle,
          description:
            'This is an app built to showcase my React skill set. It was a group project that uses React, Express, MongoDB, and Apollo.',
          githubLink: 'https://github.com/jhdk707/NeedleJunkies'
          // You can add a deployedLink if available
        },
        {
          title: 'aquaDown',
          image: Aqua,
          description:
            'This is an app built to showcase my back-end skill set. It was a group project that uses Node.js, Sequelize, MySQL, JavaScript, and Express.',
          githubLink: 'https://github.com/hngreenberg/aquaDown',
          deployedLink: 'https://aquadown.herokuapp.com/'
        },
        {
          title: 'Booze & Bed',
          image: Booze,
          description:
            'This is an app built to showcase my front-end skill set. It was made using HTML, CSS, JavaScript, and a third-party API. It uses Breweries API.',
          githubLink: 'https://github.com/tylerdins88/traveler-project',
          deployedLink: 'https://tylerdins88.github.io/traveler-project/'
        },
        {
          title: 'Weather Dashboard',
          image: Weather,
          description:
            'This is an app built to showcase using a third-party API. It uses OpenWeatherAPI.',
          githubLink: 'https://github.com/tylerdins88/weather-dashboard',
          deployedLink: 'https://tylerdins88.github.io/weather-dashboard/'
        },
        {
          title: 'First Portfolio',
          image: FirstPort,
          description:
            'This was the first portfolio I made at the beginning of my web development journey.',
          githubLink: 'https://github.com/tylerdins88/tyler-dins-portfolio',
          deployedLink: 'https://tylerdins88.github.io/tyler-dins-portfolio/'
        },
        {
          title: 'Favorite Musician',
          image: FavMus,
          description:
            'This was the first basic HTML webpage I built when learning how HTML works.',
          githubLink: 'https://github.com/tylerdins88/favorite-musician',
          deployedLink: 'https://tylerdins88.github.io/favorite-musician/'
        }
      ]
    }
  }
}
</script>

<style>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
