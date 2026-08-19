let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset-btn');
let newGameButton = document.querySelector('#new-game-btn');
let messageContainer = document.querySelector('.msg-container');
let messageElement = document.querySelector('#message');
let turnO = true; // true for X's turn, false for O's turn

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    messageContainer.classList.add('hide');
}


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
};

const showWinnerMessage = (winner) => {
    messageElement.innerText = `Winner: ${winner}`;
    messageContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of WinPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if (pos1Value != '' && pos2Value != '' && pos3Value != '') {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                showWinnerMessage(pos1Value);
            }
        }

    }
}

resetButton.addEventListener('click', () => {
    resetGame();
}); 
newGameButton.addEventListener('click', () => {
    resetGame();
});