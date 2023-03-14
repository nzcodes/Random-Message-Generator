// Random msg generator
const myObject = {
  jackpot: ["You won the jackpot! 🏆"],
  drink: ["You should drink: 'water'🍸"],
  food: ["You should eat: 'pizza'🍕"],
};

function getRandomMessage() {
  const keys = Object.keys(myObject); 
  const randomIndex = Math.floor(Math.random() * keys.length); // 0, 1, 2
  const randomKey = keys[randomIndex]; 
  let message = "";

  switch (randomKey) {
    case "jackpot":
      message += "Jackpot:\n";
      message += myObject[randomKey][0];
      break;
    case "drink":
      message += "Drink:\n";
      message += myObject[randomKey][0];
      break;
    case "food":
      message += "Food:\n";
      message += myObject[randomKey][0];
      break;
    default:
      message += "Unknown key: " + randomKey;
  }
  return message;
}

// console.log(getRandomMessage());

// this function is triggered onclick
function displayRandomMessage() {
  const messageElement = document.getElementById("message"); // grab element
  messageElement.innerText = getRandomMessage(); // call function
}


