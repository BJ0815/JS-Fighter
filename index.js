var keys = [...document.querySelectorAll('.key')];

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) { return; }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
});

keys.forEach(key => key.addEventListener('transitionend', removeplay));

function removeplay(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

// es6 -- [..., ${}, =>]
// keyBoardEvent -- keyCode, propertyName
// DOM classList
// audio currentTime
// transition Event
