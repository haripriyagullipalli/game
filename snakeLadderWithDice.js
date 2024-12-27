console.log("------------WELCOME TO 🐍SNAKE AND LADDER 🪜 GAME---------------\n");

function repeatLine(length) {
  let string = '';

  for (let i = 0; i < length; i++) {
    string += "-";
  }
  return string;
}

function rollDice() {
  prompt("");
  return Math.ceil(Math.random() * 6);
}

const top = "┏" + repeat(8, "━") + "┓";
const space = "┃" + repeat(8, " ") + "┃";
const two = "┃" + "⚪️" + repeat(4, " ") + "⚪️" + "┃";
const left = "┃" + "⚪️" + repeat(6, " ") + "┃";
const middle = "┃" + repeat(3, " ") + "⚪️" + repeat(3, " ") + "┃";
const right = "┃" + repeat(6, " ") + "⚪️" + "┃";
const bottom = "┗" + repeat(8, "━") + "┛";

function repeat(number, char) {
  if (number === 0) {
    return "";
  }

  return char + repeat(number - 1, char);
}

function delay() {
  for(let i = 0; i < 10000000; i++) {}
}

function printMiddle(number) {
  switch (number) {
    case 1: return space + "\n" + middle + "\n" + space;
    case 2: return space + "\n" + two + "\n" + space;
    case 3: return left + "\n" + middle + "\n" + right;
    case 4: return two + "\n" + space + "\n" + two;
    case 5: return two + "\n" + middle + "\n" + two;
    case 6: return two + "\n" + two + "\n" + two;
  }
}

function dice(value) {
  return top + "\n" + printMiddle(value) + "\n" + bottom;
}

function animation(value) {
console.log(dice(5));
delay();
console.clear();
console.log(dice(4));
delay();
console.clear();
console.log(dice(1));
delay();
console.clear();
console.log(dice(3));
delay();
console.clear();
console.log(dice(2));
delay();
console.clear();
console.log(dice(value));
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
  console.log(playerSymbol + " press ENTER to play ");

  const input = rollDice();
  animation(input);
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
  console.log(repeatLine(54));
  console.log("|🐍🐍 Be Careful with snake postions 37 48 75 91 75  |");
  console.log("|🪜🪜 Ladder Postions 4 12 14 22 41 54               |");
  console.log(repeatLine(54));

  choice();
}

function getPrintRow(endNumber, startNumber, string, input1, input2) {
  if (endNumber < startNumber) {
    return string + " |\n" + repeatLine(52) + "\n";
  }

  if (startNumber === input1 && startNumber === input2) {
    string += "| " + player1Symbol + player2Symbol;
    return getPrintRow(endNumber, startNumber + 1, string, input1, input2);
  }

  if (startNumber === input1) {
    string += "|  " + player1Symbol;
    return getPrintRow(endNumber, startNumber + 1, string, input1, input2);
  }

  if (startNumber === input2) {
    string += "|  " + player2Symbol;
    return getPrintRow(endNumber, startNumber + 1, string, input1, input2);
  }

  if (!isLadder(startNumber)) {
    string += "|  🪜";
    return getPrintRow(endNumber, startNumber + 1, string, input1, input2);
  }

  if (!isSnake(startNumber)) {
    string += "|  🐍";
    return getPrintRow(endNumber, startNumber + 1, string, input1, input2);
  }

  string += startNumber < 10 ? "|  0" + startNumber : "|  " + startNumber;
  return getPrintRow(endNumber, startNumber + 1, string, input1, input2);
}

function table(i, end, string, input1, input2) {
  if (i > end) {
    return "";
  }

  let start = (10 * (i - 1)) + 1;

  return getPrintRow(10 * i, start, string, input1, input2) + table(i + 1, end, string, input1, input2);
}


function forRollingDice(player1, player2, player1Symbol, player2Symbol) {
  console.log(repeatLine(70));

  if (player1 === 100) {
    return " 🥳🤩 " + player1Name + " YOU WON🏅🏆☺️" + "\n";
  }

  if (player2 === 100) {
    return " 🥳🤩" + player2Name + " YOU WON🏅🏆☺️";
  }

  if (player1 !== 100 && player2 !== 100) {

    console.log(player1Name + " postion : " + player1 + "\t\t\t\t" + player2Name + " postion : " + player2 + "\n");

    const playerOne = playerPostion(player1, player1Symbol);
    const playerTwo = playerPostion(player2, player2Symbol);

    console.log(repeatLine(52));
    console.log(table(1, 10, "", playerOne, playerTwo));

    return forRollingDice(playerOne, playerTwo, player1Symbol, player2Symbol);
  }

}

function play() {
  console.log(forRollingDice(0, 0, player1Symbol, player2Symbol));
  choice();
}

function quit() {
  return "you are exiting from the game \n ";
}

function choice() {
  console.log("\t\t1.Help \n\t\t2.play\n\t\t3.Quit");
  const chosenNumber = +prompt("enter your choice");

  switch (chosenNumber) {
    case 1: return help();
    case 2: return play();
    case 3: console.log(quit());
  }
}

const player1Name = prompt("enter player1 name: ", "player1");
const player2Name = prompt("enter player2 name: ", "player2");
const player1Symbol = prompt(player1Name + " enter your symbol", "🧸");
const player2Symbol = prompt(player2Name + " enter your symbol", "😄");

choice();
