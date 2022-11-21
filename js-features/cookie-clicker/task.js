let clickCount = Number(document.getElementById('clicker__counter').textContent);
let image = document.getElementById('cookie');
let clean = document.getElementById('clear');
let speed = Number(document.getElementById('clicker__speed').textContent);
let best = Number(document.getElementById('clicker__best').textContent);
let now = new Date();



image.onclick = function() {
    let timeOnClick = new Date();
    let clickTime = timeOnClick - now;
    speed = 1000 / clickTime;
    document.getElementById('clicker__speed').textContent = speed.toFixed(2);
    if (speed.toFixed(2) > best) { //быстрее чем 9.71 не получается, возможно из за скорости выполнения кода
        best = speed.toFixed(2);
        document.getElementById('clicker__best').textContent = speed.toFixed(2);
    }
    clickCount = clickCount + 1;
    document.getElementById('clicker__counter').textContent = clickCount;
    image.setAttribute('width', '250');
    now = new Date();
    setTimeout(() => {
        image.setAttribute('width', '200');
    }, 30)
}

clean.onclick = function() {
    clickCount = 0;
    document.getElementById('clicker__counter').textContent = 0;
    document.getElementById('clicker__speed').textContent = 0;
    best = 0;
    document.getElementById('clicker__best').textContent = 0;
}