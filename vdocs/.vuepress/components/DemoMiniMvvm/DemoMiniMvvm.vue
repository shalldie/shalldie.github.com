<template>
    <div class="demo-mini-mvvm">
        <div class="mini-mvvm-root"></div>
    </div>
</template>

<script>
import {invokeMiniMvvm} from './mini-mvvm.logic';

export default {
    mounted() {
        const vm = invokeMiniMvvm();
        vm.$mount('.mini-mvvm-root');
    }
};
</script>

<style lang="scss" scoped></style>
