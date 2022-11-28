const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const sizeArray = ['book_fs-big', 'book_fs-normal', 'book_fs-small'];

console.log(book);


fontSize.forEach((el, index) => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        fontSize.forEach(it => {
            it.classList.remove('font-size_active');
        });
        el.classList.add('font-size_active');
        if (el.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (el.classList.contains('font-size_big')) {
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    }, false)
})