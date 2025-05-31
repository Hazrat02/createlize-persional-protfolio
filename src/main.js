import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from 'vue3-particles';

import App from './App.vue'
import router from './router'
import {setloading,isLoading} from './utils/extra.js';
import animationDirective from './utils/animation.js';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Particles);
app.directive('animate', animationDirective);

app.config.globalProperties.$setLoading = setloading;
app.config.globalProperties.$isLoading = isLoading;

app.mount('#app')
