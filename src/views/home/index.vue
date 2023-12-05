<script setup>
import HomeHot from "@/views/home/components/HomeHot.vue";
import HomeNew from "@/views/home/components/HomeNew.vue";
import HomeBanner from "@/views/home/components/HomeBanner.vue";
import HomeCategory from "@/views/home/components/HomeCategory.vue";
import HomeProduct from "@/views/home/components/HomeProduct.vue";
import HomePanel from "@/views/home/components/HomePanel.vue";
</script>


<template>
    <div class="container">
        <HomeCategory></HomeCategory>
        <HomeBanner></HomeBanner>
    </div>
    <HomeNew></HomeNew>
    <HomeHot></HomeHot>
    <home-product></home-product>
    <!-- 测试面板封装 -->
    <HomePanel title="新鲜好物" sub-title="新鲜好物 非常实惠">
        <div>
            这是一条测试数据
        </div>
    </HomePanel>
    <HomePanel title="人气推荐" sub-title="人气推荐 非常实惠">
        <div>
            这是两条测试数据
        </div>
    </HomePanel>
</template>

<style scoped lang="scss">

</style>