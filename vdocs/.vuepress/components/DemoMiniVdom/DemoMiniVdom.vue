<template>
    <div class="demo-mini-vdom">
        <div class="mini-vdom-root todo-list"></div>
    </div>
</template>

<script>
import {invokeVdom} from './mini-vdom.logic';

export default {
    mounted() {
        invokeVdom('.mini-vdom-root');
    }
};
</script>
