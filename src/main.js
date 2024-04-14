import { createApp } from 'vue'
import App from "./App"
import Main from "@/components/Main"
import Auth from "@/components/Auth"
import components from './components/index'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    routes: [{
        path: '/',
        component: Main
    }, {
        path: "/login",
        component: Auth
    }],
    history: createWebHistory()
  })

const app = createApp(App)

components.forEach(element => {
    app.component(element.name, element)
});

app.use(router)

app.mount('#app')
