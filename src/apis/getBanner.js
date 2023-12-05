import {httpInstance} from '@/utils/http'

const getBannerAPI=()=>{
    return httpInstance({
        method:'get',
        url:'home/banner'
    })
}

export {
    getBannerAPI
}