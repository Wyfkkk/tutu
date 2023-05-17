//管理用户相关
import {defineStore} from 'pinia'
import {ref} from 'vue'
import {loginAPI} from '@/apis/user.js'
export const useUserStore = defineStore('user',()=>{
  //1.定义管理数据的state
  const userInfo = ref({})
  //2.定义获取接口数据的action
  const getUserInfo = async({account,password})=>{
    const res =await loginAPI({account,password})
    userInfo.value = res.result
  }
  //退出时清除我们的用户信息
  const clearUserInfo = ()=>{
    userInfo.value = {}
  }
  //3 一对象的格式吧state和action return
  return {userInfo,getUserInfo,clearUserInfo}
},{persist:true})