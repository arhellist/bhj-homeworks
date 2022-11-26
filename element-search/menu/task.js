const menuLink = document.querySelectorAll('.menu__link'); // все элементы с классом  menu__link - это все ссылки
const menu = document.querySelectorAll('.menu'); // все элементы с классом  menu
const menuItem = document.querySelectorAll('.menu__item'); // все элементы с классом  menu__item
const chekList = document.querySelectorAll('.menu__item > ul'); // все элементы с классом  menu__item, которые вложены в ul - выпадающие меню

menuLink.forEach(link => {
    link.onclick = () => {
        if (!link.closest('.menu__item').querySelector('ul')) {
            //console.log(!link.closest('.menu__item').querySelector('ul'));
            link.onclick = () => {
                document.querySelectorAll('.menu_sub').forEach(item => item.classList.remove('menu_active'));
            };
        } else if (
            Array.from(link.closest('.menu__item').querySelector('.menu').classList).includes('menu_active')
        ) {
            link.closest('.menu__item').querySelector('.menu').classList.remove('menu_active');
        } else {
            link.closest('.menu_main').querySelectorAll('.menu_sub').forEach(item => item.classList.remove('menu_active'));
            link.closest('.menu__item').querySelector('.menu').classList.add('menu_active');
        }
        return false;
    };
});