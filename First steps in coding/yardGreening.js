function yardGreening(input) {
  let totalLand = Number(input[0]);
  let pricePerSqM = 7.61;
  let discount = 0.18;
  let totalPrice = totalLand * pricePerSqM;
  let totalPriceWithDiscount = totalPrice * discount;
  let finalPrice = totalPrice - totalPriceWithDiscount;
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${totalPriceWithDiscount} lv.`);
}
yardGreening(["550"]);
