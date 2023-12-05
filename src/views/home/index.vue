<script setup>
import HomeHot from "@/views/home/components/HomeHot.vue";
import HomeNew from "@/views/home/components/HomeNew.vue";
import HomeBanner from "@/views/home/components/HomeBanner.vue";
import HomeCategory from "@/views/home/components/HomeCategory.vue";
import HomeProduct from "@/views/home/components/HomeProduct.vue";
</script>


<template>
    <div class="container">
        <HomeCategory></HomeCategory>
        <HomeBanner></HomeBanner>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <home-product></home-product>
</template>

<style scoped lang="scss">

</style>