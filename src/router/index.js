import {createRouter, createWebHashHistory} from 'vue-router';
import App from '@/App.vue';
import LoginScreen from "@/components/LoginScreen.vue";
import StartScreen from "@/components/StartScreen.vue";
import GameScreen from "@/components/GameScreen.vue";

const router = createRouter({
    mode: 'history',
    base: App,
   // history: createWebHistory(),
    history:createWebHashHistory(),
  routes: [
      {
          path: '/',
          name: 'index',
          components: {
              default:App,
              LoginScreen:LoginScreen,
              StartScreen:StartScreen,
              GameScreen:GameScreen,
          }
      }
  ]
})

export default router
