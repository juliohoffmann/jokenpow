
const playHuman = document.getElementById('pedra');
const playComputer = document.getElementById('papel');
const playTie = document.getElementById('tesoura');
const result = document.querySelector('.resultado');
const placar1 = document.querySelector('.placar1');
const placar2 = document.querySelector('.placar2');
const reset = document.querySelector('.reset');

let playerScore = 0;
let computerScore = 0;


playHuman.addEventListener('click', () => play('pedra'))
playComputer.addEventListener('click', () => play('papel'))
playTie.addEventListener('click', () => play('tesoura'))
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    placar1.textContent = `Sua pontuação atual é: ${playerScore}`;
    placar2.textContent = `Computador: ${computerScore}`;
})

function play(playerSelection) {
    const computerSelection = computerPlay();
    const roundResult = game(playerSelection, computerSelection);
    result.textContent = roundResult;
    placar1.textContent = `Sua pontuação atual é: ${playerScore}`;
    placar2.textContent = `Computador: ${computerScore}`;


}

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return 'pedra';
        case 1:
            return 'papel';
        case 2:
            return 'tesoura';
    }
}

function game(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Empate';
    } else if (
        (playerSelection === 'pedra' && computerSelection === 'tesoura') ||
        (playerSelection === 'papel' && computerSelection === 'pedra') ||
        (playerSelection === 'tesoura' && computerSelection === 'papel')
    ) {
        playerScore++;
        return 'Vitoria';
    } else {
        computerScore++;
        return 'Derrota';
    }

}







