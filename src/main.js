import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Импортируйте хранилище Vuex

const app = createApp(App);
app.use(router);
app.use(store); // Используйте хранилище Vuex
app.mount('#app');
