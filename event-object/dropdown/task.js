const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.add('dropdown__list_active');
});

dropdownItem.forEach(el => {
    el.addEventListener('click', (event) => {
        dropdownValue.textContent = el.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault();
    }, false)
})