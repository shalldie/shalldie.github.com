var CACHE_KEY = '__mini-mvvm_cache_key__';

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
        computedDescription: function () {
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
        list: function () {
            var filterIndex = this.filterIndex;

            if (filterIndex === 0) {
                return this.infos;
            }
            else if (filterIndex === 1) {
                return this.infos.filter(function (item) {
                    return !item.done;
                });
            }
            else {
                return this.infos.filter(function (item) {
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
        // 99 乘法表初始化
        init99: function () {
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

        // 新增一项
        addItem: function () {
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
        toggleDone: function (item) {
            item.done = !item.done;
            this.infos = this.infos.slice();
        },

        // 删除一项
        deleteItem: function deleteItem(item) {
            var index = this.infos.indexOf(item);
            this.infos.splice(index, 1);
        },

        // 重置数据
        reset: function () {
            Object.assign(this._data, this.$options.data());
            this.init99();
        },

        // 从localstorage更新数据
        restore: function () {
            try {
                var content = localStorage[CACHE_KEY];
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
            localStorage[CACHE_KEY] = content;
        }
    }
});
