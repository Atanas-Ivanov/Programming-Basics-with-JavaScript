function petShop(input) {
  let dogFoodCount = Number(input[0]);
  let catFoodCount = Number(input[1]);
  let dogFoodTotalPrice = dogFoodCount * 2.5;
  let catFoodTotalPrice = catFoodCount * 4;
  let totalPrice = dogFoodTotalPrice + catFoodTotalPrice;
  console.log(`${totalPrice} lv.`);
}
petShop(["5", "4"]);
