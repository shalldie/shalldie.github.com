<template>
    <div class="demo-v-scroll-active">
        <div class="container">
            <div v-for="(id, index) in list" :key="index" :id="id" class="item">
                {{ id }}
            </div>
        </div>
        <div class="top-menu">
            <VScrollActive offset="60" :hash="true">
                <div v-for="(id, index) in list" :key="index" class="item" :data-scroll-active="id">
                    {{ id }}
                </div>
            </VScrollActive>
        </div>
        <div class="right-menu">
            <VScrollActive offset="60" :hash="true">
                <div v-for="(id, index) in list" :key="index" class="item" :data-scroll-active="id">
                    {{ id }}
                </div>
            </VScrollActive>
        </div>
    </div>
</template>

<script>
import VScrollActive from 'v-scroll-active';

export default {
    components: {
        VScrollActive
    },
    data() {
        return {
            list: [1, 2, 3, 4, 5].map(n => `Section_${n}`)
        };
    }
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    width: 500px;
    margin: 100px 0;
    padding-bottom: 100vh;

    .item {
        height: 300px;
        line-height: 300px;
        margin-bottom: 30px;
        background: #ddd;
        font-size: 50px;
        text-align: center;
    }
}

.top-menu {
    background: #22aadd7d;
    padding: 0 50px;
    color: #fff;
    position: fixed;
    top: 60px;
    left: 50%;
    transform: translate(-50%);

    .item {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        margin: 0 10px;
        font-weight: bold;

        &.active {
            color: #f00;
        }
    }
}

.right-menu {
    background: #22aadd7d;
    padding: 20px;
    position: fixed;
    // width: 280px;
    left: 50%;
    top: 200px;
    margin-left: 300px;

    .item {
        margin-bottom: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #fff;

        &.active {
            color: #f00;
        }
    }
}
</style>
