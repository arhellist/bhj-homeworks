let loader = document.querySelector('.loader');
let rebit;
//let url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

const items = document.querySelector('#items');

loadCourse();
loaded('https://students.netoservices.ru/nestjs-backend/slow-get-courses', getValue);



function loaded(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.responseType = '';

    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            return callback(JSON.parse(xhr.response));
        }
    };
}
/*
let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    rebit = xhr.responseText;
    console.log(rebit);
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
    }
});
xhr.open('GET', 'url', true);
xhr.send();*/



function addElem(...data) {
    const Item = document.createElement('div').classList.add('item');
    const ItemCode = document.createElement('div').classList.add('item__code');
    const ItemValue = document.createElement('div').classList.add('item__value');
    const ItemCurency = document.createElement('div').classList.add('item__currency');

    ItemCode.innerText = data[0];
    ItemValue.innerText = data[1];
    ItemCurency.innerText = 'руб.';

    items.insertAdjacentElement('beforeend', 'Item');
    Item.insertAdjacentElement('beforeend', 'ItemCode');
    Item.insertAdjacentElement('beforeend', 'ItemValue');
    Item.insertAdjacentElement('beforeend', 'ItemCurency');
}


function getValue(jsn) {
    const keysValuteArr = jsn.keys(jsn.response.Valute);
    let currencies;
    let course;
    let arr = [];

    for (let index of keysValuteArr) {
        currencies = jsn.response.Valute[index].CharCode;
        course = jsn.response.Valute[index].Value;
        addElem(currencies, course);
        arr.push({ currencies, course });
    }
    localStorage.removeItem('exchangeRate');
    localStorage.setItem('exchangeRate', JSON.stringify(arr));

}

function loadCourse() {
    let arr = JSON.parse(localStorage.getItem('exchangeRate'));
    let currencies;
    let course;
    if (arr != null) {
        for (let index of arr) {
            currencies = index.currencies;
            course = index.course;

            addElement(currencies, course);
        }
    }
}


/*
 */