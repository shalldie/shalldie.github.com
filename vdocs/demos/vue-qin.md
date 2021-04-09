# [vue-qin](https://github.com/shalldie/vue-qin)

[![npm](https://img.shields.io/npm/v/vue-qin?logo=npm&style=flat-square)](https://www.npmjs.com/package/vue-qin)

Vue 的琴弦文字插件。

## Examples

<DemoVueQin />

## Installation

    npm install vue-qin

## Usage

```js
import Vue from 'vue';
import VueQin from 'vue-qin';
// let VueQin = window.VueQin;  // window
// let VueQin = require('vue-qin');  // commonjs
```

```js
// regist 注册组件

Vue.use(VueQin); // global

// or

new Vue({
    el: 'body',
    components: {VueQin} // local
});
```

```js
<vue-qin
    :content="'This is the content to show'"
    :duration="500"
    :recline="0.6"
    :offset="22"
></vue-qin>
```

## Support

    IE9 and IE9+

# Api

## Properties

| Name     |   Type   | Default | Description                                                                                     |
| :------- | :------: | :-----: | :---------------------------------------------------------------------------------------------- |
| content  | `String` |  `''`   | The content you want to show.<br>要显示的文字。                                                 |
| duration | `Number` |  `500`  | The animation duration.<br>每次弹动对动画时长。                                                 |
| recline  | `Number` |  `0.6`  | Animation's wave distance between two chars.<br>动画时候 2 个字符间的波动距离。值越大波动越大。 |
| offset   | `Number` |  `22`   | Max offset of each char move.<br>字符最大的可移动距离。                                         |
