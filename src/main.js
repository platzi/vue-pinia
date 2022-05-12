import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import { Icon } from '@iconify/vue';
import { main } from '@/core/auth.js'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component("Icon", Icon)

main()

app.mount('#app')
