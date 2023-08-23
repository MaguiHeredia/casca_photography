import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
// Importa los componentes que usarás como rutas
import Home from './components/FirstView.vue';
import About from './components/AboutView.vue';
import Contact from './components/ContactView.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  const app = createApp(App);
  app.use(router)
  app.use(VueSweetalert2)
  app.mount('#app');