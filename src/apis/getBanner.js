// 引入axios实例
import {httpInstance} from '@/utils/http'
// 封装方法
const getBannerAPI=()=>{
    return httpInstance({
        method:'get',
        url:'home/banner'
    })
}
// 导出方法
export {
    getBannerAPI
}