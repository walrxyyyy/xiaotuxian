// 引入axios实例
import {httpInstance} from '@/utils/http'
// 封装方法
const getBannerAPI=()=>{
    return httpInstance({
        method:'get',
        url:'home/banner'
    })
}
// 获取新鲜好物数据接口
const getNewAPI=()=>{
    return httpInstance({
        method:'get',
        url:'home/new'
    })
}
// 获取人气推荐数据接口
const getHotAPI=()=>{
    return httpInstance({
        method:'get',
        url:'home/hot'
    })
}
// 导出方法
export {
    getBannerAPI,
    getNewAPI,
    getHotAPI
}