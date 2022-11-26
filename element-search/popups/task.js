let modalMain = document.getElementById('modal_main');
let showSuccess = document.querySelector('.show-success'); // здесь массив [a.btn.btn_danger.modal__close.show-success]
let modalSuccess = document.getElementById('modal_success');
let modalClose = document.getElementsByClassName('modal__close'); // здесь HTMLCollection(3)  [div.modal__close.modal__close_times, a.btn.btn_danger.modal__close.show-success, div.modal__close.modal__close_times]


Array.from(modalClose).forEach(el => {
    el.addEventListener('click', (item) => {
        closed(modalMain);
        closed(modalSuccess);
    })
})

function closed(elementClosed) {
    elementClosed.classList.remove('modal_active');
    elementClosed.classList.add('modal__close');
};

function active(elementActive) {
    elementActive.classList.remove('modal__close');
    elementActive.classList.add('modal_active');

};

active(modalMain);

showSuccess.onclick = function() {
    closed(modalMain);
    active(modalSuccess);

};