let loader = document.querySelector('.loader');
let url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const items = document.querySelector('#items');


xhrLoad();


function xhrLoad() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {

        if (xhr.readyState === xhr.DONE) {
            loader.classList.remove('loader_active');
        }
    });

    xhr.onload = function() {

        //console.log(xhr.responseText);

        const jsn = JSON.parse(xhr.responseText);
        obj = new Object;
        obj = jsn.response.Valute;
        console.log(obj);

        for (let element in obj) {
            console.log(obj[element].CharCode, obj[element].Value);

            let Item = document.createElement('div');
            let ItemCode = document.createElement('div');
            let ItemValue = document.createElement('div');
            let ItemCurency = document.createElement('div');

            Item.classList.add('item');
            ItemCode.classList.add('item__code');
            ItemValue.classList.add('item__value');
            ItemCurency.classList.add('item__currency');

            ItemCode.innerText = obj[element].CharCode;
            ItemValue.innerText = obj[element].Value;
            ItemCurency.innerText = 'руб.';

            items.insertAdjacentElement('beforeend', Item);
            Item.insertAdjacentElement('beforeend', ItemCode);
            Item.insertAdjacentElement('beforeend', ItemValue);
            Item.insertAdjacentElement('beforeend', ItemCurency);

        }
    }

}