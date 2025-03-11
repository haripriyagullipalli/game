let score = 0;

const scoreDisplay = document.createElement("h2");
scoreDisplay.textContent = `Score:${score}`;
document.body.prepend(scoreDisplay);

const div = document.querySelector("#container");

const basket = document.createElement("img");
basket.style.left = "0px";
basket.classList.add("basket");
basket.src = "basket-removebg-preview.png";
div.appendChild(basket);

const fruit = document.createElement("div");
fruit.classList.add("fruit");
div.appendChild(fruit);

document.addEventListener("keydown", (event) => {
  const position = parseInt(basket.style.left);
  console.log(basket.style.left);

  if (event.key === "ArrowRight") {
    moveRight(basket);
  }

  if (event.key === "ArrowLeft") {
    moveLeft(basket);
  }

  // basketRect = basket.getBoundingClientRect();
});

setInterval(() => {
  let fruitRect = fruit.getBoundingClientRect();

  const isCaught =
    fruitRect.bottom >= basketRect.top &&
    fruitRect.left >= basketRect.left &&
    fruitRect.right <= basketRect.right;

  if (isCaught) {
    score += 1;
    scoreDisplay.textContent = `Score:${score}`;
    fruit.style.top = "0px";
    fruit.style.left = `${Math.floor(Math.random() * 800)}px`;
    catchSound.play();
    console.log(score);
  }
}, 100);
