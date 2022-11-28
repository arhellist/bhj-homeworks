const rotatorCase = document.querySelectorAll('.rotator__case');
let count = 0;
let collor;
let timeInterval = rotatorCase[count].getAttribute('data-speed');

const timeCount = setInterval(() => {
    count += 1;
    if (count === rotatorCase.length) {
        count = 0;
    }

    timeInterval = rotatorCase[count].getAttribute('data-speed');
    rotatorCase[count].classList.add('rotator__case_active');
    collor = rotatorCase[count].getAttribute('data-color');
    rotatorCase[count].style.color = collor;
    if ((count - 1) === -1) {
        rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active');
    } else {
        rotatorCase[count - 1].classList.remove('rotator__case_active');
    }

}, 1000)