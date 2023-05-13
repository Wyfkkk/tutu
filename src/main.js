import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入默认样式
import '@/styles/common.scss'
import App from './App.vue'
import router from './router/index'
//引入懒加载指令插件并且注册
import {lazyPlugin} from '@/directives/index'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
