// roulette.js
function playRoulette(color) {
  const roll = Math.random();
  let result;
  if (roll < 0.48) result = "Red";
  else if (roll < 0.96) result = "Black";
  else result = "Green";

  if(result === color) alert("You won! The ball landed on " + result);
  else alert("You lost! The ball landed on " + result);
}
