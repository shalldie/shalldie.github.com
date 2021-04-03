<template>
    <div class="demo-v-scroll-affix">
        <div class="main">
            <div class="section1">section1</div>
            <div class="section2">section2</div>
            <div class="section3">section3</div>
            <div class="section4">section4</div>
        </div>
        <div v-for="i of 4" :key="i" class="right-menu">
            <VScrollAffix
                :class="`v-scroll-affix affix-item-${i}`"
                :offset-top="100"
                :section-selector="'.main .section' + i"
            >
                <ul>
                    <li v-for="c in 5" :key="c">list {{ i }}</li>
                </ul>
            </VScrollAffix>
        </div>
        <div class="right-menu">
            <VScrollAffix class="v-scroll-affix affix-item-5" :offset-top="100">
                <ul>
                    <li v-for="c in 5" :key="c">no limit</li>
                </ul>
            </VScrollAffix>
        </div>
    </div>
</template>

<script>
import VScrollAffix from 'v-scroll-affix';

export default {
    components: {
        VScrollAffix
    }
};
</script>

<style lang="scss" scoped>
.demo-v-scroll-affix {
    display: flex;
    position: relative;
    margin: 100px auto 100vh;
    width: 800px;

    .main {
        position: relative;
        width: 300px;
        background: #eee;

        > div {
            height: 300px;
        }

        .section1 {
            background: #ddd;
        }

        .section2 {
            background: #2ad;
        }

        .section3 {
            background: yellow;
        }

        .section4 {
            background: palevioletred;
        }

        .section5 {
            background: peru;
        }
    }

    .right-menu {
        flex: 1;

        .v-scroll-affix {
            width: 100px;

            ul {
                margin: 0;
                padding: 20px;
                list-style-type: none;

                li {
                    margin: 0;
                    padding: 0;
                    height: 40px;
                    line-height: 40px;
                }
            }
        }

        .affix-item-1 {
            background: #ddd;
        }
        .affix-item-2 {
            background: #2ad;
        }
        .affix-item-3 {
            background: yellow;
        }
        .affix-item-4 {
            background: palevioletred;
        }
        .affix-item-5 {
            background: peru;
        }
    }
}
</style>
