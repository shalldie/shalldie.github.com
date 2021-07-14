var ScrollActive = window['ScrollActive'];

new ScrollActive({
    wrapper: document.querySelector('.top-menu'),
    offset: 30,
    hash: true
});

new ScrollActive({
    wrapper: document.querySelector('.right-menu'),
    offset: 30,
    hash: true,
    update: function(id) {
        document.getElementById('tip').innerText = `当前active的id为：${id}`;
    }
});
