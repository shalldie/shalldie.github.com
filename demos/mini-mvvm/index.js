window['vm'] = new MiniMvvm({
    el: '#root',
    data: function data() {
        return {
            activeIndex: 0,
            tabList: [
                '双向绑定',
                '计算属性',
                '条件渲染',
                '循环/事件',
                'Todo List'
            ],
            // 双绑
            person: {
                name: '花泽香菜',
                age: 12,
                sex: '女'
            },

            // m-if
            showText: false,

            // m-for
            forTable: [],

            // todoList
            content: '',
            infos: [
                {
                    content: '中一次双色球，十注的 >_<#@!',
                    done: false
                },
                {
                    content: '然后再中一次体彩，还是十注的 0_o',
                    done: false
                },
                {
                    content: '我全都要 😂 🌚 🤣 💅 👅 🤠 ',
                    done: false
                }
            ],
            filters: ['All', 'Todos', 'Dones'],
            filterIndex: 0
        };
    },

    computed: {
        visible: function visible() {
            var list = {};
            list[this.activeIndex] = 1;
            return list;
        },
        bindDescription: function bindDescription() {
            return (
                this.person.name +
                '\u7684\u5E74\u9F84\u662F' +
                this.person.age +
                ',\u7136\u540E\u662F\u4E2A' +
                this.person.sex +
                '\u7684'
            );
        },

        // 当前tab对应的数据
        list: function list() {
            var filterIndex = this.filterIndex;
            var list = this.infos;

            if (filterIndex === 0) {
                return list;
            } else if (filterIndex === 1) {
                return list.filter(function (item) {
                    return !item.done;
                });
            } else {
                return list.filter(function (item) {
                    return item.done;
                });
            }
        }
    },
    created: function created() {
        this.init99();

        // todolist
        this.restore();
    },

    methods: {
        // 切换tab
        changeTab: function changeTab(index) {
            this.activeIndex = index;
        },

        // 获取tab的class
        getTabClass: function getTabClass(index, activeIndex) {
            return index === activeIndex ? 'tab active' : 'tab';
        },

        // alert
        alertText: function alertText(text) {
            if (!text) return;
            alert(text);
        },

        // 99 乘法表初始化
        init99: function init99() {
            // 构建99乘法表
            var result = [];
            for (var y = 1; y <= 9; y++) {
                var list = [];
                for (var x = 1; x <= 9; x++) {
                    if (x > y) list.push('');
                    else list.push(x + ' * ' + y + ' = ' + x * y);
                }
                result.push(list);
            }
            this.forTable = result;
        },

        //todolist 相关
        // 获取tab的class
        getTodoListTabClass: function getTodoListTabClass(index) {
            return index === this.filterIndex
                ? 'tab active'
                : 'tab';
        },

        // 获取listItem的class
        getListItemClass: function getListItemClass(item) {
            return item && item.done ? 'done' : '';
        },

        // 改变过滤条件
        changeFilter: function changeFilter(index) {
            this.filterIndex = index;
        },

        // 新增一项
        addItem: function addItem() {
            var content = this.content.trim();
            if (!content.length) {
                return;
            }
            this.infos.push({
                content: content,
                done: false
            });
            this.content = '';
        },

        // 切换完成状态
        toggleDone: function toggleDone(item) {
            item.done = !item.done;
            this.infos = this.infos.slice();
        },

        // 删除一项
        deleteItem: function deleteItem(item) {
            var index = this.infos.indexOf(item);
            this.infos.splice(index, 1);
        },

        // 重置数据
        reset: function reset() {
            Object.assign(this.$data, this.$options.data());
            this.init99();
        },

        // 从localstorage更新数据
        restore: function restore() {
            try {
                var content = localStorage['_cache_'];
                if (!content.length) {
                    return;
                }
                var infos = JSON.parse(content);
                this.infos = infos;
            } catch (ex) {
                this.reset();
            }
        }
    },
    watch: {
        // 监听infos改变，存入localstorage
        infos: function infos() {
            var content = JSON.stringify(this.infos);
            localStorage['_cache_'] = content;
        }
    }
});
