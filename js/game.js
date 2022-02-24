// iniciar minhas variaveis
let board = ['', '', '', '', '', '', '', '', ''];
let yourTurn = 0;
let symbols = ['p1', 'p2'];

function handleMove(position) {

    if (board[position] === "") {

        board[position] = symbols[yourTurn];

        if (yourTurn === 0) {
            yourTurn = 1;
        } else {
            yourTurn = 0;
        }
    }

}