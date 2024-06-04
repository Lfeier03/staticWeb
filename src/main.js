import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import {System} from "./stores/System.ts";
const pinia = createPinia();
const app = createApp(App)



app.use(router)
app.use(pinia)
/**初始化系统*/
System().init();

app.mount('#app')
