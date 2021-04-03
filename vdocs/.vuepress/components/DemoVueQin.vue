<template>
    <div class="demo-vue-qin">
        <ClientOnly>
            <ul>
                <li v-for="(item, index) in list" :key="index">
                    <VueQin :content="item" />
                </li>

                <li>
                    <a href="https://github.com/shalldie/vue-qin" target="_blank">
                        <VueQin content="点我，去github看看代码，顺便star"></VueQin>
                    </a>
                </li>
            </ul>
        </ClientOnly>
    </div>
</template>

<script>
import VueQin from 'vue-qin';

export default {
    components: {
        VueQin
    },
    data() {
        return {
            list: [
                '北凉王府龙盘虎踞于清凉山，千门万户，极土木之盛。',
                '没能挣脱老道士看似云淡风轻的束缚，那踏出去的一步如何都没能落地。',
                '光凭这一手，若是搁在市井中，那还不得搏得满堂喝彩啊。',
                '身边出城或者进城中途歇息的酒客都嫌弃这衣着寒碜的一主一仆，刻意坐远了。',
                '天下间，谁能与驰骋辗转过王朝南北十三州的北凉铁骑争锋？',
                '这份娴熟，已经远远超出一般行伍悍卒百战之兵的范畴。'
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.demo-vue-qin {
    .vue-qin {
        cursor: pointer;
    }
}
</style>
