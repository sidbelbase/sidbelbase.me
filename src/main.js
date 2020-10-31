import App from './app.vue'
import router from './router'
import { createApp } from 'vue'
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import scrollto from 'vue-scrollto';

// Create Vue application
const app = createApp(App)

// Use router
app.use(router)
app.use(scrollto)
// Mount Vue application
app.mount('#app')