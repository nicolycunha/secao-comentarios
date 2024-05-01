import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-purple/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import timeago from 'vue-timeago3'

const app = createApp(App);
app.use(PrimeVue, {
    styled: true                       
});
app.use(timeago)

app.mount('#app');