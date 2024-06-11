const mario =  document.querySelector('.mario');
const pipe =  document.querySelector('.pipe');
const score =  document.querySelector('.score');
const gameover =  document.querySelector('.gameover');
const scoreover =  document.querySelector('.score-over');
const buttonRestart =  document.querySelector('.button-restart');
const clouds = document.querySelector('.clouds');

let count = 0;
let gameRunning = true;

const jump = () => {
    if (!gameRunning) return;
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const showGameOver = () => {
    gameRunning = false
    gameover.style.display = 'block';
    scoreover.innerHTML = 'score: ' + count;
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 123 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './mario-jump-images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        showGameOver();
    } else if (pipePosition < 0 && pipePosition > -5){
        count = count + 1;
        score.innerHTML = 'Score:' + count;
    }
}, 10);



document.addEventListener('keydown', function(event) {
    console.log('key pressed', event.key);
    if (event.key === ' ') {
        jump();
    }
});

document.addEventListener('touchstart', jump);

buttonRestart.addEventListener('click', () => {
    location.reload();
})