import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入默认样式
import '@/styles/common.scss'
import App from './App.vue'
import router from './router/index'
 import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
//定义全局指令
app.directive('img-lazy',{
  mounted(el,binding){
    //el代表指令绑定的元素  img
    //binding:bingding.value 指令等于号后面绑定的表达式的值
    console.log(el,binding.value);
    useIntersectionObserver(
      el,
      ([{isIntersecting}]) => {
        console.log(isIntersecting);
        if(isIntersecting){
          //进入视口1区域
          el.src = binding.value
        }
      }
    )
  }
})