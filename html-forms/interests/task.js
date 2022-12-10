const interestCheck = document.querySelectorAll('.interest__check');

interestCheck.forEach((el) => {
    el.addEventListener('click', (e) => buttonCheck(e));
});

function buttonCheck(el) {
    if (el.currentTarget.checked) {
        el.currentTarget.closest('.interest').querySelectorAll('ul .interest__check').forEach((item) => (item.checked = true));
    } else if (!el.currentTarget.checked) {
        el.currentTarget.closest('.interest').querySelectorAll('ul .interest__check').forEach((item) => (item.checked = false));
    }
    ChecedBox(el.currentTarget);
}

function ChecedBox(el) {
    if (el.closest('ul').closest('.interest') === null) {
        return;
    }
    let arrayInterestCheked = Array.from(el.closest('ul').querySelectorAll('.interest__check')).map((item) => item.checked);
    if (arrayInterestCheked.indexOf(false) === -1) {
        el.closest('ul').closest('.interest').querySelector('.interest__check').indeterminate = false;
        el.closest('ul').closest('.interest').querySelector('.interest__check').checked = true;
    } else if (arrayInterestCheked.indexOf(true) === -1) {
        el.closest('ul').closest('.interest').querySelector('.interest__check').indeterminate = false;
        el.closest('ul').closest('.interest').querySelector('.interest__check').checked = false;
    } else if (arrayInterestCheked.includes(false)) {
        el.closest('ul').closest('.interest').querySelector('.interest__check').indeterminate = true;
    }
    ChecedBox(
        el.closest('ul').closest('.interest').querySelector('.interest__check')
    );
}