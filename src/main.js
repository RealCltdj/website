// import './assets/main.css'

// Import SCSS styles
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import all icons
import * as fa_free_solid from '@fortawesome/free-solid-svg-icons'
import * as fa_free_regular from '@fortawesome/free-regular-svg-icons'
import * as fa_free_brands from '@fortawesome/free-brands-svg-icons'

[...Object.entries(fa_free_solid), ...Object.entries(fa_free_regular), ...Object.entries(fa_free_brands)].forEach(([name, module]) => {try {library.add(module)} catch {console.log(`failed to load icon: ${name}`)}})
*/

// import specific icons
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to library */
library.add(faUserSecret, faYoutube)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
