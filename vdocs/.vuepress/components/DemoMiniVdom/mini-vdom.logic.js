import * as vdom from 'mini-vdom';
import './mini-vdom.scss';

export function invokeVdom(selector) {
    var todoList = [];
    var showList = [];
    var currentFilter = 0; // 0-全部 1-已完成 2-未完成

    try {
        todoList = JSON.parse(localStorage['todoList']);
    } catch (_a) {
        todoList = [
            {
                content: '买彩票',
                done: true
            },
            {
                content: '中大奖',
                done: false
            },
            {
                content: '走上人生巅峰',
                done: false
            }
        ];
    }

    function renderView() {
        var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : currentFilter;
        currentFilter = filter;

        if (filter === 1) {
            showList = todoList.filter(function(n) {
                return n.done;
            });
        } else if (filter === 2) {
            showList = todoList.filter(function(n) {
                return !n.done;
            });
        } else {
            showList = todoList;
        }

        render();
        localStorage['todoList'] = JSON.stringify(todoList);
    }

    var render = (function() {
        var oldNode = document.querySelector(selector);
        var newNode = oldNode;
        return function() {
            oldNode = newNode;
            newNode = vdom.h('div.mini-vdom-root.todo-list', [
                vdom.h('h2.title', 'Todo List'),
                vdom.h('div.input-row', [
                    vdom.h('input[type=text][placeholder=请输入要做的事情，回车添加]', {
                        on: {
                            keyup: function keyup(ev) {
                                if (ev.keyCode === 13) {
                                    var target = ev.target;
                                    var val = target.value.trim();

                                    if (val.length) {
                                        todoList.push({
                                            content: val,
                                            done: false
                                        });
                                        renderView();
                                        target.value = '';
                                    }
                                }
                            }
                        }
                    })
                ]),
                vdom.h('div.tab-list', [
                    vdom.h(
                        'div.tab-item',
                        {
                            attrs: {
                                class: currentFilter === 0 ? 'active' : ''
                            },
                            on: {
                                click: function click() {
                                    return renderView(0);
                                }
                            }
                        },
                        '全部'
                    ),
                    vdom.h(
                        'div.tab-item',
                        {
                            attrs: {
                                class: currentFilter === 1 ? 'active' : ''
                            },
                            on: {
                                click: function click() {
                                    return renderView(1);
                                }
                            }
                        },
                        '已完成'
                    ),
                    vdom.h(
                        'div.tab-item',
                        {
                            attrs: {
                                class: currentFilter === 2 ? 'active' : ''
                            },
                            on: {
                                click: function click() {
                                    return renderView(2);
                                }
                            }
                        },
                        '未完成'
                    )
                ]),
                vdom.h(
                    'ul.list-wrap',
                    showList.map(function(item) {
                        return vdom.h(
                            'li',
                            {
                                key: item.content,
                                attrs: {
                                    class: item.done ? 'done' : ''
                                }
                            },
                            [
                                vdom.h(
                                    'span.content',
                                    {
                                        on: {
                                            click: function click() {
                                                item.done = !item.done;
                                                renderView();
                                            }
                                        }
                                    },
                                    item.content
                                ),
                                vdom.h(
                                    'span.del',
                                    {
                                        on: {
                                            click: function click() {
                                                var index = todoList.findIndex(function(n) {
                                                    return n === item;
                                                });
                                                todoList.splice(index, 1);
                                                renderView();
                                            }
                                        }
                                    },
                                    '删除'
                                )
                            ]
                        );
                    })
                )
            ]);
            vdom.patch(oldNode, newNode);
        };
    })();

    renderView();
}
