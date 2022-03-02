document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        square.addEventListener('click', handleClick);

    });

});

function handleClick(event) {

    // console.log(event.target);

    let square = event.target;
    let position = square.id;
    let msg = "";

    yourTurn === 0 ? msg = "1st Player is the champion!" : msg = "2nd Player is the champion!";

    if (handleMove(position)) {
        setTimeout(()=>{
            alert(msg+"\n\n"+"The winner sequence was: "+winnerSeq);
            document.location.reload(true);
        }),1;
    };
    updateSquare(position);
}

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;

}