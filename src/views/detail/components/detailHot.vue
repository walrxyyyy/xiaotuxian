<script setup>
import { getHotGoodsAPI } from '@/apis/detail'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// type适配不同类型热榜数据
const props = defineProps({
    type: {
        Number,
        default: 1
    }
})
const TITLEMAP = {
    1: {
        title:'24小时热榜',
        limit:5
    },
    2: {
        title:'周热榜',
        limit:10
    }
}
const title = computed(() => {
    return TITLEMAP[props.type]
})
const goodsList = ref([])
const route = useRoute()

const getHotList = async () => {
    const res = await getHotGoodsAPI({
        id: route.params.id,
        type: props.type,
        limit: title.value.limit
    })
    // console.log(res);
    goodsList.value = res.result
}

onMounted(() => {
    getHotList()
    // console.log(goodsList);
})
</script>


<template>
    <div class="goods-hot">
        <h3>{{ title.title }}</h3>
        <!-- 商品区块 -->
        <RouterLink to="/" class="goods-item" v-for="item in goodsList" :key="item.id">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="desc ellipsis">{{ item.desc }}</p>
            <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
    </div>
</template>


<style scoped lang="scss">
.goods-hot {
    h3 {
        height: 70px;
        background: $helpColor;
        color: #fff;
        font-size: 18px;
        line-height: 70px;
        padding-left: 25px;
        margin-bottom: 10px;
        font-weight: normal;
    }

    .goods-item {
        display: block;
        padding: 20px 30px;
        text-align: center;
        background: #fff;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }
}
</style>