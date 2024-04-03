import './assets/main.css'
//in your `main.js` file
import '../node_modules/flowbite-vue/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import necessary FontAwesome components and icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate, faLaptopCode, faBriefcase, faSatellite, faHatWizard } from '@fortawesome/free-solid-svg-icons';

// Add the FontAwesome icons to the library
library.add(faUserGraduate, faLaptopCode, faBriefcase, faSatellite, faHatWizard);

const app = createApp(App)

// Register the FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')
