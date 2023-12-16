// 封装分类数据业务相关代码
import { getTopCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router'

const useCategory = () => {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => {
        getCategory()
    })
    // 使用onMounted这样的方法有一个问题，每次点击必须刷新才能更新页面
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}

export {
    useCategory
}