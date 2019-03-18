const hour_hand = document.querySelector('.hour-hand');
const minute_hand = document.querySelector('.min-hand');
const second_hand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();

    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secRotate = ((secs / 60) * 360) + 90;
    const minRotate = ((mins / 60) * 360) + ((secs / 60) * 6) + 90;
    const hourRotate = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;

    second_hand.style.transform = `rotate(${secRotate}deg)`;
    minute_hand.style.transform = `rotate(${minRotate}deg)`;
    hour_hand.style.transform = `rotate(${hourRotate}deg)`;

    setTimeout(setDate, 1000);
}

setDate();

// Date.property
// object.style.property transform