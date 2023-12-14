<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

onMounted(() => {
    counter.getCategory()
})
</script>

<template>
    <LayoutFixed />
    <LayoutNav />
    <LayHeader />
    <!-- 添加key 破坏复用机制 强制销毁重建 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView></RouterView>
    <LayoutFooter />
</template>
