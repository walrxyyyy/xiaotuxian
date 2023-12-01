<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'

</script>

<template>
    <LayoutNav />
    <LayHeader />
    <RouterView />
    <LayoutFooter />
</template>
