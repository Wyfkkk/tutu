//把components中所有组件全局化注册
//通过插件的方式
import imageView from './imageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
  install (app) {
    //app.component('组件名',组件配置对象)
    app.component('XtxImageView', imageView)
    app.component('XtxSku', Sku)
  }
}