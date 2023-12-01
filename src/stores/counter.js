import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from '@/apis/layout'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const list=ref([])
  const getCategory  =async ()=>{
    const res =await  getCategoryAPI()
    list.value = res.result
  }
  return { count, doubleCount, increment,getCategory,list }
})
