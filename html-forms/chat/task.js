const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

const chatMessage = document.querySelector('#chat-widget__messages');
const chatInput = document.querySelector('#chat-widget__input');
let message;
let intervalIndex;


chatInput.addEventListener('focus', () => {
    intervalIndex = intervalFunc();
});

chatInput.addEventListener('keydown', (button) => {
    if (button.key === 'Enter' && button.currentTarget.value.trim() === '') {
        clearInterval(intervalIndex);
        button.currentTarget.value = button.currentTarget.defaultValue;
        intervalIndex = intervalFunc();
    } else if (button.key === 'Enter') {
        clearInterval(intervalIndex);
        addMassegies(button.currentTarget.value.trim(), 'message_client');
        addMassegies(messageBot());
        scroll();
        button.currentTarget.value = button.currentTarget.defaultValue;
        intervalIndex = intervalFunc();
    }
});

function intervalFunc() {
    let elemInterval = setInterval(() => {
        addMassegies('Напишите нам');
        scroll();
    }, 30000);
    return elemInterval;
}

function addMassegies(messageText, classTagUser = null) {
    let time = settingTheTime();
    chatMessage.innerHTML += `<div class="message ${classTagUser}">
      <div class="message__time">${time}</div>
      <div class="message__text">
        ${messageText}
      </div>
    </div>`;
}

function scroll() { // функция прокручивания сообщений (нижнее сообщение по нижней части контейнера)
    message = document.querySelectorAll('.message');
    message[message.length - 1].scrollIntoView(false);
}

function messageBot() { // выбираем случайное сообщение бота
    const messageArray = [
        'Привет друг',
        'Как дела',
        'Я тоже люблю netology',
        'Привед',
        'Hellow',
        'All We Are',
        'Zik Hile',

    ];
    index = Math.floor(Math.random() * messageArray.length);
    return messageArray[index];
}

function settingTheTime() { // вводим дату отправки сообщения
    let currentDate = new Date();
    hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    minuts = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    return `${hours}:${minuts}`;
}