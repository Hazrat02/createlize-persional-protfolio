import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {setloading,isLoading} from './utils/extra.js';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$setLoading = setloading;
app.config.globalProperties.$isLoading = isLoading;

app.mount('#app')
