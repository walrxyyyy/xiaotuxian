import {httpInstance} from '@/utils/http'


const getCategoryAPI = ()=>{
  return httpInstance({
    method:'get',
    url: 'home/category/head'
  })
}


export {getCategoryAPI}