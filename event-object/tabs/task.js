let tabNavigation = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');
let tab = document.querySelector('#tabs1');

function actvaded(el, arFrst, arScnd) {
    arFrst.forEach((item) => item.classList.remove('tab_active'));
    arScnd.forEach((itm) => itm.classList.remove('tab__content_active'));
    el.classList.add('tab_active');
    arScnd[Array.from(arFrst).indexOf(el)].classList.add('tab__content_active');
};

tab.addEventListener('click', (e) => {
    if (e.target.closest('.tab'))
        actvaded(e.target, tabNavigation, tabContent);
});