console.log("------------WELCOME TO 🐍SNAKE AND LADDER 🪜 GAME---------------\n");

function rollDice() {
  prompt("");
  return Math.ceil(Math.random() * 6);
}

function getLadderEndPostion(postion) {
  switch (postion) {
    case 4: return 56;
    case 12: return 50;
    case 14: return 55;
    case 22: return 58;
    case 41: return 79;
    case 54: return 88;
    default: return postion;
  }
}

function getSnakeEndPostion(postion) {
  switch (postion) {
    case 37: return 2;
    case 48: return 16;
    case 75: return 55;
    case 91: return 22;
    case 97: return 42;
    default: return postion;
  }
}

function isLadder(playerPostion) {
  return playerPostion === getLadderEndPostion(playerPostion);
}

function isSnake(playerPostion) {
  return playerPostion === getSnakeEndPostion(playerPostion);
}

function playerPostion(playerPostion, playerSymbol) {
  console.log(playerSymbol + "press ENTER play ");

  const input = rollDice();
  playerPostion += input;


  console.log("▶️ " + playerSymbol + " Rolled dice 🎲  got : " + input);

  if (playerPostion > 100) {
    console.log("  now you are at " + (playerPostion - input) + "\n");
    const need = 100 - (playerPostion - input)
    console.log(" YOU NEED " + need + "\n");

    return playerPostion - input;
  }

  console.log("  now you are at " + playerPostion + "\n");

  if (!isLadder(playerPostion)) {
    console.log("🪜" + 'you hit ladder ☺️ now you are at ' + getLadderEndPostion(playerPostion) + "\n");

    return getLadderEndPostion(playerPostion);
  }

  if (!isSnake(playerPostion)) {
    console.log("🐍 you were caught with snake 😆 now you are at " + getSnakeEndPostion(playerPostion) + "\n");

    return getSnakeEndPostion(playerPostion);
  }

  return playerPostion;
}

function help() {
  console.log(" ---------------------------------------------------- ");
  console.log("|🐍🐍 Be Careful with snake postions 37 48 75 91 75  |");
  console.log("|🪜🪜 Ladder Postions 4 12 14 22 41 54               |");
  console.log(" ----------------------------------------------------  ")

  choice();
}

function forRollingDice(player1, player2, player1Name, player2Name, player1Symbol, player2Symbol) {
  console.log("---------------------------------------------------------------------");

  if (player1 !== 100 && player2 !== 100) {
    console.log(player1Name + " postion : " + player1 + "\t\t\t\t" + player2Name + " postion : " + player2 + "\n");

    const playerOne = playerPostion(player1, player1Symbol);
    const playerTwo = playerPostion(player2, player2Symbol);

    return forRollingDice(playerOne, playerTwo, player1Name, player2Name, player1Symbol, player2Symbol);
  }

  if (player1 === 100) {
    return " 🥳🤩 " + player1Name + " YOU WON🏅🏆☺️";
  }

  if (player2 === 100) {
    return " 🥳🤩" + player2Name + " YOU WON🏅🏆☺️";
  }
}

function play() {
  console.log(forRollingDice(0, 0, player1Name, player2Name, player1Symbol, player2Symbol));
  choice();
}

function quit() {
  return "you are exiting from the game ";
}

function choice() {
  console.log("1.Help \n2.play\n3.Quit");
  const chosenNumber = +prompt("enter your choice");

  switch (chosenNumber) {
    case 1: return help();
    case 2: return play();
    case 3: console.log(quit());
  }
}

const player1Name = prompt("enter player1 name: ", "player1");
const player2Name = prompt("enter player2 name: ", "player2");
const player1Symbol = prompt(player1Name + " enter your symbol", "🏃‍♀️‍➡️");
const player2Symbol = prompt(player2Name + " enter your symbol", "🫅");
choice();
