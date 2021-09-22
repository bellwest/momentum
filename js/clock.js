const clock = document.querySelector('#clock');

function updateClock() {
    const date = new Date();
    const HH = String(date.getHours()).padStart(2, '0');
    const MM = String(date.getMinutes()).padStart(2, '0');
    const SS = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${HH}:${MM}:${SS}`;
}

updateClock();
setInterval(updateClock, 1000);