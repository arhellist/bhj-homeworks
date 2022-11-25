let dead = Number(document.getElementById('dead').textContent);
let lost = Number(document.getElementById('lost').textContent);


const hole = document.querySelectorAll('.hole');

function clicked(el) {
    el.addEventListener('click', (item) => {
        if (item.target.classList.contains('hole_has-mole')) {
            dead += 1;
            document.getElementById('dead').textContent = dead;
            if (dead === 10) {
                alert('You WIN!!!');
                dead = 0;
                lost = 0;
                document.getElementById('dead').textContent = dead;
                document.getElementById('lost').textContent = lost;
            }
        } else {
            lost += 1;
            document.getElementById('lost').textContent = lost;
            if (lost === 5) {
                alert('You LOST!!!');
                dead = 0;
                lost = 0;
                document.getElementById('dead').textContent = dead;
                document.getElementById('lost').textContent = lost;

            }
        }

    })
}

hole.forEach(elem => clicked(elem))