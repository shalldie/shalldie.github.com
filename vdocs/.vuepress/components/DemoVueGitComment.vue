<template>
    <VueGitComment :options="options" />
</template>

<script>
import 'vue-git-comment/dist/vue-git-comment.css';
import VueGitComment from 'vue-git-comment';

export default {
    components: {
        VueGitComment
    },
    data() {
        return {
            options: {
                clientID: '6d389de0147fcf7e6d0e',
                clientSecret: '796a5f4d41b636a4cccd282cbc4adc42f148b39e',
                owner: 'shalldie',
                repo: 'shalldie.github.com',
                uuid: 'for_vue_git_comment',
                language: 'zh-CN',
                proxy: 'https://nosaid.com/corsanywhere/https://github.com/login/oauth/access_token'
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
