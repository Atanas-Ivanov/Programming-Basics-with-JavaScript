function foodDelivery(input) {
  let chickenMenuCount = Number(input[0]);
  let fishMenuCount = Number(input[1]);
  let vegetarianMenuCount = Number(input[2]);
  let chickenSingleMenuPrice = 10.35;
  let fishSingleMenuPrice = 12.4;
  let vegetarianSingleMenuPrice = 8.15;
  let deliveryPrice = 2.5;
  let chickenPrice = chickenMenuCount * chickenSingleMenuPrice;
  let fishPrice = fishMenuCount * fishSingleMenuPrice;
  let vegetarianPrice = vegetarianMenuCount * vegetarianSingleMenuPrice;
  let totalMenuPrice = chickenPrice + fishPrice + vegetarianPrice;
  let desertPrice = (totalMenuPrice * 20) / 100;
  let totalPrice = totalMenuPrice + desertPrice + deliveryPrice;
  console.log(totalPrice);
}
foodDelivery(["9 ", "2 ", "6 "]);
