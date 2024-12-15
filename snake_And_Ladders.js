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

function ladderMessage(ladderEnd) {
  console.log("🪜" + 'you hit ladder ☺️ now you are at ' + ladderEnd + "\n");
}

function snakeMesage(snakeEnd) {
  console.log("🐍 you were caught with snake 😆 now you are at " + snakeEnd + "\n");
}

function displayPostion(postion) {
  console.log("  now you are at " + postion + "\n");
}

function displayDiceValue(symbol, input) {
  console.log("▶️ " + symbol + " Rolled dice 🎲  got : " + input);
}

function dislayNeedMessage(playerPostion, need) {
  console.log("  now you are at " + playerPostion + "\n");
  console.log(" YOU NEED " + need + "\n");
}

function displayEnterMessage(symbol) {
  console.log(symbol + "press ENTER play ");
}

function getPlayerPostion(playerPostion, playerSymbol) {
  displayEnterMessage(playerSymbol);

  const input = rollDice();
  playerPostion += input;

  displayDiceValue(playerSymbol, +input);

  if (playerPostion > 100) {
    const need = 100 - (playerPostion - input)
    dislayNeedMessage(playerPostion - input, need);

    return playerPostion - input;
  }

  displayPostion(playerPostion);

  if (!isLadder(playerPostion)) {
    ladderMessage(getLadderEndPostion(playerPostion));
    return getLadderEndPostion(playerPostion);
  }

  if (!isSnake(playerPostion)) {
    snakeMesage(getSnakeEndPostion(playerPostion));
    return getSnakeEndPostion(playerPostion);
  }

  return playerPostion;
}

function help() {
  repeat(50);
  console.log("|🐍🐍 Be Careful with snake postions 37 48 75 91 75  |");
  console.log("|🪜🪜 Ladder Postions 4 12 14 22 41 54               |");
  repeat(50);

  choice();
}

function displayPlayersPostion(player1Name, player2Name, player1, player2) {
  console.log(player1Name + " postion : " + player1 + "\t\t\t\t" + player2Name + " postion : " + player2 + "\n");
}

function winMessage(playerName) {
  return " 🥳🤩 " + playerName + " YOU WON🏅🏆☺️";
}

function repeat(noOfTimes) {
  return console.log('-'.repeat(noOfTimes));
}


function forRollingDice(player1, player2, player1Name, player2Name, player1Symbol, player2Symbol) {
  repeat(70);

  if (player1 !== 100 && player2 !== 100) {
    displayPlayersPostion(player1Name, player2Name, player1, player2);

    const playerOne = getPlayerPostion(player1, player1Symbol);
    const playerTwo = getPlayerPostion(player2, player2Symbol);

    return forRollingDice(playerOne, playerTwo, player1Name, player2Name, player1Symbol, player2Symbol);
  }

  if (player1 === 100) {
    return winMessage(player1Name);
  }

  if (player2 === 100) {
    return winMessage(player1Name);
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
