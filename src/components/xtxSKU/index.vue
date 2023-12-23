<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { bwPowerSet } from '@/components/xtxSKU/powerSet'


// 数据获取完毕生成路径字典
let pathMap = {}
// 商品数据
const goods = ref({})
const getGoods = async () => {
    // 1135076  初始化就有无库存的规格
    // 1369155859933827074 更新之后有无库存项（蓝色-20cm-中国）
    const res = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1369155859933827074')
    goods.value = res.data.result
    pathMap = getPathMap(goods.value)
    // 初始化更新按钮状态
    
}
// console.log('这是pathMap',pathMap);
// 切换选中状态
const changeSku = (item, val) => {
    if (val.selected) {
        val.selected = !val.selected
    } else {
        item.values.forEach(e => {
            e.selected = false
        });
        val.selected = true
    }
}
// 生成有效路径字典对象
const getPathMap = (goods) => {
    const pathMap = {}
    // 1.根据skus字段生成有效的sku数组
    const effectiveSkus = goods.skus.filter((sku) => {
        sku.inventary > 0
    })
    // 2.根据有效的sku集合使用powerSet算法得到所有子集[1,2]=>[[1],[2],[1,2]]
    effectiveSkus.forEach((sku) => {
        // 2.1获取可选规格值数组
        const selectedValArr = sku.specs.map((val) => {
            val.valueName
        })
        // 2.2获取可选值数组的子集
        const valueArrPowerSet = bwPowerSet(selectedValArr)
        // 3.根据子集生成路径字典对象
        // 3.1遍历子集  往pathMap中插入数据
        valueArrPowerSet.forEach((arr) => {
            // 根据arr得到字符串的key，约定使用-分割['蓝色','美国']=>'蓝色-美国'
            const key = arr.join('-')
            // 给pathMap设置数据
            if (pathMap[key]) {
                pathMap[key].push(sku.id)
            } else {
                pathMap[key] = [sku.id]
            }
        })
    })
    return pathMap
}

onMounted(() => getGoods())

</script>

<template>
    <div class="goods-sku">
        <dl v-for="item in goods.specs" :key="item.id">
            <dt>{{ item.name }}</dt>
            <dd>
                <template v-for="val in item.values" :key="val.name">
                    <!-- 图片类型规格 -->
                    <img v-if="val.picture" :src="val.picture" :title="val.name" :class="{ selected: val.selected }"
                        @click="changeSku(item, val)">
                    <!-- 文字类型规格 -->
                    <span v-else :class="{ selected: val.selected }" @click="changeSku(item, val)">{{ val.name }}</span>
                </template>
            </dd>
        </dl>
    </div>
</template>

<style scoped lang="scss">
@mixin sku-state-mixin {
    border: 1px solid #e4e4e4;
    margin-right: 10px;
    cursor: pointer;

    &.selected {
        border-color: #27ba9b;
    }

    &.disabled {
        opacity: 0.6;
        border-style: dashed;
        cursor: not-allowed;
    }
}

.goods-sku {
    padding-left: 10px;
    padding-top: 20px;

    dl {
        display: flex;
        padding-bottom: 20px;
        align-items: center;

        dt {
            width: 50px;
            color: #999;
        }

        dd {
            flex: 1;
            color: #666;

            >img {
                width: 50px;
                height: 50px;
                margin-bottom: 4px;
                @include sku-state-mixin;
            }

            >span {
                display: inline-block;
                height: 30px;
                line-height: 28px;
                padding: 0 20px;
                margin-bottom: 4px;
                @include sku-state-mixin;
            }
        }
    }
}
</style>