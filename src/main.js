import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入默认样式
import '@/styles/common.scss'
import App from './App.vue'
import router from './router/index'
 
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
