var ScrollAffix = window['ScrollAffix'];

for (var i = 1; i <= 5; i++) {
    new ScrollAffix({
        el: document.querySelector('.right-menu-' + i + ' .affix-bar'),
        offsetTop: 20,
        // maxScrollHeight() {
        //     const mainEle = document.querySelector('.main') as HTMLElement;
        //     return getAbsPoint(mainEle).y + mainEle.offsetHeight;
        // },
        sectionSelector: i === 5 ? undefined : '.section' + i
    });
}
