//封装分类数据业务相关代码
import { ref, onMounted } from "vue";
import { getCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";
import {onBeforeRouteUpdate} from 'vue-router'
export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };
  onMounted(() => {
    getCategory();
  });

  //期望路由参数变化时，可以吧分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    //存在问题：使用最新的路由参数请求最新的数据分类
    getCategory(to.params.id);
  });
  return {categoryData}
}
