import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/css/styles.min.css'
import './assets/bootstrap/img/brainstorm-sheep.svg'
import './assets/bootstrap/js/bootstrap.min.js'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
