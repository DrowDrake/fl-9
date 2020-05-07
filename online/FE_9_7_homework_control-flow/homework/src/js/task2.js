let maxNumberRange = 5;
let attempts = 3;
let prize = 10;
let lastTrie = 1;
let newPrize, randomNumber;
let totalPrize = 0;

function start() {
    let doYouWantToPlaySomeGame = confirm('Do you want to play a game?');
    if (doYouWantToPlaySomeGame === true) {
        userInput();
    } else {
        alert('You did not become a millionaire, but can');
    }
}

function userInput() {
    if (attempts===3){
       newPrize=prize;
    }
    let inputNumber = prompt('Enter a number from 0 to ' + maxNumberRange +
        '\n' + 'Attempts left: ' + attempts +
        '\n' + 'Possible prize on current attempt: ' + Math.floor(prize) +
        '\n' + 'Total prize: ' + Math.floor(totalPrize), 0);
    randomNumber = newRandomGenerator();
    if (inputNumber === null) {
        alert('Good Bye');
        return;
    }
    if (+inputNumber === randomNumber) {

        if (attempts === 3 || attempts === 2 || attempts === lastTrie) {
            totalPrize += prize;
        }
        let again = confirm('Congratulation! Your prize is: ' + Math.floor(totalPrize) +
            '\n' + 'do you want to start new game ?');
        if (again === true) {
            if (totalPrize > 0) {
                maxNumberRange *= 2;
            }
            attempts = 3;
            prize = newPrize * 3;
           userInput();
        } else {
            alert('Good Bye');
        }
    } else if (+inputNumber !== randomNumber) {
        if(attempts !== lastTrie) {
            alert('you didn\'t guess right number, trie again');
            attempts--;
            prize = prize / 2;

            userInput();
        } else if (attempts === lastTrie) {
            maxNumberRange *= 2;
            prize = newPrize * 3;
            looseAllAttempts();
        } else {
            alert('Something go wrong, please reload the page');
        }
    } else {
        wrongInput();
    }
}

function looseAllAttempts() {
    let looseAllAttempts = confirm('You loose all your attempts, your prize is: ' + Math.floor(totalPrize) +
        '\n' + 'do you want to restart game ?');
    attempts = 3;
    looseAllAttempts === true ? userInput() : alert('Good Bye');
}

function wrongInput() {
    alert('you enter wrong number, please enter new number from 0 to 5 after pressing \'OK\' button');
    attempts--;
    prize = prize / 2;
    userInput();
}

function newRandomGenerator() {
        randomNumber = Math.floor(Math.random() * maxNumberRange);
    return randomNumber;
}

start();
