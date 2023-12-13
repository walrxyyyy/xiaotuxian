import {httpInstance} from '@/utils/http'

const getTopCategoryAPI = (id)=>{
    return httpInstance({
        url:'/category',
        params:{
            id
        }
    })
}
export {
    getTopCategoryAPI
}