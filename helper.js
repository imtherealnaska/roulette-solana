// randomNumber function
const getReturnAmount = (ratio, amount) => {
  // returns the total amount the player will get if his/her guess is correct.
  const return_amount = ratio * amount;
  return return_amount;
};
const totalAmtToBePaid = (amount) => {
  // returns the total amount to be paid by the player for each game.
  // max would be 2.5 SOL
  return amount;
};

const randomNumber = (min, max) => {
  // generates a number between the defined range of [min,max] passed as parameter.
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = {
  getReturnAmount,
  totalAmtToBePaid,
  randomNumber,
};
