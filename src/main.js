// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//引入默认样式
import '@/styles/common.scss'
import App from './App.vue'
import router from './router/index'
//引入懒加载指令插件并且注册
import {lazyPlugin} from '@/directives/index'
import {componentPlugin} from '@/components/index'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
