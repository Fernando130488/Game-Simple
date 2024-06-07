const mario =  document.querySelector('.mario');
const pipe =  document.querySelector('.pipe');
const score =  document.querySelector('.score');

let count = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
    mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 123 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './mario-jump-images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    } else if (pipePosition < 0 && pipePosition > -5){
        count++;
        score.innerHTML = 'Score:' + count;
    }
}, 10);



document.addEventListener('keydown', function(event) {
    console.log('key pressed', event.key);
    if (event.key === ' ') {
        jump();
    } else if (event.key === 'a') {
        location.reload();
    }
});

document.addEventListener('touchstart', jump);