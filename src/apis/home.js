// 引入axios实例
import { httpInstance } from '@/utils/http'
// 封装方法
const getBannerAPI = (params = {}) => {
    // 默认为1  商品为2
    const { distributionSite = 1 } = params
    return httpInstance({
        method: 'get',
        url: 'home/banner',
        params:{
            distributionSite
        }
    })
}
// 获取新鲜好物数据接口
const getNewAPI = () => {
    return httpInstance({
        method: 'get',
        url: 'home/new'
    })
}
// 获取人气推荐数据接口
const getHotAPI = () => {
    return httpInstance({
        method: 'get',
        url: 'home/hot'
    })
}
// 获取所有商品数据接口
const getGoodsAPI = () => {
    return httpInstance({
        method: 'get',
        url: 'home/goods'
    })
}
// 导出方法
export {
    getBannerAPI,
    getNewAPI,
    getHotAPI,
    getGoodsAPI
}