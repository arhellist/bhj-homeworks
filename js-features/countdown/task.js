let secondTime = document.getElementById('timerSec').textContent;
let minuetTime = document.getElementById('timerMin').textContent;
let hourTime = document.getElementById('timerHour').textContent;
let url = document.getElementById('linkDownload');


function countdown(hour, min, second) {

    var myInterval = setInterval(() => {

            // подсчет секунд
            second -= 1;
            if (second <= 9) {
                document.getElementById('timerSec').textContent = '0' + second; //добавляем "0" к однозначному значению времени
            } else {
                document.getElementById('timerSec').textContent = second;
            };

            // подсчет минут
            if (second === 0) {
                second = 60;
                min -= 1;
                document.getElementById('timerMin').textContent = min
                if (min <= 9) {
                    document.getElementById('timerMin').textContent = '0' + min; //добавляем "0" к однозначному значению времени
                } else {
                    document.getElementById('timerMin').textContent = min;
                };
            }

            // подсчет часов
            if (min === 0) {
                min = 60;
                hour -= 1;
                document.getElementById('timerHour').textContent = hour
                if (hour <= 9) {
                    document.getElementById('timerHour').textContent = '0' + hour; //добавляем "0" к однозначному значению времени
                } else {
                    document.getElementById('timerHour').textContent = hour;
                };
            }

            // когда время истекло
            if (hour === 0) {
                alert('YOU WIN!!!!'); // сообщение о победе
                url.href = 'https://img1.akspic.ru/attachments/crops/2/2/4/0/50422/50422-senokosnoye_ugodye-pole-selskoe_hozyajstvo-zakat-risovoe_pole-2560x1440.jpg'
                url.click();
                clearInterval(myInterval); // удаление отсчета
            }
        }, 1) //ради ускорения и наглядности интервал выставлен минимальный
}

countdown(hourTime, minuetTime, secondTime);