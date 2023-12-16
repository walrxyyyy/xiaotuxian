// 封装banner轮播图相关的业务代码
import { getBannerAPI } from '@/apis/home'
import { onMounted } from 'vue'
import { ref } from 'vue'

const useBanner = () => {
    // 轮播图方法
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerAPI()
        bannerList.value = res.result
    }

    onMounted(() => {
        getBanner()
    })
    return {
        bannerList
    }
}

export {
    useBanner
}
