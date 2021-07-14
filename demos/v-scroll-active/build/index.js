// window
var VScrollActive = window['VScrollActive'];
// commonjs like
// const VScrollActive = require('v-scroll-active');
// es module, typescript
// import VScrollActive from './VScrollActive.vue';

Vue.use(VScrollActive); // global

new Vue({
    el: '#app',
    data: function() {
        return {
            tip: '',
            idList: ['section 1', 'section 2', 'section 3', 'section4', '第五项', '第 六 项']
        };
    },
    methods: {
        handleNavbarChange: function(id) {
            console.log('current active id is ' + id);
        }
    }
});
